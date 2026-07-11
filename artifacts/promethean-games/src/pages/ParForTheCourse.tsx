import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Seo } from "@/components/seo/Seo";
import { FaqSection } from "@/components/content/FaqSection";
import { getCanonicalUrl, withBasePath } from "@/lib/site";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Games", path: "/games" },
  { name: "Par for the Course", path: "/games/par-for-the-course" },
];

const productFaq = [
  {
    question: "What kind of game is Par for the Course?",
    answer:
      "Par for the Course is a golf-inspired billiards training game that turns pool practice into a scored challenge focused on cue ball control, shot making, strategy, and consistency.",
  },
  {
    question: "Can beginners play Par for the Course?",
    answer:
      "Yes. The game works for newer players as a fun way to practice fundamentals, and it also gives experienced players a structured way to chase lower scores and tougher layouts.",
  },
  {
    question: "Is Par for the Course good for solo practice and league preparation?",
    answer:
      "Absolutely. It works well for solo pool practice, friendly competition, and targeted improvement before league or tournament play because each hole creates a focused challenge.",
  },
];

const editions = [
  {
    name: "Classic",
    image: "pftc-classic.png",
    description:
      "The original Par for the Course experience. Eighteen UV-coated cards bring golf-style scoring to the billiards table in a format that is approachable, competitive, and endlessly replayable.",
    tag: "The Original",
    href: "/#contact",
    ctaLabel: "Ask About Classic",
  },
  {
    name: "Reracked",
    image: "pftc-reracked.png",
    description:
      "A fresh spin on the course with new layouts and a different visual identity. Reracked keeps the core rules intact while giving returning players new pattern and speed-control problems to solve.",
    tag: "New Layouts",
    href: "/#contact",
    ctaLabel: "Ask About Reracked",
  },
  {
    name: "Sequential",
    image: "pftc-sequential.png",
    description:
      "Sequential introduces numbered shot sequences that reward planning and route discipline. It is a strong fit for players who want to practice pattern awareness and shot order under pressure.",
    tag: "Advanced Play",
    href: "/#contact",
    ctaLabel: "Ask About Sequential",
  },
  {
    name: "Tournament",
    image: "pftc-tournament.png",
    description:
      "Built for more competitive play, Tournament tightens the scoring pressure and rewards players who can stay precise, composed, and strategic over a full round.",
    tag: "Competitive",
    href: "/#contact",
    ctaLabel: "Ask About Tournament",
  },
  {
    name: "Tee'd Off!",
    image: "pftc-teed.png",
    description:
      "The unpredictable edition. Tee'd Off! adds twists, unusual holes, and social energy that make it perfect for mixed-skill game nights, pool halls, and players who want extra chaos with their competition.",
    tag: "Party Mode",
    href: "/#contact",
    ctaLabel: "Ask About Tee'd Off!",
  },
];

