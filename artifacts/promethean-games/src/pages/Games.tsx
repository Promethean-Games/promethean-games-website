import { motion } from "framer-motion";
import { GameCard } from "@/components/ui/GameCard";

export default function Games() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-6">Our Games</h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground leading-relaxed">
            Discover the Promethean collection. Every game is designed to challenge your skills, reward strategic thinking, and look incredible on your table.
          </p>
        </motion.div>

        {/* Available Now */}
        <div className="mb-24">
          <h2 className="text-2xl font-display font-bold uppercase tracking-wider mb-8 flex items-center gap-4">
            Available Now
            <span className="h-px bg-border flex-grow"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <GameCard 
              title="Par for the Course" 
              description="A unique billiards training game scored like golf. Build your skills, compete socially, and aim for the lowest score possible. Available in 5 editions — Classic, Reracked, Sequential, Tournament, and Tee'd Off!"
              tags={["Billiards", "Competitive", "Training", "1+ Players", "~2 hrs"]}
              image={`${import.meta.env.BASE_URL}images/pftc-classic.png`}
              href="/games/par-for-the-course"
            />
          </div>
        </div>

        {/* In Development */}
        <div>
          <h2 className="text-2xl font-display font-bold uppercase tracking-wider mb-8 flex items-center gap-4 text-muted-foreground">
            In Development
            <span className="h-px bg-border flex-grow"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GameCard 
              title="Par for the Course: Full Swing" 
              description="A 54-card poker deck expanding the course across 4 unique editions. More holes, more strategy, and a whole new way to play your favorite billiards training game."
              tags={["Billiards", "54 Cards", "4 Editions", "Competitive"]}
              image={`${import.meta.env.BASE_URL}images/placeholder-1.png`}
              isComingSoon
            />
            <GameCard 
              title="Par for the Course: Quantum" 
              description="An all-new 18-hole deck with called pockets — players must sink each ball into its assigned pocket. The ultimate test of precision and shot-making under pressure."
              tags={["Billiards", "Called Pockets", "18 Holes", "Advanced"]}
              image={`${import.meta.env.BASE_URL}images/pftc-quantum.png`}
              isComingSoon
            />
            <div className="border border-dashed border-border/50 rounded-sm flex flex-col items-center justify-center p-8 text-center bg-card/20 min-h-[400px]">
              <div className="w-16 h-16 rounded-full border-2 border-primary/30 flex items-center justify-center mb-4">
                <span className="text-primary font-display font-bold text-2xl">?</span>
              </div>
              <h3 className="font-display font-bold text-xl uppercase tracking-wider mb-2">Classified</h3>
              <p className="text-muted-foreground text-sm">More titles are being forged in the Promethean workshop. Join the newsletter to hear about them first.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
