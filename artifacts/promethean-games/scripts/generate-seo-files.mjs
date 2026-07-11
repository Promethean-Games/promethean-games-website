import fs from "node:fs";
import path from "node:path";

const appRoot = path.resolve(import.meta.dirname, "..");
const publicDir = path.join(appRoot, "public");
const contentPath = path.join(appRoot, "src", "content", "learning-resources.json");

const basePath = (process.env.BASE_PATH || "/").replace(/\/$/, "") || "";
const siteUrl = (process.env.SITE_URL || process.env.VITE_SITE_URL || "https://www.prometheangames.com").replace(/\/$/, "");

const resources = JSON.parse(fs.readFileSync(contentPath, "utf8"));

const staticRoutes = [
  "/",
  "/games",
  "/games/par-for-the-course",
  "/about",
  "/learning-center",
  "/privacy-policy",
  "/terms-of-service",
];

const articleRoutes = resources.articles.map((article) => `/learning-center/${article.slug}`);
const routes = [...staticRoutes, ...articleRoutes];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url><loc>${siteUrl}${route}</loc><changefreq>weekly</changefreq><priority>${route === "/" ? "1.0" : route.includes("par-for-the-course") ? "0.9" : route === "/learning-center" ? "0.9" : "0.7"}</priority></url>`,
  )
  .join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

const baseRoot = basePath ? `${basePath}/` : "/";
const redirect404 = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Redirecting…</title>
    <meta name="robots" content="noindex" />
    <script>
      (function () {
        var basePath = ${JSON.stringify(baseRoot)};
        var pathname = window.location.pathname;
        var search = window.location.search || "";
        var hash = window.location.hash || "";
        var route = pathname.indexOf(basePath) === 0 ? pathname.slice(basePath.length - 1) : pathname;
        var redirectTarget = basePath + "?p=" + encodeURIComponent(route + search) + (hash ? "&h=" + encodeURIComponent(hash) : "");
        window.location.replace(redirectTarget);
      })();
    </script>
  </head>
  <body></body>
</html>
`;

fs.mkdirSync(publicDir, { recursive: true });
fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap);
fs.writeFileSync(path.join(publicDir, "robots.txt"), robots);
fs.writeFileSync(path.join(publicDir, "404.html"), redirect404);

console.log(`Generated robots.txt, sitemap.xml, and 404.html for ${siteUrl}`);