export default function ParForTheCourse() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Par for the Course",
    brand: {
      "@type": "Brand",
      name: "Promethean Games",
    },
    category: "Billiards training game",
    description:
      "A golf-inspired pool and billiards training game that improves cue ball control, shot making, strategy, consistency, and competitive play while making practice more fun.",
    url: getCanonicalUrl("/games/par-for-the-course"),
    image: editions.map((edition) => getCanonicalUrl(`/images/${edition.image}`)),
  };

  return (
    <div className="min-h-screen bg-background pt-28 pb-24">
      <Seo
        title="Par for the Course | Golf-Inspired Pool Training Game"
        description="Explore Par for the Course, the flagship Promethean Games billiards training game designed to improve pool practice, cue ball control, shot making, strategy, and competitive play."
        path="/games/par-for-the-course"
        breadcrumbs={breadcrumbs}
        faq={productFaq}
        structuredData={structuredData}
        type="product"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <Link href="/games" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-display uppercase tracking-wider mb-12">
          <ArrowLeft size={16} />
          All Games
        </Link>

        <motion.div initial="hidden" animate="visible" variants={stagger} className="mb-20 max-w-5xl">
          <motion.div variants={fadeUp} className="text-primary font-display font-bold tracking-widest uppercase text-sm mb-3">
            Promethean Games — Flagship Title
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-6">
            Par for the Course
          </motion.h1>
          <motion.div variants={fadeUp} className="w-24 h-1 bg-primary mb-8" />
          <motion.p variants={fadeUp} className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Par for the Course is a golf-inspired billiards training game where lower scores win. Each hole challenges players to combine shot making, cue ball control, strategy, and consistency in a format that works for solo practice, social competition, league preparation, and gift-worthy cue sports fun.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mt-6">
            {["1+ Players", "Ages 12+", "Pool Training Game", "18 Hole Challenge", "Cue Ball Control"].map((tag) => (
              <span key={tag} className="text-xs font-display uppercase tracking-wider text-muted-foreground border border-border px-3 py-1.5 rounded-sm">
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <section className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] mb-20" aria-labelledby="product-benefits-heading">
          <div className="space-y-8">
            <article className="bg-card border border-border rounded-sm p-8">
              <h2 id="product-benefits-heading" className="text-3xl font-display font-bold uppercase tracking-tight mb-4">
                Why players use Par for the Course
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The game bridges the gap between ordinary drills and real competition. Instead of repeating disconnected shots, players face defined layouts with scoring pressure that makes practice feel meaningful.
              </p>
              <ul className="space-y-3 text-muted-foreground leading-relaxed">
                <li>• Makes pool practice measurable and repeatable</li>
                <li>• Helps reinforce cue ball control and position play</li>
                <li>• Supports solo sessions, friendly matches, and league prep</li>
                <li>• Turns improvement into a fun, social challenge</li>
              </ul>
            </article>

            <article className="bg-card border border-border rounded-sm p-8">
              <h2 className="text-3xl font-display font-bold uppercase tracking-tight mb-4">Who it is for</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Par for the Course works for beginners learning how to practice pool, league players looking for better structure, and advanced competitors who want a fresh way to sharpen their decision making under pressure.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild variant="outline">
                  <Link href="/learning-center/how-to-practice-pool">How to Practice Pool</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/learning-center/cue-ball-control-guide">Cue Ball Control Guide</Link>
                </Button>
              </div>
            </article>
          </div>

          <aside className="bg-card border border-border rounded-sm p-8 h-fit">
            <h2 className="text-2xl font-display font-bold uppercase tracking-tight mb-4">Use cases</h2>
            <ul className="space-y-3 text-muted-foreground leading-relaxed mb-6">
              <li>• Practice pool alone without getting bored</li>
              <li>• Add variety to league warm-ups and training nights</li>
              <li>• Create fun pool games for friends and family</li>
              <li>• Give pool players a unique cue sports gift</li>
            </ul>
            <Button asChild className="w-full mb-3">
              <a href={withBasePath("/#contact")}>Ask About Availability</a>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <a href={withBasePath("/#newsletter")}>Get Product Updates</a>
            </Button>
          </aside>
        </section>

        <section className="mb-16" aria-labelledby="choose-edition-heading">
          <h2 id="choose-edition-heading" className="text-2xl font-display font-bold uppercase tracking-wider mb-2 flex items-center gap-4">
            Choose Your Edition
            <span className="h-px bg-border flex-grow" />
          </h2>
          <p className="text-muted-foreground text-sm mb-12 max-w-3xl">
            Each edition shares the same core rules while changing the challenge, vibe, or strategic emphasis. That keeps the game fresh for returning players and lets you pick the flavor that best matches your style.
          </p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {editions.map((edition) => (
              <motion.article
                key={edition.name}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group bg-card border border-border rounded-sm overflow-hidden flex flex-col transition-all duration-400 hover:border-primary/50 hover:shadow-[0_8px_30px_rgba(245,158,11,0.08)]"
              >
                <div className="relative bg-muted overflow-hidden" style={{ aspectRatio: "3/4" }}>
                  <img
                    src={withBasePath(`images/${edition.image}`)}
                    alt={`Par for the Course ${edition.name} edition`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] font-display font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm">
                    {edition.tag}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-display font-bold uppercase tracking-tight mb-3 group-hover:text-primary transition-colors">
                    {edition.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-6">
                    {edition.description}
                  </p>
                  <Button asChild variant="primary" className="w-full group/btn">
                    <a href={withBasePath(edition.href)}>
                      <ShoppingCart size={16} className="mr-2" />
                      {edition.ctaLabel}
                    </a>
                  </Button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card border border-border rounded-sm p-10 md:p-14 text-center"
          aria-labelledby="how-it-works-heading"
        >
          <h2 id="how-it-works-heading" className="text-3xl font-display font-bold uppercase tracking-tight mb-4">
            How it works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Draw a hole card and place it at the head of your table. Attempt the shot as described. The number of tries it takes becomes your score for that hole. Play all 18 holes, tally the round, and aim to beat par. The fewest shots wins.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline">
              <a href={withBasePath("/#contact")}>Ask a Question</a>
            </Button>
            <Button asChild>
              <a href={withBasePath("/#newsletter")}>Stay Updated</a>
            </Button>
          </div>
        </motion.section>

        <FaqSection
          title="Par for the Course FAQ"
          intro="These answers help players, gift shoppers, and league competitors quickly understand how the product fits into pool practice and game night."
          items={productFaq}
          className="mt-20"
        />
      </div>
    </div>
  );
}
