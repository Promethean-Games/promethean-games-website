import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Target, Swords, Shield, Globe, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GameCard } from "@/components/ui/GameCard";
import { FaqSection } from "@/components/content/FaqSection";
import { ResourceCard } from "@/components/content/ResourceCard";
import { Seo } from "@/components/seo/Seo";
import { useToast } from "@/hooks/use-toast";
import { learningArticles, getLearningCategory } from "@/lib/learning";
import { getCanonicalUrl, withBasePath } from "@/lib/site";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const homepageFaq = [
  {
    question: "What is Par for the Course?",
    answer:
      "Par for the Course is a golf-inspired billiards training game from Promethean Games that turns pool practice into an 18-hole challenge focused on cue ball control, shot making, strategy, and competitive fun.",
  },
  {
    question: "Is Par for the Course good for solo pool practice?",
    answer:
      "Yes. The game works well for solo practice because it gives each session structure, variety, and score-based feedback that makes improvement easier to track.",
  },
  {
    question: "Who is Promethean Games for?",
    answer:
      "Promethean Games serves pool players, billiards enthusiasts, league competitors, and anyone who wants better practice tools, more engaging cue sports games, and educational resources that help them improve.",
  },
];

export default function Home() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isContacting, setIsContacting] = useState(false);
  const featuredArticles = learningArticles.slice(0, 3);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Subscribed!",
        description: "Welcome to the Promethean Games newsletter.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    setIsContacting(true);

    setTimeout(() => {
      setIsContacting(false);
      toast({
        title: "Message Sent",
        description: "We've received your message and will be in touch shortly.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Promethean Games Home",
      description:
        "Homepage for Promethean Games featuring Par for the Course, pool training resources, billiards education, and cue sports practice content.",
      url: getCanonicalUrl("/"),
      mainEntity: {
        "@type": "ItemList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Par for the Course",
            url: getCanonicalUrl("/games/par-for-the-course"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Billiards Learning Center",
            url: getCanonicalUrl("/learning-center"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Promethean Games About Page",
            url: getCanonicalUrl("/about"),
          },
        ],
      },
    },
  ];

  return (
    <div className="w-full">
      <Seo
        title="Promethean Games | Pool Training Games, Billiards Practice, and Cue Sports Education"
        description="Discover Promethean Games and Par for the Course, the golf-inspired billiards training game built to improve pool practice, cue ball control, shot making, and competitive play."
        path="/"
        faq={homepageFaq}
        structuredData={structuredData}
      />

      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20" aria-labelledby="home-hero-heading">
        <div className="absolute inset-0 z-0">
          <img
            src={withBasePath("images/hero-bg.png")}
            alt="Pool table background with dramatic lighting"
            className="w-full h-full object-cover opacity-30"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-8">
            <motion.p
              variants={fadeUp}
              className="text-primary font-display font-bold tracking-widest uppercase text-sm"
            >
              Pool training games and billiards practice tools
            </motion.p>

            <motion.h1
              id="home-hero-heading"
              variants={fadeUp}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground text-glow uppercase tracking-tighter"
            >
              Improve Your Pool Game With
              <br />
              <span className="text-primary">Par for the Course</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              Promethean Games creates original billiards games and cue sports resources that make pool practice more structured, more social, and more rewarding for players who want to learn faster.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button asChild size="lg" className="w-full sm:w-auto text-lg px-10">
                <Link href="/games/par-for-the-course">Explore Par for the Course</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-lg px-10">
                <Link href="/learning-center">Browse the Learning Center</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background relative border-b border-border/50" aria-labelledby="brand-intro-heading">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <img
              src={withBasePath("images/logo.png")}
              alt="Promethean Games brand mark"
              className="w-16 h-16 mx-auto mb-8 opacity-80"
              loading="lazy"
              decoding="async"
            />
            <h2 id="brand-intro-heading" className="text-2xl md:text-4xl font-display font-light leading-relaxed text-foreground">
              Promethean Games helps pool and billiards players <span className="font-bold text-primary">compete, improve, and have more fun practicing</span> through original training games, educational guides, and skill-first design.
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-card/30 relative" aria-labelledby="featured-games-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12 gap-6 flex-wrap">
            <div>
              <h2 id="featured-games-heading" className="text-4xl font-display font-bold uppercase tracking-wide">
                Featured games
              </h2>
              <p className="text-muted-foreground mt-2 max-w-2xl">
                Explore the current Promethean Games lineup, centered on the flagship pool training game built for skill-building and replayability.
              </p>
            </div>
            <Link href="/games" className="hidden md:block text-primary hover:text-primary/80 font-display font-bold uppercase tracking-wider text-sm">
              View all games &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-2xl">
            <GameCard
              title="Par for the Course"
              description="A golf-inspired billiards training game that builds cue ball control, shot making, strategy, and competitive confidence while making practice fun."
              tags={["Pool Training", "Billiards Game", "Cue Sports"]}
              image={withBasePath("images/pftc-classic.png")}
              imageAlt="Par for the Course Classic edition pool training card deck"
              href="/games/par-for-the-course"
            />
          </div>

          <div className="mt-8 text-center md:hidden">
            <Button asChild variant="outline" className="w-full">
              <Link href="/games">View All Games</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-32 bg-background relative border-y border-border/50 overflow-hidden" aria-labelledby="spotlight-heading">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-primary/5 blur-[150px] -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] rounded-sm overflow-hidden box-glow"
            >
              <img
                src={withBasePath("images/table-photo.jpg")}
                alt="Par for the Course training game set up on a pool table"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 border border-primary/20 rounded-sm" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-primary font-display font-bold tracking-widest uppercase text-sm mb-4">Flagship product</div>
              <h2 id="spotlight-heading" className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight mb-6">
                Par for the Course
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Transform your billiards table into an 18-hole practice challenge. Par for the Course blends pool drills, cue sports strategy, and friendly competition into one portable game that works for solo sessions, league preparation, and social play.
              </p>

              <ul className="space-y-4 mb-10">
                {["Reinforces cue ball control and position play", "Creates measurable solo or group practice", "Makes pool education more engaging and repeatable", "Works for beginners, league players, and advanced shooters"].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link href="/games/par-for-the-course">View Game Details</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/learning-center/how-to-practice-pool">Read Practice Tips</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-card/50" aria-labelledby="why-promethean-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 id="why-promethean-heading" className="text-3xl md:text-5xl font-display font-bold uppercase tracking-wide">
              Why Promethean Games
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: Swords, title: "Original Designs", desc: "Fresh tabletop mechanics built around meaningful shot selection and player agency." },
              { icon: Target, title: "Skill Over Luck", desc: "Products designed to reward better decisions, better execution, and better practice habits." },
              { icon: Shield, title: "Built to Last", desc: "Durable materials and repeatable challenges made for bars, home rooms, leagues, and tournaments." },
              { icon: Globe, title: "Play Anywhere", desc: "Portable formats that fit solo pool practice, game night, competitive preparation, and cue sports coaching." },
            ].map((feature, idx) => (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto bg-background border border-border rounded-sm flex items-center justify-center mb-6 group-hover:border-primary group-hover:text-primary transition-colors box-glow">
                  <feature.icon size={32} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-background border-y border-border/50" aria-labelledby="learning-preview-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6 mb-12 flex-wrap">
            <div className="max-w-3xl">
              <div className="text-primary font-display font-bold tracking-widest uppercase text-sm mb-4">Learning center</div>
              <h2 id="learning-preview-heading" className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight mb-4">
                Helpful guides for pool players who want to improve faster
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Strengthen topical authority and sharpen your game with educational content on pool drills, billiards strategy, cue ball control, league preparation, and smarter practice routines.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link href="/learning-center">Visit the full learning center</Link>
            </Button>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {featuredArticles.map((article) => (
              <ResourceCard
                key={article.slug}
                article={article}
                category={getLearningCategory(article.category)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary relative overflow-hidden" id="newsletter" aria-labelledby="newsletter-heading">
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-30" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 id="newsletter-heading" className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-tight mb-4">
            Stay in the loop
          </h2>
          <p className="text-white/80 mb-10 text-lg">
            Get product updates, new pool training articles, and practice ideas from Promethean Games.
          </p>

          <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="Enter your email address"
              className="flex-grow bg-background border border-border px-6 py-4 rounded-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
            <Button
              type="submit"
              className="whitespace-nowrap px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 border-transparent hover:border-transparent"
              isLoading={isSubmitting}
              loadingText="Subscribing…"
            >
              Subscribe <Send size={18} className="ml-2" />
            </Button>
          </form>
        </div>
      </section>

      <FaqSection
        title="Common questions about Promethean Games and pool training"
        intro="These answers help new visitors understand the brand, the flagship game, and how the site supports billiards players looking for better ways to practice."
        items={homepageFaq}
        className="py-24 bg-card/40"
      />

      <section id="contact" className="py-32 bg-background" aria-labelledby="contact-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-primary font-display font-bold tracking-widest uppercase text-sm mb-4">Contact Promethean Games</div>
            <h2 id="contact-heading" className="text-3xl md:text-5xl font-display font-bold uppercase tracking-wide mb-4">
              Get in touch
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Have a question about our games, pool practice ideas, or billiards training? Send a message and we will follow up.
            </p>
          </div>

          <form onSubmit={handleContact} className="space-y-6 bg-card border border-border p-8 md:p-10 rounded-sm shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="contact-name" className="text-sm font-display font-semibold uppercase tracking-wider text-muted-foreground">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="w-full bg-background border border-border px-4 py-3 rounded-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-email" className="text-sm font-display font-semibold uppercase tracking-wider text-muted-foreground">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full bg-background border border-border px-4 py-3 rounded-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="contact-message" className="text-sm font-display font-semibold uppercase tracking-wider text-muted-foreground">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                className="w-full bg-background border border-border px-4 py-3 rounded-sm focus:outline-none focus:border-primary transition-colors resize-none"
              ></textarea>
            </div>
            <Button type="submit" className="w-full" size="lg" isLoading={isContacting} loadingText="Sending…">
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
