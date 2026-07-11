export interface BreadcrumbItem {
  name: string;
  path: string;
}

const runtimeSiteUrl =
  typeof window !== "undefined"
    ? `${window.location.origin}${import.meta.env.BASE_URL}`.replace(/\/$/, "")
    : "";

export const siteConfig = {
  siteName: "Promethean Games",
  legalName: "Promethean Games",
  productName: "Par for the Course",
  titleTemplateSuffix: " | Promethean Games",
  defaultTitle: "Promethean Games | Pool Training Games, Billiards Practice, and Cue Sports Education",
  defaultDescription:
    "Promethean Games creates original pool and billiards training games, educational resources, and competitive practice tools led by Par for the Course, the golf-inspired billiards training game.",
  siteUrl: (import.meta.env.VITE_SITE_URL || runtimeSiteUrl || "https://www.prometheangames.com").replace(/\/$/, ""),
  defaultOgImage: "/opengraph.jpg",
  logoPath: "/images/logo.png",
  brandMarkPath: "/images/pg-logo.png",
  organizationDescription:
    "Promethean Games is a tabletop game publisher focused on pool, billiards training, cue sports education, and skill-building games that make practice more fun and competitive.",
  primaryEmail: "hello@prometheangames.com",
};

export function withBasePath(path = "/") {
  if (!path || path === "/") {
    return import.meta.env.BASE_URL;
  }

  const normalizedPath = path.replace(/^\//, "");
  return `${import.meta.env.BASE_URL}${normalizedPath}`;
}

export function toAbsoluteUrl(path = "/") {
  if (/^https?:\/\//.test(path)) {
    return path;
  }

  const normalizedPath = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.siteUrl}${normalizedPath}`;
}

export function getCanonicalUrl(path = "/") {
  return toAbsoluteUrl(path);
}

export function getBreadcrumbStructuredData(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: getCanonicalUrl(item.path),
    })),
  };
}

export function getBaseStructuredData() {
  const organizationId = `${siteConfig.siteUrl}#organization`;
  const websiteId = `${siteConfig.siteUrl}#website`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": organizationId,
      name: siteConfig.legalName,
      alternateName: siteConfig.siteName,
      url: siteConfig.siteUrl,
      logo: toAbsoluteUrl(siteConfig.logoPath),
      image: toAbsoluteUrl(siteConfig.defaultOgImage),
      description: siteConfig.organizationDescription,
      brand: {
        "@type": "Brand",
        name: siteConfig.siteName,
      },
      email: siteConfig.primaryEmail,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": websiteId,
      name: siteConfig.siteName,
      url: siteConfig.siteUrl,
      description: siteConfig.defaultDescription,
      publisher: {
        "@id": organizationId,
      },
      inLanguage: "en-US",
    },
  ];
}

export function buildFaqStructuredData(faq: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

