// src/widgets/about/ui/about.tsx

/**
 * About section widget.
 *
 * Purpose:
 * - Presents a brief company description (three translated paragraphs).
 * - Highlights brand name (UzBrick) inside the heading with accent styling.
 * - Shows an illustrative production image (hidden on small screens for layout clarity).
 * - Displays a responsive group of client / partner logos.
 *
 * Internationalization (i18n):
 * - All textual content (except the brand name) is pulled from translation keys under `about.*`.
 *
 * Responsiveness:
 * - `useMatches` drives:
 *   - Logo width (`width`) scaling from 40px (base) to 50px (`sm` and up).
 *   - Gap between logos (`gap`) from `xs` to `xl`.
 * - Illustration column is hidden below `sm` (`visibleFrom="sm"`).
 *
 * Accessibility:
 * - Logos get sequential alt text: "Client logo N".
 * - Main image has descriptive alt text.
 *
 * Styling:
 * - All layout and visual tokens come from `about.module.pcss`.
 *
 * Extension ideas:
 * - Replace static `logos` array with dynamic data (e.g., fetched partner list).
 * - Add intersection observer for fade‑in animations.
 * - Convert long description into smaller bullet points if readability becomes an issue.
 */

import { Box, Container, Grid, Group, Image, Stack, Text, useMatches } from "@mantine/core";
import { useTranslation } from "react-i18next";

import Logo1 from "@/shared/assets/logo/Logo-1.svg";
import Logo2 from "@/shared/assets/logo/Logo-2.svg";
import Logo3 from "@/shared/assets/logo/Logo-3.svg";
import Logo4 from "@/shared/assets/logo/Logo-4.svg";
import Logo5 from "@/shared/assets/logo/Logo-5.svg";
import Logo6 from "@/shared/assets/logo/Logo-6.svg";
import Tesla from "@/shared/assets/images/tesla.svg";

import classes from "./about.module.pcss";

// Ordered list of partner/client logo assets (could be externalized / fetched later).
const logos = [Logo6, Logo1, Logo2, Logo3, Logo4, Logo5];

const About = () => {
  const { t } = useTranslation();

  // Responsive logo width (px).
  const width = useMatches({
    base: 40,
    sm: 50,
  });

  // Responsive spacing between logos.
  const gap = useMatches({
    base: "xs",
    sm: "xl",
  });

  return (
    <Box className={classes.wrapper}>
      <Container size="lg" className={classes.container}>
        <Grid gutter={100} className={classes.grid}>
          {/* Illustration (hidden on small screens to prioritize text content) */}
          <Grid.Col visibleFrom="sm" span="content" className={classes.imageCol}>
            <Image src={Tesla} alt="UzBrick production" className={classes.image} />
          </Grid.Col>

          {/* Textual content + logos */}
          <Grid.Col span="auto" className={classes.contentCol}>
            <Stack className={classes.stack}>
              {/* Composite title with highlighted brand token */}
              <Text className={classes.title}>
                <Text span className={classes.subTitle}>
                  UzBrick
                </Text>{" "}
                {t("about.title.sub-title")}
              </Text>

              {/* Multi-paragraph description (line breaks preserved) */}
              <Text className={classes.description}>
                {t("about.description.1")}
                <br />
                <br />
                {t("about.description.2")}
                <br />
                <br />
                {t("about.description.3")}
              </Text>

              {/* Partner / client logos */}
              <Group className={classes.logosGroup} gap={gap}>
                {logos.map((icon, index) => (
                  <Image
                    src={icon}
                    w={width}
                    key={index}
                    alt={`Client logo ${index + 1}`}
                    className={classes.logoImage}
                  />
                ))}
              </Group>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
