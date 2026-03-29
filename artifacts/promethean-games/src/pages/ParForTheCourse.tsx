import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

// Edition data — update descriptions and shopLinks per edition
const editions = [
  {
    name: "Classic",
    image: "pftc-classic.png",
    description:
      "The original Par for the Course. 18 UV-coated cards bring golf-style scoring to the billiards table. Perfect for players of all skill levels, Classic is the foundation — familiar, balanced, and endlessly replayable.",
    tag: "The Original",
    shopLink: "#", // Update with real shop URL
  },
  {
    name: "Reracked",
    image: "pftc-reracked.png",
    description:
      "A fresh spin on the course with a unique blue felt aesthetic and revised hole layouts. Reracked shakes up the sequence you know, offering a new strategic challenge without changing the core rules you love.",
    tag: "New Layouts",
    shopLink: "#",
  },
  {
    name: "Sequential",
    image: "pftc-sequential.png",
    description:
      "Introduces numbered shot sequences to each hole, demanding precision planning before you even chalk your cue. Sequential rewards methodical players who think two shots ahead.",
    tag: "Advanced Play",
    shopLink: "#",
  },
  {
    name: "Tournament",
    image: "pftc-tournament.png",
    description:
      "High-stakes rules built for competitive play. Tournament tightens the scoring windows and raises the pressure, making every shot count in a way casual rounds never do. Find out who really runs the table.",
    tag: "Competitive",
    shopLink: "#",
  },
  {
    name: "Tee'd Off!",
    image: "pftc-teed.png",
    description:
      "The wildcard edition. Unconventional holes, rule twists, and surprise modifiers keep every player on edge. Tee'd Off! is the ultimate game night edition — expect the unexpected and score accordingly.",
    tag: "Party Mode",
    shopLink: "#",
  },
];

export default function ParForTheCourse() {
  return (
    <div className="min-h-screen bg-background pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back link */}
        <Link href="/games" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-display uppercase tracking-wider mb-12">
          <ArrowLeft size={16} />
          All Games
        </Link>

        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mb-20"
        >
          <motion.div variants={fadeUp} className="text-primary font-display font-bold tracking-widest uppercase text-sm mb-3">
            Promethean Games — Flagship Title
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-6">
            Par for the Course
          </motion.h1>
          <motion.div variants={fadeUp} className="w-24 h-1 bg-primary mb-8" />
          <motion.p variants={fadeUp} className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            A billiards training game scored like golf — lower is better. Play solo or compete with friends across 18 unique holes. Available in five distinct editions, each with its own feel, strategy, and challenge level.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mt-6">
            {["1+ Players", "Ages 12+", "~2 Hours", "18 UV Cards", "Skill-Building"].map((tag) => (
              <span key={tag} className="text-xs font-display uppercase tracking-wider text-muted-foreground border border-border px-3 py-1.5 rounded-sm">
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Editions */}
        <div className="mb-16">
          <h2 className="text-2xl font-display font-bold uppercase tracking-wider mb-2 flex items-center gap-4">
            Choose Your Edition
            <span className="h-px bg-border flex-grow" />
          </h2>
          <p className="text-muted-foreground text-sm mb-12">
            Each edition uses the same core ruleset with unique card designs and strategic variations.
          </p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {editions.map((edition) => (
              <motion.div
                key={edition.name}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group bg-card border border-border rounded-sm overflow-hidden flex flex-col transition-all duration-400 hover:border-primary/50 hover:shadow-[0_8px_30px_rgba(245,158,11,0.08)]"
              >
                {/* Edition image */}
                <div className="relative bg-muted overflow-hidden" style={{ aspectRatio: "3/4" }}>
                  <img
                    src={`${import.meta.env.BASE_URL}images/${edition.image}`}
                    alt={`Par for the Course — ${edition.name}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] font-display font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm">
                    {edition.tag}
                  </span>
                </div>

                {/* Edition info */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-display font-bold uppercase tracking-tight mb-3 group-hover:text-primary transition-colors">
                    {edition.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-6">
                    {edition.description}
                  </p>
                  {/* Update shopLink per edition above */}
                  <a href={edition.shopLink} className="block w-full">
                    <Button variant="primary" className="w-full group/btn">
                      <ShoppingCart size={16} className="mr-2" />
                      Shop Now
                    </Button>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* How to play callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card border border-border rounded-sm p-10 md:p-14 text-center"
        >
          <h2 className="text-3xl font-display font-bold uppercase tracking-tight mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Draw a hole card and place it at the head of your table. Attempt the shot as described — the number of tries it takes is your score for that hole. Play all 18 holes, tally your score, and aim to beat par. Fewest shots wins.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" onClick={() => window.location.href = "/#contact"}>
              Ask a Question
            </Button>
            <Button onClick={() => window.location.href = "/#newsletter"}>
              Stay Updated
            </Button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
