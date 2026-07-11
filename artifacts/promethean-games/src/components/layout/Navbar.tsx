import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/Button";
import { withBasePath } from "@/lib/site";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Games", href: "/games" },
    { label: "Learning Center", href: "/learning-center" },
    { label: "About", href: "/about" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-border py-3 shadow-lg" 
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Promethean Games home">
            {/* LOGO: swap src to update the header logo */}
            <img 
              src={withBasePath("images/pg-logo.png")}
              alt="Promethean Games"
              className="w-8 h-8 transition-transform group-hover:scale-110"
              width="32"
              height="32"
              loading="eager"
              decoding="async"
            />
            <span className="font-display font-bold text-xl tracking-widest uppercase text-foreground group-hover:text-primary transition-colors">
              Promethean
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-display font-semibold uppercase tracking-wider transition-colors hover:text-primary",
                  location === link.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <a 
              href={withBasePath("/#contact")}
              className="text-sm font-display font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
            >
              Contact
            </a>
          </nav>

          <div className="hidden md:block">
            <Button asChild variant="primary" size="sm">
              <a href={withBasePath("/#newsletter")}>Join Newsletter</a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div id="mobile-navigation" className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-2xl p-4 flex flex-col gap-4" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-display font-semibold uppercase tracking-wider text-foreground hover:text-primary p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a 
            href={withBasePath("/#contact")}
            className="text-lg font-display font-semibold uppercase tracking-wider text-foreground hover:text-primary p-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </a>
          <a
            href={withBasePath("/#newsletter")}
            className="text-lg font-display font-semibold uppercase tracking-wider text-foreground hover:text-primary p-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Join Newsletter
          </a>
        </div>
      )}
    </header>
  );
}
