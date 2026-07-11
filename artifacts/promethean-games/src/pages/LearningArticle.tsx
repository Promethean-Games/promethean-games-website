import { Link } from "wouter";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Seo } from "@/components/seo/Seo";
import { FaqSection } from "@/components/content/FaqSection";
import { ResourceCard } from "@/components/content/ResourceCard";
import { Button } from "@/components/ui/Button";
import {
  getLearningArticle,
  getLearningCategory,
  getRelatedArticles,
  type LearningArticle as LearningArticleType,
} from "@/lib/learning";
import { getCanonicalUrl } from "@/lib/site";
import NotFound from "@/pages/not-found";

interface LearningArticleProps {
  slug: string;
}

function buildStructuredData(article: LearningArticleType) {
  const url = getCanonicalUrl(`/learning-center/${article.slug}`);
  const category = getLearningCategory(article.category);

  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.description,
      url,
      articleSection: category?.name ?? article.category,
      keywords: article.tags.join(", "),
      author: {
        "@type": "Organization",
        name: "Promethean Games",
      },
      publisher: {
        "@type": "Organization",
        name: "Promethean Games",
      },
      mainEntityOfPage: url,
      about: ["pool training", "billiards practice", ...article.tags],
    },
    article.slug === "how-to-practice-pool"
      ? {
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: article.title,
          description: article.description,
          step: article.sections.map((section, index) => ({
            "@type": "HowToStep",
            position: index + 1,
            name: section.heading,
            text: [...section.paragraphs, ...(section.items ?? [])].join(" "),
          })),
        }
      : {
          "@context": "https://schema.org",
          "@type": "DefinedTermSet",
          name: article.title,
          description: article.description,
          hasDefinedTerm: article.tags.map((tag) => ({
            "@type": "DefinedTerm",
            name: tag,
          })),
        },
  ];
}

export default function LearningArticle({ slug }: LearningArticleProps) {
  const article = getLearningArticle(slug);

  if (!article) {
    return <NotFound />;
  }

  const category = getLearningCategory(article.category);
  const relatedArticles = getRelatedArticles(article);
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Learning Center", path: "/learning-center" },
    { name: article.title, path: `/learning-center/${article.slug}` },
  ];

  return (
    <div className="min-h-screen bg-background pt-28 pb-24">
      <Seo
        title={`${article.title} | Billiards Learning Center`}
        description={article.description}
        path={`/learning-center/${article.slug}`}
        breadcrumbs={breadcrumbs}
        faq={article.faq}
        structuredData={buildStructuredData(article)}
        type="article"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <article>
          <header className="max-w-4xl mb-16">
            <div className="text-primary font-display font-bold tracking-widest uppercase text-sm mb-4">
              {article.heroLabel}
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-6">
              {article.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">{article.description}</p>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-wider text-muted-foreground font-display">
              <span className="border border-border px-3 py-1.5 rounded-sm">{article.readTime}</span>
              <span className="border border-border px-3 py-1.5 rounded-sm">{article.audience}</span>
              {category ? <span className="border border-border px-3 py-1.5 rounded-sm">{category.name}</span> : null}
            </div>
          </header>

          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="space-y-12">
              <section className="prose prose-invert prose-lg max-w-none">
                {article.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>

              {article.sections.map((section) => (
                <section key={section.heading} className="bg-card/50 border border-border rounded-sm p-8">
                  <h2 className="text-3xl font-display font-bold uppercase tracking-tight mb-5">{section.heading}</h2>
                  <div className="prose prose-invert prose-lg max-w-none">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.items?.length ? (
                    <div className="mt-6">
                      {section.listTitle ? (
                        <h3 className="text-lg font-display font-semibold uppercase tracking-wide mb-3">
                          {section.listTitle}
                        </h3>
                      ) : null}
                      <ul className="space-y-3 text-muted-foreground leading-relaxed">
                        {section.items.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0" aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </section>
              ))}
            </div>

            <aside className="space-y-6 lg:sticky lg:top-28 self-start">
              <div className="bg-card border border-border rounded-sm p-6">
                <h2 className="text-2xl font-display font-bold uppercase tracking-tight mb-4">
                  Train the same skills on the table
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Par for the Course helps players practice cue ball control, decision making, and shot consistency in a scored format that feels more like competition than repetition.
                </p>
                <div className="space-y-3">
                  <Button asChild className="w-full">
                    <Link href="/games/par-for-the-course">Explore Par for the Course</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/learning-center">Browse all guides</Link>
                  </Button>
                </div>
              </div>

              <div className="bg-card border border-border rounded-sm p-6">
                <h2 className="text-2xl font-display font-bold uppercase tracking-tight mb-4">
                  Covered topics
                </h2>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-display uppercase tracking-wider text-muted-foreground border border-border px-2 py-1 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </article>

        <FaqSection
          title="Frequently asked questions"
          intro="These quick answers reinforce the key search intent behind the guide and help players get to the next useful step faster."
          items={article.faq}
          className="mt-20"
        />

        {relatedArticles.length > 0 ? (
          <section className="mt-20" aria-labelledby="related-guides-heading">
            <div className="flex items-end justify-between gap-6 mb-10 flex-wrap">
              <div>
                <h2 id="related-guides-heading" className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight mb-3">
                  Related guides
                </h2>
                <p className="text-muted-foreground max-w-2xl">
                  Continue building your topic cluster with closely related practice, strategy, and skill-development resources.
                </p>
              </div>
              <Button asChild variant="outline">
                <Link href="/learning-center">Visit the full learning center</Link>
              </Button>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {relatedArticles.map((relatedArticle) => (
                <ResourceCard
                  key={relatedArticle.slug}
                  article={relatedArticle}
                  category={getLearningCategory(relatedArticle.category)}
                />
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
}

