import { motion } from "framer-motion";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Seo } from "@/components/seo/Seo";
import { FaqSection } from "@/components/content/FaqSection";
import { homepageFaq } from "@/content/faq";

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "FAQ", path: "/faq" },
];

export default function Faq() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homepageFaq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-background pt-28 pb-24">
      <Seo
        title="Frequently Asked Questions | Promethean Games"
        description="Read frequently asked questions about Promethean Games and Par for the Course, including how the game supports pool practice and skill development."
        path="/faq"
        breadcrumbs={breadcrumbs}
        structuredData={structuredData}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="text-primary font-display font-bold tracking-widest uppercase text-sm mb-4">Support</div>
          <h1 className="text-5xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-6">
            Frequently asked questions
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground leading-relaxed">
            Answers about Par for the Course, practice formats, and how Promethean Games helps pool players improve.
          </p>
        </motion.header>

        <FaqSection
          title="Common questions"
          intro="If you need more details, use the contact form on the homepage and we will follow up."
          items={homepageFaq}
          className="pb-8"
        />
      </div>
    </div>
  );
}


