import { BookOpen, GraduationCap, MapPinned } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Seo } from "@/components/seo/Seo";
import { ResourceCard } from "@/components/content/ResourceCard";
import { Button } from "@/components/ui/Button";
import { Link } from "wouter";
import { learningArticles, learningCategories, getLearningCategory } from "@/lib/learning";
import { getCanonicalUrl } from "@/lib/site";

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Learning Center", path: "/learning-center" },
];

export default function LearningCenter() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Billiards Learning Center",
      description:
        "Educational pool and billiards guides covering practice routines, cue ball control, 8 ball strategy, 9 ball strategy, and league improvement.",
      url: getCanonicalUrl("/learning-center"),
      about: ["pool training", "billiards practice", "cue sports education"],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Pool and Billiards Guides",
      itemListElement: learningArticles.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: getCanonicalUrl(`/learning-center/${article.slug}`),
        name: article.title,
      })),
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-28 pb-24">
      <Seo
        title="Billiards Learning Center | Pool Practice Guides and Strategy Articles"
        description="Explore in-depth pool and billiards guides from Promethean Games covering pool drills, cue ball control, 8 ball strategy, 9 ball strategy, APA practice tips, and smarter ways to improve at pool."
        path="/learning-center"
        breadcrumbs={breadcrumbs}
        structuredData={structuredData}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <section className="mb-20" aria-labelledby="learning-center-heading">
          <div className="max-w-4xl">
            <div className="text-primary font-display font-bold tracking-widest uppercase text-sm mb-4">
              Billiards Learning Center
            </div>
            <h1 id="learning-center-heading" className="text-5xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-6">
              Pool training guides that help you practice with purpose
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Build better pool skills with practical guides on cue ball control, position play, practice routines, league preparation, and match strategy. Every article is designed to help players learn faster, practice smarter, and enjoy the game more.
            </p>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3 mb-20" aria-label="Learning center benefits">
          {[
            {
              icon: GraduationCap,
              title: "Skill-first instruction",
              description: "Every guide focuses on decisions and habits that transfer to real 8 ball, 9 ball, and league play.",
            },
            {
              icon: BookOpen,
              title: "Search-friendly topic clusters",
              description: "Practice, strategy, and skill-development articles are grouped so players can move naturally from fundamentals to advanced concepts.",
            },
            {
              icon: MapPinned,
              title: "Built around real players",
              description: "The content is written for beginners, league competitors, and improving players who want practical help instead of vague theory.",
            },
          ].map((item) => (
            <article key={item.title} className="bg-card border border-border rounded-sm p-6">
              <item.icon className="text-primary mb-4" size={28} aria-hidden="true" />
              <h2 className="text-2xl font-display font-bold mb-3">{item.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </article>
          ))}
        </section>

        <section className="mb-20" aria-labelledby="learning-categories-heading">
          <div className="flex items-end justify-between gap-6 mb-10 flex-wrap">
            <div>
              <h2 id="learning-categories-heading" className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight mb-3">
                Browse by topic
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                This content hub is organized into clear categories so readers and search engines can follow a logical topic cluster from general pool practice to advanced competitive play.
              </p>
            </div>
            <Button asChild>
              <Link href="/games/par-for-the-course">See the training game behind the guides</Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {learningCategories.map((category) => {
              const matchingArticles = learningArticles.filter((article) => article.category === category.slug);
              return (
                <article key={category.slug} className="bg-card/60 border border-border rounded-sm p-6">
                  <h3 className="text-2xl font-display font-bold mb-3">{category.name}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{category.description}</p>
                  <p className="text-sm text-muted-foreground">
                    Includes {matchingArticles.length} article{matchingArticles.length === 1 ? "" : "s"}.
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section aria-labelledby="all-guides-heading">
          <div className="mb-10">
            <h2 id="all-guides-heading" className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight mb-3">
              Featured pool and billiards guides
            </h2>
            <p className="text-muted-foreground max-w-3xl">
              Start with a practice framework, then branch into cue ball control, strategy, or league preparation. Each guide links to related articles and naturally introduces Par for the Course as a structured way to reinforce the same skills on the table.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {learningArticles.map((article) => (
              <ResourceCard
                key={article.slug}
                article={article}
                category={getLearningCategory(article.category)}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

