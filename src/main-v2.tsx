import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import SpecPage from "./SpecPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SpecPage version="v2" />
  </StrictMode>
);
