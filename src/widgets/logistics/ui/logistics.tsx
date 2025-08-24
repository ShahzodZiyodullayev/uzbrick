// src/widgets/logistics/ui/logistics.tsx

/**
 * Logistics section widget.
 *
 * Purpose:
 * - Highlights three core logistics / service capabilities in equal emphasis cards.
 * - Reinforces operational strengths (speed, reliability, coverage, etc.) below earlier marketing sections.
 *
 * Internationalization (i18n):
 * - All user‑facing strings sourced from translation keys under `logistics.*`.
 *
 * Responsiveness:
 * - Uses Mantine `useMatches` to expand card spacing (`SimpleGrid` `spacing`) from 20px (mobile) to 100px (≥ md).
 * - Grid shifts from a single column (`base: 1`) to three columns (`md: 3`).
 *
 * Accessibility:
 * - Semantic heading hierarchy preserved with `Title` and descriptive `Text`.
 * - Consider ensuring surrounding page uses consistent heading order (e.g. preceding sections not skipping levels).
 *
 * Styling:
 * - Visual styles (layout, spacing, colors) defined in `logistics.module.pcss`.
 *
 * Performance:
 * - Pure presentational component; no side effects or expensive computations.
 *
 * Extension ideas:
 * - Replace hardcoded card trio with mapped data array for easier reordering.
 * - Add icons or illustrations to each card for faster visual scanning.
 * - Introduce motion (fade / slide) on scroll intersection.
 */

import { Box, Card, Container, SimpleGrid, Stack, Text, Title, useMatches } from "@mantine/core";
import { useTranslation } from "react-i18next";

import classes from "./logistics.module.pcss";

const Logistics = () => {
  const { t } = useTranslation();

  // Responsive spacing between cards: compact on mobile, generous on larger screens.
  const spacings = useMatches({
    base: 20,
    md: 100,
  });

  return (
    <Box className={classes.wrapper}>
      <Container size="lg" className={classes.container}>
        <Stack className={classes.stack}>
          {/* Section heading + lead description */}
          <Title className={classes.sectionTitle}>{t("logistics.title")}</Title>
          <Text className={classes.description}>{t("logistics.description")}</Text>

          {/* Three capability cards (could be data-driven) */}
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing={spacings} className={classes.grid}>
            <Card className={classes.card} withBorder>
              <Title className={classes.cardTitle}>{t("logistics.logistic.1.title")}</Title>
              <Text className={classes.cardText}>{t("logistics.logistic.1.description")}</Text>
            </Card>
            <Card className={classes.card} withBorder>
              <Title className={classes.cardTitle}>{t("logistics.logistic.2.title")}</Title>
              <Text className={classes.cardText}>{t("logistics.logistic.2.description")}</Text>
            </Card>
            <Card className={classes.card} withBorder>
              <Title className={classes.cardTitle}>{t("logistics.logistic.3.title")}</Title>
              <Text className={classes.cardText}>{t("logistics.logistic.3.description")}</Text>
            </Card>
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Logistics;
