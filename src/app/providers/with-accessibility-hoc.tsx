import { type ComponentType, createElement } from "react";
import { HelmetProvider } from "react-helmet-async";

import { AccessibilityProvider } from "./with-accessibility";

export const withAccessibility = (component: ComponentType) => () => {
  return (
    <HelmetProvider>
      <AccessibilityProvider>{createElement(component)}</AccessibilityProvider>
    </HelmetProvider>
  );
};
