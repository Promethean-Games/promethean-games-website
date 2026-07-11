import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Seo } from "@/components/seo/Seo";

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Privacy Policy", path: "/privacy-policy" },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background pt-28 pb-24">
      <Seo
        title="Privacy Policy"
        description="Read the Promethean Games privacy policy for information about website analytics, contact submissions, and how visitor information is handled."
        path="/privacy-policy"
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <article className="prose prose-invert prose-lg max-w-none">
          <h1>Privacy Policy</h1>
          <p>
            Promethean Games respects your privacy. This website is designed to share product information,
            educational resources, and brand updates related to pool, billiards training, and cue sports.
          </p>
          <h2>Information we may collect</h2>
          <p>
            If you contact us or subscribe to updates, you may choose to provide details such as your name,
            email address, and message content. We may also review standard analytics information such as page
            visits, traffic sources, and basic device data to improve site performance and content quality.
          </p>
          <h2>How information is used</h2>
          <ul>
            <li>To respond to questions or support requests</li>
            <li>To improve website usability, content, and performance</li>
            <li>To understand which resources and product pages help visitors most</li>
            <li>To send requested product or newsletter updates when available</li>
          </ul>
          <h2>Third-party services</h2>
          <p>
            Promethean Games may use trusted analytics, hosting, or search verification services such as Google
            Analytics, Google Search Console, or Bing Webmaster Tools. Those services may process data according
            to their own policies.
          </p>
          <h2>Data choices</h2>
          <p>
            You can choose not to submit personal information through forms. If you need help regarding data
            requests, please contact Promethean Games directly.
          </p>
          <h2>Policy updates</h2>
          <p>
            This policy may be updated over time as the site evolves. Continued use of the site means you accept
            the current version of the policy.
          </p>
        </article>
      </div>
    </div>
  );
}

