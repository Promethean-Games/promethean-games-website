import { AlertCircle, ArrowLeft, BookOpen } from "lucide-react";
import { Link } from "wouter";
import { Seo } from "@/components/seo/Seo";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background px-4 py-24">
      <Seo
        title="Page Not Found"
        description="The requested Promethean Games page could not be found. Browse the learning center, explore Par for the Course, or return to the homepage."
        path="/404"
        noindex
      />

      <div className="w-full max-w-2xl bg-card border border-border rounded-sm p-8 md:p-12 text-center">
        <AlertCircle className="h-12 w-12 text-primary mx-auto mb-6" aria-hidden="true" />
        <p className="text-primary font-display font-bold tracking-widest uppercase text-sm mb-3">404 error</p>
        <h1 className="text-4xl font-display font-bold uppercase tracking-tight mb-4">We could not find that page</h1>
        <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto mb-8">
          The link may have changed, the page may have moved, or the address may be incorrect. Try one of the most useful destinations below to keep exploring Promethean Games.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          <Button asChild>
            <Link href="/">
              <ArrowLeft size={16} aria-hidden="true" />
              Return Home
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/games/par-for-the-course">Explore Par for the Course</Link>
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 text-left">
          <Link href="/learning-center" className="border border-border rounded-sm p-5 hover:border-primary/50 transition-colors block">
            <div className="flex items-center gap-2 text-foreground font-display font-semibold uppercase tracking-wide mb-2">
              <BookOpen size={16} aria-hidden="true" />
              Learning Center
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Read pool practice guides, strategy articles, and cue ball control resources.
            </p>
          </Link>
          <Link href="/games" className="border border-border rounded-sm p-5 hover:border-primary/50 transition-colors block">
            <div className="text-foreground font-display font-semibold uppercase tracking-wide mb-2">Games Catalog</div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Browse the Promethean Games lineup and see the current product range.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
