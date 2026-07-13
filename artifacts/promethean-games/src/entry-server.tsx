import { renderToString } from "react-dom/server";
import App, { type RouterHook } from "./App";

function createStaticRouterHook(pathname: string): RouterHook {
  return () => [pathname, () => undefined];
}

export function render(pathname: string) {
  return renderToString(<App routerHook={createStaticRouterHook(pathname)} />);
}

