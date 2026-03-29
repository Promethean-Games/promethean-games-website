import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="text-primary font-display font-bold tracking-widest uppercase text-sm mb-4">Our Story</div>
          <h1 className="text-5xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-8">
            Forged in Competition
          </h1>
          <div className="w-24 h-1 bg-primary mb-12" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="prose prose-invert prose-lg max-w-none font-light text-muted-foreground"
        >
          <p className="text-2xl text-foreground leading-relaxed mb-10 font-normal">
            Promethean Games was founded on a simple principle: the best games are the ones that reward you for getting better at them.
          </p>

          <p>
            We grew tired of tabletop experiences that felt like a coin flip. Don't get us wrong, a little randomness can create memorable moments, but we believe the core of a truly great game lies in mastery, execution, and strategy.
          </p>

          <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8 not-prose">
            <div className="bg-card border border-border p-8 rounded-sm">
              <h3 className="font-display font-bold text-2xl text-foreground uppercase tracking-wide mb-4">Our Mission</h3>
              <p className="text-muted-foreground">To design physical game experiences that bridge the gap between casual pub games and deep strategic tabletop competition.</p>
            </div>
            <div className="bg-primary p-8 rounded-sm">
              <h3 className="font-display font-bold text-2xl text-primary-foreground uppercase tracking-wide mb-4">Our Philosophy</h3>
              <p className="text-primary-foreground/80 font-medium">Create games with simple rulesets but incredibly high skill ceilings. Easy to learn, difficult to master.</p>
            </div>
          </div>

          <h2 className="text-3xl font-display font-bold text-foreground uppercase tracking-wider mt-16 mb-6">The Promethean Standard</h2>
          <ul className="space-y-6 list-none pl-0">
            <li className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 font-display font-bold">1</div>
              <div>
                <strong className="text-foreground block mb-1">Intentional Design</strong>
                Every component, rule, and mechanic must serve a clear purpose. We cut the fluff so you can focus on the game.
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 font-display font-bold">2</div>
              <div>
                <strong className="text-foreground block mb-1">Premium Build Quality</strong>
                Our games are meant to be played, not kept in shrink wrap. We source durable materials that survive real-world environments.
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 font-display font-bold">3</div>
              <div>
                <strong className="text-foreground block mb-1">Player Agency</strong>
                We design systems where your decisions matter. If you lose, you'll know exactly what you need to practice for next time.
              </div>
            </li>
          </ul>

        </motion.div>
      </div>
    </div>
  );
}
