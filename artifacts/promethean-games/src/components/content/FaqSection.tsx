interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  title: string;
  intro?: string;
  items: FaqItem[];
  className?: string;
}

export function FaqSection({ title, intro, items, className = "" }: FaqSectionProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className={className} aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 id="faq-heading" className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight mb-4">
            {title}
          </h2>
          {intro ? <p className="text-muted-foreground max-w-2xl mx-auto">{intro}</p> : null}
        </div>

        <div className="space-y-4">
          {items.map((item) => (
            <details key={item.question} className="group bg-card border border-border rounded-sm p-6">
              <summary className="cursor-pointer list-none font-display font-semibold text-lg text-foreground flex items-center justify-between gap-4">
                <span>{item.question}</span>
                <span className="text-primary transition-transform group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="text-muted-foreground mt-4 leading-relaxed">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

