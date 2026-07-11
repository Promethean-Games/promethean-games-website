import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Seo } from "@/components/seo/Seo";

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Terms of Service", path: "/terms-of-service" },
];

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background pt-28 pb-24">
      <Seo
        title="Terms of Service"
        description="Review the Promethean Games terms of service for website usage, content ownership, and general visitor responsibilities."
        path="/terms-of-service"
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <article className="prose prose-invert prose-lg max-w-none">
          <h1>Terms of Service</h1>
          <p>
            By using the Promethean Games website, you agree to use the site responsibly and in accordance with
            applicable laws. The site is provided to share information about products, educational resources,
            updates, and related cue sports content.
          </p>
          <h2>Content ownership</h2>
          <p>
            Site text, graphics, branding, product descriptions, and educational resources are owned by or
            licensed to Promethean Games unless otherwise noted. You may reference publicly available content for
            personal, non-commercial use, but you may not republish or redistribute it in a misleading way.
          </p>
          <h2>No guarantees</h2>
          <p>
            Promethean Games works to keep the site accurate and up to date, but information may change over
            time. Product availability, release details, and resource content may be updated without notice.
          </p>
          <h2>External services and links</h2>
          <p>
            This site may reference third-party tools, stores, analytics services, or social platforms. Promethean
            Games is not responsible for third-party content, availability, or policies.
          </p>
          <h2>Acceptable use</h2>
          <ul>
            <li>Do not misuse the site or attempt to disrupt normal operation</li>
            <li>Do not copy branding or content in a deceptive way</li>
            <li>Do not submit unlawful, abusive, or malicious content through forms</li>
          </ul>
          <h2>Changes to these terms</h2>
          <p>
            Promethean Games may revise these terms as the website and business evolve. Continued use of the site
            after changes are published constitutes acceptance of the updated terms.
          </p>
        </article>
      </div>
    </div>
  );
}

