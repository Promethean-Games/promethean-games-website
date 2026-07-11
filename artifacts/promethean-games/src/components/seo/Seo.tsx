import { useEffect } from "react";
import {
  buildFaqStructuredData,
  getBaseStructuredData,
  getBreadcrumbStructuredData,
  getCanonicalUrl,
  siteConfig,
  toAbsoluteUrl,
  type BreadcrumbItem,
} from "@/lib/site";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article" | "product";
  noindex?: boolean;
  breadcrumbs?: BreadcrumbItem[];
  faq?: Array<{ question: string; answer: string }>;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
}

const MANAGED_ATTRIBUTE = "data-seo-managed";
const SCRIPT_ATTRIBUTE = "data-seo-script";

function setMeta(name: string, content: string, property = false) {
  const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    if (property) {
      element.setAttribute("property", name);
    } else {
      element.setAttribute("name", name);
    }
    element.setAttribute(MANAGED_ATTRIBUTE, "true");
    document.head.appendChild(element);
  }

  element.content = content;
}

function setLink(rel: string, href: string) {
  const selector = `link[rel="${rel}"]`;
  let element = document.head.querySelector<HTMLLinkElement>(selector);

  if (!element) {
    element = document.createElement("link");
    element.rel = rel;
    element.setAttribute(MANAGED_ATTRIBUTE, "true");
    document.head.appendChild(element);
  }

  element.href = href;
}

export function Seo({
  title,
  description,
  path,
  image = siteConfig.defaultOgImage,
  type = "website",
  noindex = false,
  breadcrumbs = [],
  faq = [],
  structuredData = [],
}: SeoProps) {
  useEffect(() => {
    const canonicalUrl = getCanonicalUrl(path);
    const imageUrl = toAbsoluteUrl(image);
    const fullTitle = title.includes(siteConfig.siteName)
      ? title
      : `${title}${siteConfig.titleTemplateSuffix}`;

    document.title = fullTitle;
    document.documentElement.lang = "en";

    setMeta("description", description);
    setMeta(
      "robots",
      noindex
        ? "noindex, nofollow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    );
    setMeta("theme-color", "#d11111");
    setMeta("og:title", fullTitle, true);
    setMeta("og:description", description, true);
    setMeta("og:type", type, true);
    setMeta("og:url", canonicalUrl, true);
    setMeta("og:image", imageUrl, true);
    setMeta("og:site_name", siteConfig.siteName, true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    setMeta("twitter:image", imageUrl);

    setLink("canonical", canonicalUrl);

    document
      .querySelectorAll(`script[type="application/ld+json"][${SCRIPT_ATTRIBUTE}]`)
      .forEach((element) => element.remove());

    const pageStructuredData: Record<string, unknown>[] = [
      ...getBaseStructuredData(),
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: title,
        description,
        url: canonicalUrl,
        isPartOf: {
          "@id": `${siteConfig.siteUrl}#website`,
        },
      },
    ];

    if (breadcrumbs.length > 1) {
      pageStructuredData.push(getBreadcrumbStructuredData(breadcrumbs));
    }

    if (faq.length > 0) {
      pageStructuredData.push(buildFaqStructuredData(faq));
    }

    const additionalStructuredData = Array.isArray(structuredData)
      ? structuredData
      : [structuredData];

    [...pageStructuredData, ...additionalStructuredData.filter(Boolean)].forEach((item) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute(SCRIPT_ATTRIBUTE, "true");
      script.textContent = JSON.stringify(item);
      document.head.appendChild(script);
    });
  }, [breadcrumbs, description, faq, image, noindex, path, structuredData, title, type]);

  return null;
}

