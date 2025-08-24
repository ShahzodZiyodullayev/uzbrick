// src/widgets/hero/ui/hero.tsx

/**
 * Hero section component.
 *
 * Purpose:
 * - Presents the primary marketing message (headline + highlighted brand token) and a supporting description.
 * - Offers a call-to-action button that routes users to the phone/contact form (`navigate("phone")`).
 * - Displays an illustrative graphic beside the textual content on larger screens.
 *
 * Layout:
 * - Two-column grid (`Grid`): text (left) and illustration (right).
 * - Stacks textual elements using Mantine `Stack` with spacious gap for readability.
 *
 * Responsiveness:
 * - Columns collapse to a single column on small viewports (`span={{ base: 12, md: 6 }}`).
 * - Button size adapts via `useMatches` (maps breakpoints to Mantine size tokens).
 *
 * Internationalization (i18n):
 * - All user-facing strings pulled from translation keys: `hero.title.title`, `hero.title.sub-title`, `hero.description`, `hero.phone`.
 *
 * Navigation:
 * - Button invokes `navigate("phone")` (relative route) to lead users into the phone capture flow.
 *
 * Accessibility:
 * - Text hierarchy uses semantic `<Text>` but could be upgraded to `<Title>` for stronger semantics if desired.
 * - Consider adding meaningful `alt` text to the illustration (`Image`) for screen readers.
 *
 * Styling:
 * - Visual styles sourced from `hero.module.pcss` (class-based).
 *
 * Extension ideas:
 * - Add motion/scroll reveal animations.
 * - Make the illustration lazy-load if asset size becomes large.
 * - Add analytics event on CTA click.
 */

import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  Image,
  Stack,
  Text,
  useMatches,
} from "@mantine/core";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import Cartoon from "@/shared/assets/images/cartoon.svg";

import classes from "./hero.module.pcss";

const Hero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Responsive control for button size (maps breakpoint -> Mantine size token).
  const size = useMatches({
    base: "md",
    sm: "lg",
  });

  return (
    <Box className={classes.heroWrapper}>
      <Container size="lg" className={classes.heroContainer}>
        <Grid className={classes.grid}>
          {/* Left column: headline, description, CTA */}
          <Grid.Col span={{ base: 12, md: 6 }} className={classes.gridColLeft}>
            <Stack className={classes.stack} gap="xl">
              {/* Composite headline with highlighted span */}
              <Text className={classes.title}>
                {t("hero.title.title")}{" "}
                <Text span className={classes.subTitle}>
                  {t("hero.title.sub-title")}
                </Text>
              </Text>

              {/* Supporting description */}
              <Text className={classes.text}>{t("hero.description")}</Text>

              {/* Primary call-to-action */}
              <Button size={size} className={classes.button} onClick={() => navigate("phone")}>
                {t("hero.phone")}
              </Button>
            </Stack>
          </Grid.Col>

          {/* Right column: illustration / visual support */}
          <Grid.Col span={{ base: 12, md: 6 }} className={classes.gridColRight}>
            <Center className={classes.center}>
              <Image src={Cartoon} className={classes.image} />
            </Center>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
