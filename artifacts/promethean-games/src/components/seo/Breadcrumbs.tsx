import { ChevronRight } from "lucide-react";
import { Link } from "wouter";
import type { BreadcrumbItem } from "@/lib/site";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (items.length <= 1) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.path}-${item.name}`} className="flex items-center gap-2">
              {index > 0 ? <ChevronRight size={14} aria-hidden="true" /> : null}
              {isLast ? (
                <span aria-current="page" className="text-foreground">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="hover:text-primary transition-colors">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

