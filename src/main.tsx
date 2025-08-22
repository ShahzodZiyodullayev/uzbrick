import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./i18n.ts";

import "./index.css";
import { Root } from "@/app/Root";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
