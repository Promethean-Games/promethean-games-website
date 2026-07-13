import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const appRoot = path.resolve(import.meta.dirname, "..");
const contentPath = path.join(appRoot, "src", "content", "learning-resources.json");
const resources = JSON.parse(await fs.readFile(contentPath, "utf8"));

const clientOutDir = path.join(appRoot, "dist", "public");
const serverOutDir = path.join(appRoot, "dist", "server");

const routesToPrerender = [
  "/",
  "/about",
  "/games",
  "/games/par-for-the-course",
  "/faq",
];

// Add learning center and policy pages
const staticRoutes = [
  "/learning-center",
  "/privacy-policy",
  "/terms-of-service",
];

// Add all learning article routes
const articleRoutes = resources.articles.map((article) => `/learning-center/${article.slug}`);

const templatePath = path.join(clientOutDir, "index.html");
const templateHtml = await fs.readFile(templatePath, "utf8");

const serverFiles = await fs.readdir(serverOutDir);
const serverEntryFile = serverFiles.find(
  (file) => file.startsWith("entry-server") && (file.endsWith(".js") || file.endsWith(".mjs")),
);

if (!serverEntryFile) {
  throw new Error("Could not find SSR entry bundle in dist/server.");
}

const serverEntry = path.join(serverOutDir, serverEntryFile);

const serverModule = await import(pathToFileURL(serverEntry).href);

if (typeof serverModule.render !== "function") {
  throw new Error("SSR bundle does not export a render(pathname) function.");
}

const allRoutes = [...routesToPrerender, ...staticRoutes, ...articleRoutes];

for (const route of allRoutes) {
  const appHtml = serverModule.render(route);
  const prerenderedHtml = templateHtml.replace(
    /<div id="root">[\s\S]*?<\/div>/,
    `<div id="root">${appHtml}</div>`,
  );

  const outPath =
    route === "/"
      ? templatePath
      : path.join(clientOutDir, route.replace(/^\//, ""), "index.html");

  await fs.mkdir(path.dirname(outPath), { recursive: true });
  await fs.writeFile(outPath, prerenderedHtml, "utf8");
}

console.log(`Prerendered ${allRoutes.length} routes into static HTML.`);


