import { renderToString } from "react-dom/server";
import App, { type RouterHook } from "./App";

function createStaticRouterHook(pathname: string): RouterHook {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  const fullPath = `${basePath}${normalizedPath}` || "/";
  return () => [fullPath, () => undefined];
}

export function render(pathname: string) {
  return renderToString(<App routerHook={createStaticRouterHook(pathname)} />);
}

