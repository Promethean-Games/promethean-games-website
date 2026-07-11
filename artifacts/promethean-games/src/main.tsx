import { createRoot } from "react-dom/client";
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

createRoot(document.getElementById("root")!).render(<App />);
