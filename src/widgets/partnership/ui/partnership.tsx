// src/widgets/partnership/ui/partnership.tsx

/**
 * Partnership (collaboration invitation) section.
 *
 * Purpose:
 * - Highlights a cooperative value proposition and invites the user to proceed (e.g., leave a phone number).
 *
 * Layout:
 * - Two-column grid: illustration (left on ≥ sm) and textual content with CTA (right).
 * - Image column hidden on very small screens to prioritize message clarity.
 *
 * Responsiveness:
 * - Button size adapts via `useMatches` (mobile: md, ≥ sm: lg).
 * - Grid uses large gutter (100) to create visual separation on wide screens.
 *
 * Internationalization (i18n):
 * - All visible strings sourced from translation keys: `partnership.title`, `partnership.description`, `partnership.button`.
 *
 * Navigation:
 * - CTA button routes to the relative `phone` path (likely a contact / lead capture flow).
 *
 * Accessibility:
 * - Semantic elements (`Title`, `Text`, `Button`) aid screen readers.
 * - Consider adding descriptive `alt` text to the illustration if it conveys meaning (currently decorative).
 *
 * Styling:
 * - All visual styles (spacing, colors, typography) defined in `partnership.module.pcss`.
 *
 * Extension ideas:
 * - Add analytics tracking on CTA click.
 * - Make illustration lazy-loaded if asset weight grows.
 * - Support an optional secondary action (e.g., Learn more).
 */

import { Box, Button, Container, Grid, Image, Stack, Text, Title, useMatches } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import Partnerships from "@/shared/assets/images/partnership.svg";

import classes from "./partnership.module.pcss";

const Partnership = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Responsive button size (mobile -> md, ≥ sm -> lg).
  const size = useMatches({
    base: "md",
    sm: "lg",
  });

  return (
    <Box className={classes.wrapper}>
      <Container size="lg" className={classes.container}>
        <Grid gutter={100} className={classes.grid}>
          {/* Illustration column (hidden on very small screens) */}
          <Grid.Col visibleFrom="sm" span="content" className={classes.imageCol}>
            <Image
              src={Partnerships}
              className={classes.image}
              /* Decorative: add alt if meaning needed */
              alt=""
            />
          </Grid.Col>

          {/* Content column: heading, description, CTA */}
          <Grid.Col span="auto" className={classes.contentCol}>
            <Stack className={classes.stack}>
              <Title className={classes.title}>{t("partnership.title")}</Title>
              <Text className={classes.description}>{t("partnership.description")}</Text>
              <Button
                w="max-content"
                size={size}
                className={classes.ctaButton}
                onClick={() => navigate("phone")}>
                {t("partnership.button")}
              </Button>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default Partnership;
