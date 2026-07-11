import { Link } from "wouter";
import { withBasePath } from "@/lib/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-3 group mb-4 inline-flex">
              <img 
                src={withBasePath("images/logo.png")}
                alt="Promethean Games Logo"
                className="w-6 h-6 grayscale group-hover:grayscale-0 transition-all"
                width="24"
                height="24"
                loading="lazy"
                decoding="async"
              />
              <span className="font-display font-bold text-lg tracking-widest uppercase text-foreground">
                Promethean Games
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
              Promethean Games creates original tabletop products and educational resources for pool, billiards training, cue sports strategy, and skill-based social play.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-4 uppercase tracking-wider text-sm">Navigation</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-muted-foreground hover:text-primary text-sm transition-colors">Home</Link></li>
              <li><Link href="/games" className="text-muted-foreground hover:text-primary text-sm transition-colors">Our Games</Link></li>
              <li><Link href="/games/par-for-the-course" className="text-muted-foreground hover:text-primary text-sm transition-colors">Par for the Course</Link></li>
              <li><Link href="/learning-center" className="text-muted-foreground hover:text-primary text-sm transition-colors">Learning Center</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary text-sm transition-colors">About Us</Link></li>
              <li><a href={withBasePath("/#contact")} className="text-muted-foreground hover:text-primary text-sm transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-4 uppercase tracking-wider text-sm">Top Guides</h4>
            <ul className="space-y-3">
              <li><Link href="/learning-center/how-to-practice-pool" className="text-muted-foreground hover:text-primary text-sm transition-colors">How to Practice Pool</Link></li>
              <li><Link href="/learning-center/cue-ball-control-guide" className="text-muted-foreground hover:text-primary text-sm transition-colors">Cue Ball Control Guide</Link></li>
              <li><Link href="/learning-center/8-ball-strategy-guide" className="text-muted-foreground hover:text-primary text-sm transition-colors">8 Ball Strategy Guide</Link></li>
              <li><Link href="/learning-center/9-ball-strategy-guide" className="text-muted-foreground hover:text-primary text-sm transition-colors">9 Ball Strategy Guide</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">
            &copy; {currentYear} Promethean Games. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground text-xs transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-muted-foreground hover:text-foreground text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
