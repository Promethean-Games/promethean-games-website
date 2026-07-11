import { ArrowRight, Clock3, Tag } from "lucide-react";
import { Link } from "wouter";
import type { LearningArticle, LearningCategory } from "@/lib/learning";
import { Button } from "@/components/ui/Button";

interface ResourceCardProps {
  article: LearningArticle;
  category?: LearningCategory;
}

export function ResourceCard({ article, category }: ResourceCardProps) {
  return (
    <article className="bg-card border border-border rounded-sm p-6 flex flex-col h-full hover:border-primary/50 transition-colors">
      <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wider text-muted-foreground font-display mb-4">
        <span className="inline-flex items-center gap-1">
          <Tag size={12} aria-hidden="true" />
          {category?.name ?? article.category}
        </span>
        <span className="inline-flex items-center gap-1">
          <Clock3 size={12} aria-hidden="true" />
          {article.readTime}
        </span>
      </div>

      <h3 className="text-2xl font-display font-bold mb-3 text-foreground">{article.title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">{article.description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {article.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="text-[10px] font-display uppercase tracking-wider text-muted-foreground border border-border px-2 py-1 rounded-sm">
            {tag}
          </span>
        ))}
      </div>

      <Button asChild variant="outline" className="w-full sm:w-auto">
        <Link href={`/learning-center/${article.slug}`}>
          Read Guide
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </Button>
    </article>
  );
}

