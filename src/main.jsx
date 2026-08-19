import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import LaKastaSite from "./LaKastaSite.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LaKastaSite />
  </StrictMode>
);
