import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const params = new URLSearchParams(window.location.search);
const redirectedPath = params.get("p");
const redirectedHash = params.get("h");

if (redirectedPath) {
  const decodedPath = decodeURIComponent(redirectedPath);
  const nextUrl = `${import.meta.env.BASE_URL.replace(/\/$/, "")}${decodedPath}${redirectedHash ? decodeURIComponent(redirectedHash) : ""}`;
  window.history.replaceState(null, "", nextUrl);
}

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element was not found.");
}

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <App />);
} else {
  createRoot(rootElement).render(<App />);
}
