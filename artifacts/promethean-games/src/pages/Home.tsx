import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Target, Swords, Shield, Globe, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GameCard } from "@/components/ui/GameCard";
import { FannedCards } from "@/components/ui/FannedCards";
import { useToast } from "@/hooks/use-toast";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function Home() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isContacting, setIsContacting] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
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
    // Simulate API call
    setTimeout(() => {
      setIsContacting(false);
      toast({
        title: "Message Sent",
        description: "We've received your message and will be in touch shortly.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-30" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.h1 
              variants={fadeUp}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground text-glow uppercase tracking-tighter"
            >
              Play Sharper.<br />
              <span className="text-primary">Score Lower.</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeUp}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light"
            >
              Original tabletop games blending precision, strategy, and social play for those who compete to improve.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/games">
                <Button size="lg" className="w-full sm:w-auto text-lg px-10">
                  Explore Our Games
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-10">
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Brand Intro */}
      <section className="py-24 bg-background relative border-b border-border/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="Logo mark" className="w-16 h-16 mx-auto mb-8 opacity-80" />
            <h2 className="text-2xl md:text-4xl font-display font-light leading-relaxed text-foreground">
              Promethean Games is an indie publisher built for players who love to <span className="font-bold text-primary">compete, improve, and have fun</span> doing it. We design experiences where skill outshines luck.
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Featured Games */}
      <section className="py-32 bg-card/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-display font-bold uppercase tracking-wide">Featured Games</h2>
              <p className="text-muted-foreground mt-2">The current roster of Promethean experiences.</p>
            </div>
            <Link href="/games" className="hidden md:block text-primary hover:text-primary/80 font-display font-bold uppercase tracking-wider text-sm">
              View All Games &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GameCard 
              title="Par for the Course" 
              description="A unique billiards training game scored like golf. Build your skills, compete socially, and aim for the lowest score possible."
              tags={["Billiards", "Competitive", "Training"]}
              image={`${import.meta.env.BASE_URL}images/pftc-classic.png`}
              href="/games/par-for-the-course"
            />
            <GameCard 
              title="Par for the Course: Full Swing" 
              description="A 54-card poker deck expanding the course across 4 unique editions. More holes, more strategy, and a whole new way to play your favorite billiards training game."
              tags={["Billiards", "54 Cards", "4 Editions", "Competitive"]}
              customImage={<FannedCards />}
              isComingSoon
            />
            <GameCard 
              title="Par for the Course: Quantum" 
              description="An all-new 18-hole deck with called pockets — players must sink each ball into its assigned pocket. The ultimate test of precision and shot-making under pressure."
              tags={["Billiards", "Called Pockets", "18 Holes", "Advanced"]}
              image={`${import.meta.env.BASE_URL}images/pftc-quantum.png`}
              isComingSoon
            />
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link href="/games">
              <Button variant="outline" className="w-full">View All Games</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Spotlight Section */}
      <section className="py-32 bg-background relative border-y border-border/50 overflow-hidden">
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
                src={`${import.meta.env.BASE_URL}images/table-photo.jpg`} 
                alt="Par for the Course Gameplay" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border border-primary/20 rounded-sm" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-primary font-display font-bold tracking-widest uppercase text-sm mb-4">Spotlight</div>
              <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight mb-6">Par for the Course</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Transform your billiards table into a challenging 9-hole course. Par for the Course is a revolutionary training game where every shot counts, and lower scores win. Designed to build fundamental skills while fueling friendly competition.
              </p>
              
              <ul className="space-y-4 mb-10">
                {['Skill-building progression', 'Infinite replayability', 'Portable and durable design', 'Perfect for solo or social play'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-4">
                <Button>
                  Shop Now
                </Button>
                <Link href="/games">
                  <Button variant="outline">
                    View Game Details
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Promethean */}
      <section className="py-32 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-wide">Why Promethean</h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: Swords, title: "Original Designs", desc: "Fresh mechanics you haven't seen before." },
              { icon: Target, title: "Skill Over Luck", desc: "Your choices dictate the outcome, not the dice." },
              { icon: Shield, title: "Built to Last", desc: "Premium materials engineered for countless replays." },
              { icon: Globe, title: "Play Anywhere", desc: "Portable formats perfect for the bar, league, tournaments or at home." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
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
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-30" />
        
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-tight mb-4">Stay in the loop</h2>
          <p className="text-white/80 mb-10 text-lg">New games, updates, and insider news — straight to your inbox.</p>
          
          <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input 
              type="email" 
              required
              placeholder="Enter your email address" 
              className="flex-grow bg-background border border-border px-6 py-4 rounded-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
            <Button type="submit" className="whitespace-nowrap px-8 py-4 bg-primary text-black hover:bg-primary/90 border-transparent hover:border-transparent" isLoading={isSubmitting}>
              Subscribe <Send size={18} className="ml-2" />
            </Button>
          </form>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-32 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-wide mb-4">Get In Touch</h2>
            <p className="text-muted-foreground">Have a question about our games, rules, or shipping? Drop us a line.</p>
          </div>

          <form onSubmit={handleContact} className="space-y-6 bg-card border border-border p-8 md:p-10 rounded-sm shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-display font-semibold uppercase tracking-wider text-muted-foreground">Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-background border border-border px-4 py-3 rounded-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-display font-semibold uppercase tracking-wider text-muted-foreground">Email</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-background border border-border px-4 py-3 rounded-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-display font-semibold uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea 
                required
                rows={5}
                className="w-full bg-background border border-border px-4 py-3 rounded-sm focus:outline-none focus:border-primary transition-colors resize-none"
              ></textarea>
            </div>
            <Button type="submit" className="w-full" size="lg" isLoading={isContacting}>
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
