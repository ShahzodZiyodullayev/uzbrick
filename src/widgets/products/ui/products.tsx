// src/widgets/products/ui/products.tsx

/**
 * Products section widget.
 *
 * Purpose:
 * - Showcases three core product (or service) offerings in equal emphasis cards.
 * - Provides quick scannability of key value propositions beneath earlier hero / marketing sections.
 *
 * Internationalization \(i18n\):
 * - All user‑facing strings pulled from translation keys under the `products.*` namespace.
 *
 * Layout:
 * - Section wrapper -> `Container` -> vertical `Stack` for heading + grid.
 * - Uses a `SimpleGrid` to arrange 1 column on mobile and 3 columns from the `md` breakpoint.
 *
 * Responsiveness:
 * - Card spacing adapts via `useMatches`: compact \(20px\) on small screens, generous \(100px\) on medium and above.
 *
 * Accessibility:
 * - Semantic structure: section title in a `Title`, each product uses its own `Title` + descriptive `Text`.
 * - Ensure surrounding page preserves logical heading order to aid screen readers.
 *
 * Styling:
 * - All visual styles (colors, spacing, typography) sourced from `products.module.pcss`.
 *
 * Performance:
 * - Purely presentational; no side effects or expensive computations.
 *
 * Extension ideas:
 * - Replace hardcoded triplet with a mapped data array (e.g. from CMS or config).
 * - Add illustrative icons or images per product.
 * - Introduce hover / focus states with subtle elevation or animation.
 * - Add tracking events on card exposure or clicks (if cards become interactive).
 */

import { Box, Card, Container, SimpleGrid, Stack, Text, Title, useMatches } from "@mantine/core";
import { useTranslation } from "react-i18next";

import classes from "./products.module.pcss";

const Products = () => {
  const { t } = useTranslation();

  // Responsive spacing between product cards.
  const spacings = useMatches({
    base: 20,
    md: 100,
  });

  return (
    <Box className={classes.wrapper}>
      <Container size="lg" className={classes.container}>
        <Stack className={classes.stack}>
          {/* Section heading */}
          <Title className={classes.sectionTitle}>{t("products.title")}</Title>

          {/* Product cards (could be data-driven) */}
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing={spacings} className={classes.grid}>
            <Card className={classes.card} withBorder>
              <Title className={classes.cardTitle}>{t("products.product.1.title")}</Title>
              <Text className={classes.cardText}>{t("products.product.1.description")}</Text>
            </Card>
            <Card className={classes.card} withBorder>
              <Title className={classes.cardTitle}>{t("products.product.2.title")}</Title>
              <Text className={classes.cardText}>{t("products.product.2.description")}</Text>
            </Card>
            <Card className={classes.card} withBorder>
              <Title className={classes.cardTitle}>{t("products.product.3.title")}</Title>
              <Text className={classes.cardText}>{t("products.product.3.description")}</Text>
            </Card>
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Products;
