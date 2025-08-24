/**
 * Home page root component.
 *
 * Responsibilities:
 * - Vertically composes the main public site sections.
 * - Keeps itself "dumb": no data fetching or business logic here.
 * - Provides a minimal layout container with a minimum height to avoid
 *   visual collapse on short viewports.
 *
 * Extension ideas:
 * - Add React.lazy + Suspense for below-the-fold sections if bundle size matters.
 * - Introduce an in-page navigation / scroll spy here if required later.
 * - Pass feature flags or experiment props downward (keep logic external).
 */

import { Box } from "@mantine/core";

import Hero from "@/widgets/hero";
import Clients from "@/widgets/clients";
import Products from "@/widgets/products";
import Stats from "@/widgets/stats";
import Partnership from "@/widgets/partnership";
import About from "@/widgets/about";
import Logistics from "@/widgets/logistics";
import FooterHightlight from "@/widgets/footer-hightlight";

/**
 * Renders the landing page composition.
 */
const Home = () => {
  return (
    <Box mih={630}>
      {/* Above-the-fold */}
      <Hero />
      {/* Social proof / partners */}
      <Clients />
      {/* Product showcase */}
      <Products />
      {/* Metrics / trust indicators */}
      <Stats />
      {/* Partnership call-to-action */}
      <Partnership />
      {/* Company summary */}
      <About />
      {/* Delivery / infrastructure info */}
      <Logistics />
      {/* Final CTA / highlight footer block */}
      <FooterHightlight />
    </Box>
  );
};

export default Home;
