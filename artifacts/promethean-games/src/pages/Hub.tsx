import { motion } from "framer-motion";
import {
  Gamepad2,
  BookOpen,
  Globe,
  Trophy,
  ShoppingCart,
  Play,
  ExternalLink,
  HelpCircle,
} from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa6";
import { Button } from "@/components/ui/Button";
import { Seo } from "@/components/seo/Seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Hub", path: "/hub" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

export default function Hub() {
  return (
    <div className="min-h-screen bg-background pt-28 pb-24">
      <Seo
        title="Promethean Games Hub | Play, Learn, and Connect"
        description="Your central gateway to everything Par for the Course. Buy the game, download the app, watch tutorials, explore the Learning Center, and connect with the Promethean Games community."
        path="/hub"
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        {/* ── Hero ─────────────────────────────────────────────── */}
        <motion.header
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <motion.div
            variants={fadeUp}
            className="text-primary font-display font-bold tracking-widest uppercase text-sm mb-4"
          >
            Promethean Games
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-6"
          >
            Promethean Games Hub
          </motion.h1>

          <motion.div variants={fadeUp} className="w-24 h-1 bg-primary mx-auto mb-8" />

          <motion.p
            variants={fadeUp}
            className="text-xl text-muted-foreground leading-relaxed mb-4"
          >
            Your starting point for everything Par for the Course.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-sm font-display font-bold uppercase tracking-widest text-primary"
          >
            Play. Learn. Connect.
          </motion.p>
        </motion.header>

        {/* ── Cards grid ───────────────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* ── Card 1: PLAY ──────────────────────────────────── */}
          <motion.article
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="group bg-card border border-border rounded-sm overflow-hidden flex flex-col transition-all duration-400 hover:border-primary/50 hover:shadow-[0_8px_30px_rgba(245,158,11,0.08)] p-8"
            aria-labelledby="hub-play-heading"
          >
            <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Gamepad2 size={24} className="text-primary" />
            </div>

            <h2
              id="hub-play-heading"
              className="text-2xl font-display font-bold uppercase tracking-tight mb-3 group-hover:text-primary transition-colors"
            >
              Play
            </h2>

            <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
              Buy the game or download the official scorekeeping app.
            </p>

            <div className="flex flex-col gap-3">
              <Button asChild variant="primary" className="w-full">
                <a
                  href="https://www.thegamecrafter.com/games/par-for-the-course-classic"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ShoppingCart size={15} />
                  Buy Classic
                </a>
              </Button>

              <Button asChild variant="outline" className="w-full">
                <a
                  href="https://www.thegamecrafter.com/games/par-for-the-course-tournament"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ShoppingCart size={15} />
                  Buy Tournament
                </a>
              </Button>

              <Button asChild variant="outline" className="w-full">
                <a
                  href="https://www.thegamecrafter.com/designers/promethean-games"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={15} />
                  Shop All Games
                </a>
              </Button>

              <Button asChild variant="outline" className="w-full">
                <a
                  href="https://play.google.com/store/apps/details?id=com.parforthecourse.app&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGooglePlay size={15} />
                  Google Play
                </a>
              </Button>

              {/* iOS – disabled / coming soon */}
              <div className="relative">
                <Button
                  variant="outline"
                  className="w-full opacity-50 cursor-not-allowed"
                  disabled
                  aria-disabled="true"
                  aria-label="iOS app – Coming Soon"
                >
                  <FaApple size={15} />
                  iOS
                  <span className="ml-auto text-[10px] font-display font-bold uppercase tracking-widest bg-primary/20 text-primary px-2 py-0.5 rounded-sm">
                    Soon
                  </span>
                </Button>
              </div>
            </div>
          </motion.article>

          {/* ── Card 2: LEARN ─────────────────────────────────── */}
          <motion.article
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="group bg-card border border-border rounded-sm overflow-hidden flex flex-col transition-all duration-400 hover:border-primary/50 hover:shadow-[0_8px_30px_rgba(245,158,11,0.08)] p-8"
            aria-labelledby="hub-learn-heading"
          >
            <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <BookOpen size={24} className="text-primary" />
            </div>

            <h2
              id="hub-learn-heading"
              className="text-2xl font-display font-bold uppercase tracking-tight mb-3 group-hover:text-primary transition-colors"
            >
              Learn
            </h2>

            <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
              Learn the rules, improve your game, and find answers quickly.
            </p>

            <div className="flex flex-col gap-3">
              <Button asChild variant="primary" className="w-full">
                <a
                  href="https://www.youtube.com/shorts/gQOWwEeQxBk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Play size={15} />
                  Watch Explainer Video
                </a>
              </Button>

              <Button asChild variant="outline" className="w-full">
                <a
                  href="https://www.promethean-games.com/learning-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BookOpen size={15} />
                  Learning Center
                </a>
              </Button>

              <Button asChild variant="outline" className="w-full">
                <a
                  href="https://www.promethean-games.com/faq"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <HelpCircle size={15} />
                  Frequently Asked Questions
                </a>
              </Button>
            </div>
          </motion.article>

          {/* ── Card 3: CONNECT ───────────────────────────────── */}
          <motion.article
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="group bg-card border border-border rounded-sm overflow-hidden flex flex-col transition-all duration-400 hover:border-primary/50 hover:shadow-[0_8px_30px_rgba(245,158,11,0.08)] p-8"
            aria-labelledby="hub-connect-heading"
          >
            <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Globe size={24} className="text-primary" />
            </div>

            <h2
              id="hub-connect-heading"
              className="text-2xl font-display font-bold uppercase tracking-tight mb-3 group-hover:text-primary transition-colors"
            >
              Connect
            </h2>

            <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
              Follow Promethean Games and join the community.
            </p>

            <div className="flex flex-col gap-3">
              <Button asChild variant="primary" className="w-full">
                <a
                  href="https://www.facebook.com/parforthecoursethegame"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook size={15} />
                  Facebook
                </a>
              </Button>

              <Button asChild variant="outline" className="w-full">
                <a
                  href="https://www.instagram.com/parforthecourse_thegame"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={15} />
                  Instagram
                </a>
              </Button>

              <Button asChild variant="outline" className="w-full">
                <a
                  href="https://www.youtube.com/@ParfortheCourse_TheGame"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube size={15} />
                  YouTube
                </a>
              </Button>

              <Button asChild variant="outline" className="w-full">
                <a
                  href="https://www.tiktok.com/@promethean_games"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTiktok size={15} />
                  TikTok
                </a>
              </Button>
            </div>
          </motion.article>

          {/* ── Card 4: COMPETE ───────────────────────────────── */}
          <motion.article
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="group bg-card border border-border rounded-sm overflow-hidden flex flex-col transition-all duration-400 hover:border-primary/50 hover:shadow-[0_8px_30px_rgba(245,158,11,0.08)] p-8 sm:col-span-2 lg:col-span-3"
            aria-labelledby="hub-compete-heading"
          >
            <div className="max-w-lg">
              <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Trophy size={24} className="text-primary" />
              </div>

              <h2
                id="hub-compete-heading"
                className="text-2xl font-display font-bold uppercase tracking-tight mb-3 group-hover:text-primary transition-colors"
              >
                Compete
              </h2>

              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                Register for upcoming tournaments, compete against other players, and experience Par
                for the Course the way it was designed to be played.
              </p>

              <Button asChild variant="primary">
                <a
                  href="https://tournament.promethean-games.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Trophy size={15} />
                  Tournament Registration
                </a>
              </Button>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </div>
  );
}

