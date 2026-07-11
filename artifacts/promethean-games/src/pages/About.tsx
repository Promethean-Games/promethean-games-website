import { motion } from "framer-motion";
import { Link } from "wouter";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Seo } from "@/components/seo/Seo";
import { Button } from "@/components/ui/Button";

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background pt-28 pb-24">
      <Seo
        title="About Promethean Games | Billiards Game Publisher and Pool Training Brand"
        description="Learn about Promethean Games, the tabletop game publisher behind Par for the Course and a growing catalog of pool training games, billiards resources, and cue sports products."
        path="/about"
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 max-w-4xl">
          <div className="text-primary font-display font-bold tracking-widest uppercase text-sm mb-4">About Promethean Games</div>
          <h1 className="text-5xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-8">
            Forged in competition. Built for players who want to get better.
          </h1>
          <div className="w-24 h-1 bg-primary mb-12" />
          <p className="text-xl text-muted-foreground leading-relaxed">
            Promethean Games is a tabletop game publisher focused on skill-based experiences for pool players, billiards enthusiasts, and competitive learners who want practice tools that feel as good as game night.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="prose prose-invert prose-lg max-w-none font-light text-muted-foreground"
        >
          <p className="text-2xl text-foreground leading-relaxed mb-10 font-normal">
            We believe the best games reward players for improving at them. That idea shapes everything we make, from billiards training products to educational content that helps cue sports players practice with more purpose.
          </p>

          <p>
            Promethean Games was created to fill a gap between casual bar games and serious improvement tools. Too many tabletop experiences rely heavily on luck, while too many training products forget that players also want variety, challenge, and fun. We build for the overlap.
          </p>

          <p>
            Our flagship title, <strong>Par for the Course</strong>, shows that philosophy clearly. It helps players work on cue ball control, shot making, strategy, consistency, and competitive readiness while turning ordinary pool practice into a repeatable challenge that people actually want to play again.
          </p>

          <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8 not-prose">
            <article className="bg-card border border-border p-8 rounded-sm">
              <h2 className="font-display font-bold text-2xl text-foreground uppercase tracking-wide mb-4">Our mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To design original tabletop experiences and cue sports learning tools that bridge the gap between fun pool games and meaningful billiards improvement.
              </p>
            </article>
            <article className="bg-primary p-8 rounded-sm">
              <h2 className="font-display font-bold text-2xl text-primary-foreground uppercase tracking-wide mb-4">Our philosophy</h2>
              <p className="text-primary-foreground/80 font-medium leading-relaxed">
                Keep rules approachable, make decisions matter, and create systems with enough depth that players can keep learning for years.
              </p>
            </article>
          </div>

          <h2 className="text-3xl font-display font-bold text-foreground uppercase tracking-wider mt-16 mb-6">The Promethean standard</h2>
          <ul className="space-y-6 list-none pl-0">
            <li className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 font-display font-bold">1</div>
              <div>
                <strong className="text-foreground block mb-1">Intentional design</strong>
                Every mechanic should reinforce a real player skill, useful strategic choice, or memorable social moment.
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 font-display font-bold">2</div>
              <div>
                <strong className="text-foreground block mb-1">Player agency</strong>
                We prefer games where your decisions and execution shape the result more than randomness does.
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 font-display font-bold">3</div>
              <div>
                <strong className="text-foreground block mb-1">Durable replay value</strong>
                Products should be robust enough for home tables, bars, pool halls, league nights, and repeat use by improving players.
              </div>
            </li>
          </ul>
        </motion.div>

        <section className="mt-20 bg-card border border-border rounded-sm p-8 md:p-10" aria-labelledby="next-step-heading">
          <h2 id="next-step-heading" className="text-3xl font-display font-bold uppercase tracking-tight mb-4">
            Keep exploring the Promethean ecosystem
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6 max-w-3xl">
            If you want to see how the brand translates into practical training, start with the Par for the Course product page or dive into the learning center for guides on pool practice, cue ball control, 8 ball strategy, 9 ball strategy, and league preparation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/games/par-for-the-course">Explore Par for the Course</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/learning-center">Visit the Learning Center</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
