import { Link } from "wouter";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-3 group mb-4 inline-flex">
              <img 
                src={`${import.meta.env.BASE_URL}images/logo.png`} 
                alt="Promethean Games Logo" 
                className="w-6 h-6 grayscale group-hover:grayscale-0 transition-all" 
              />
              <span className="font-display font-bold text-lg tracking-widest uppercase text-foreground">
                Promethean Games
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
              We create original tabletop games that blend precision, strategy, and social play. Built for players who love to compete, improve, and have fun doing it.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-4 uppercase tracking-wider text-sm">Navigation</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-muted-foreground hover:text-primary text-sm transition-colors">Home</Link></li>
              <li><Link href="/games" className="text-muted-foreground hover:text-primary text-sm transition-colors">Our Games</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary text-sm transition-colors">About Us</Link></li>
              <li><a href="/#contact" className="text-muted-foreground hover:text-primary text-sm transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-4 uppercase tracking-wider text-sm">Socials</h4>
            <ul className="space-y-3">
              {/* Update social links with your actual profile URLs */}
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Instagram</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Facebook</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">TikTok</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">
            &copy; {currentYear} Promethean Games. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
