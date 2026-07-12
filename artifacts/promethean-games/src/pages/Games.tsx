import { motion } from "framer-motion";
import { Link } from "wouter";
import { GameCard } from "@/components/ui/GameCard";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Seo } from "@/components/seo/Seo";
import { Button } from "@/components/ui/Button";
import { getCanonicalUrl, withBasePath } from "@/lib/site";

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Games", path: "/games" },
];

export default function Games() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Promethean Games Product Lineup",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Par for the Course",
        url: getCanonicalUrl("/games/par-for-the-course"),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background pt-28 pb-24">
      <Seo
        title="Pool Training Games by Promethean Games"
        description="Explore Promethean Games products including Par for the Course, a golf-inspired billiards training game built for pool practice, strategy, cue ball control, and competitive fun."
        path="/games"
        breadcrumbs={breadcrumbs}
        structuredData={structuredData}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="text-primary font-display font-bold tracking-widest uppercase text-sm mb-4">Promethean Games Catalog</div>
          <h1 className="text-5xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-6">
            Pool training games designed to build skill and replayability
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground leading-relaxed">
            Every Promethean Games title is built to make practice more engaging, more social, and more skill-driven. The current lineup centers on Par for the Course for players who want smarter billiards challenges.
          </p>
        </motion.header>

        <section className="mb-24" aria-labelledby="available-now-heading">
          <h2 id="available-now-heading" className="text-2xl font-display font-bold uppercase tracking-wider mb-8 flex items-center gap-4">
            Available now
            <span className="h-px bg-border flex-grow"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <GameCard
              title="Par for the Course"
              description="A golf-inspired billiards training game that helps players improve cue ball control, shot making, strategy, consistency, and competitive play. Available in Classic, Reracked, Sequential, Tournament, and Tee'd Off editions."
              tags={["Pool Training", "Billiards Game", "1+ Players", "18 Holes", "Cue Sports"]}
              image={withBasePath("images/pftc-classic.png")}
              imageAlt="Par for the Course billiards training game product deck"
              href="/games/par-for-the-course"
            />
            <article className="bg-card border border-border rounded-sm p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-display font-bold uppercase tracking-tight mb-4">Why players use it</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Par for the Course turns ordinary pool practice into a scored challenge that works for solo improvement, family game night, pool hall play, league preparation, and gift-worthy cue sports entertainment.
                </p>
                <ul className="space-y-3 text-muted-foreground leading-relaxed">
                  <li>• Structured drills without feeling like traditional drills</li>
                  <li>• Clear scoring that makes progress easier to track</li>
                  <li>• Useful for beginners, league players, and advanced shooters</li>
                  <li>• Strong bridge between fun pool games and serious training</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button asChild>
                  <Link href="/games/par-for-the-course">View editions</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/learning-center">Read practice guides</Link>
                </Button>
              </div>
            </article>
          </div>
        </section>

        <section aria-labelledby="catalog-update-heading" className="mt-12">
          <div className="border border-border/60 rounded-sm p-8 bg-card/30 text-center">
            <h2 id="catalog-update-heading" className="text-2xl font-display font-bold uppercase tracking-wider mb-3">
              Catalog update
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Promethean Games is currently focused on Par for the Course and expanding educational resources for players who want to improve faster.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
