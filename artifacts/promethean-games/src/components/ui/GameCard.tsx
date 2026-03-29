import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "./Button";

interface GameCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  href?: string;
  isComingSoon?: boolean;
}

export function GameCard({ title, description, tags, image, href = "/games", isComingSoon }: GameCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="group relative bg-card border border-border rounded-sm overflow-hidden flex flex-col transition-all duration-500 hover:border-primary/50 hover:shadow-[0_8px_30px_rgba(245,158,11,0.1)]"
    >
      <div className="relative aspect-video overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
        />
        {isComingSoon && (
          <div className="absolute top-4 right-4 bg-background/90 backdrop-blur border border-primary text-primary text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm">
            Coming Soon
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="text-[10px] font-display uppercase tracking-wider text-muted-foreground border border-border px-2 py-1 rounded-sm">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground mb-6 flex-grow text-sm leading-relaxed">{description}</p>
        
        <div className="mt-auto pt-4 border-t border-border/50">
          {isComingSoon ? (
            <Button variant="outline" className="w-full cursor-default" disabled>
              In Development
            </Button>
          ) : (
            <Link href={href} className="block w-full">
              <Button variant="primary" className="w-full group/btn">
                Explore Game
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
