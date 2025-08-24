// src/widgets/stats/ui/stats.tsx

/**
 * Stats section widget.
 *
 * Purpose:
 * - Displays key quantitative metrics (users, partnerships, interactions, etc.) in a compact grid
 *   to reinforce credibility and scale.
 *
 * Data model:
 * - `statsData`: local array of objects `{ value, icon, label }`.
 *   - `label` derives from i18n translation keys: `stats.stat.1` ... `stats.stat.4`.
 *
 * Internationalization (i18n):
 * - All user‑facing text (title composite, description, labels) pulled from translation keys under `stats.*`.
 *
 * Layout:
 * - Two-column responsive grid:
 *   - Left: composite heading (primary + highlighted span) and descriptive paragraph.
 *   - Right: a `SimpleGrid` of 2 columns, each stat rendered as a nested `Grid` for icon + text alignment.
 *
 * Accessibility:
 * - Numeric values use `<Title order={3}>` for semantic emphasis.
 * - Icons are decorative; consider adding `alt=""` if they convey no extra meaning or meaningful `alt` text otherwise.
 *
 * Styling:
 * - All visual styles (spacing, typography, colors) sourced from `stats.module.pcss`.
 *
 * Performance:
 * - Pure presentational component; no side effects besides translation retrieval.
 *
 * Extension ideas:
 * - Animate counts (e.g., count-up effect) when scrolled into view.
 * - Externalize `statsData` to config or CMS.
 * - Add ARIA roles / descriptions if metrics require additional context.
 */

import { Box, Container, Grid, SimpleGrid, Stack, Text, Title, Image } from "@mantine/core";
import { useTranslation } from "react-i18next";

import Logo1 from "@/shared/assets/logo/person.svg";
import Logo2 from "@/shared/assets/logo/hands.png";
import Logo3 from "@/shared/assets/logo/click.svg";
import Logo4 from "@/shared/assets/logo/cards.svg";

import classes from "./stats.module.pcss";

const Stats = () => {
  const { t } = useTranslation();

  // Static metrics configuration (could be externalized or fetched).
  const statsData = [
    { value: "2,245,341", icon: Logo1, label: t("stats.stat.1") },
    { value: "46,328", icon: Logo2, label: t("stats.stat.2") },
    { value: "828,867", icon: Logo3, label: t("stats.stat.3") },
    { value: "1,926,436", icon: Logo4, label: t("stats.stat.4") },
  ];

  return (
    <Box className={classes.wrapper}>
      <Container size="lg" className={classes.container}>
        <Grid gutter="xl" className={classes.rootGrid}>
          {/* Left column: heading + descriptive text */}
          <Grid.Col span={{ base: 12, md: 6 }} className={classes.leftCol}>
            <Text className={classes.leftText}>
              {t("stats.title.title")}{" "}
              <Text span className={classes.highlightText}>
                {t("stats.title.sub-title")}
              </Text>
            </Text>
            <Text className={classes.secondaryText}>{t("stats.description")}</Text>
          </Grid.Col>

          {/* Right column: stats grid */}
          <Grid.Col span={{ base: 12, md: 6 }} className={classes.rightCol}>
            <SimpleGrid verticalSpacing="xl" cols={2} className={classes.statsGrid}>
              {statsData.map(({ icon, value, label }, idx) => (
                <Grid key={idx} className={classes.statItem}>
                  {/* Icon */}
                  <Grid.Col span={3} className={classes.statIconCol}>
                    <Image src={icon} className={classes.icon} />
                  </Grid.Col>
                  {/* Value + label */}
                  <Grid.Col span="auto" className={classes.statContentCol}>
                    <Stack gap={4} className={classes.statStack}>
                      <Title order={3} className={classes.statValue}>
                        {value}
                      </Title>
                      <Text className={classes.statLabel}>{label}</Text>
                    </Stack>
                  </Grid.Col>
                </Grid>
              ))}
            </SimpleGrid>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default Stats;
