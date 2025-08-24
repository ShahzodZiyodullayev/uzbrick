// src/widgets/footer-hightlight/ui/footer-hightlight.tsx

/**
 * Footer highlight (pre-footer callout) widget.
 *
 * Purpose:
 * - Presents a final call-to-action line above the global footer.
 * - Provides a smooth "scroll to top" button so users can quickly return to navigation/content.
 *
 * Behavior:
 * - Uses `window.scrollTo` with smooth scrolling (native browser support).
 * - Button size adapts to breakpoint via Mantine `useMatches`.
 *
 * Internationalization:
 * - Title and button label pulled from translation keys: `footer-highlight.title`, `footer-highlight.button`.
 *
 * Accessibility:
 * - Button uses native semantics; consider adding `aria-label` if the text becomes non-descriptive.
 *
 * Styling:
 * - All layout, colors, and spacing sourced from `footer-hightlight.module.pcss`.
 *
 * Extension ideas:
 * - Disable the button when already near the top (check `window.scrollY`).
 * - Add a subtle entrance animation when the section enters viewport.
 * - Convert to a generic reusable "BackToTop" component if needed elsewhere.
 */

import { Box, Button, Container, Flex, Title, useMatches } from "@mantine/core";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";

import classes from "./footer-hightlight.module.pcss";

const FooterHightlight = () => {
  const { t } = useTranslation();

  // Responsive button size token.
  const size = useMatches({
    base: "md",
    sm: "lg",
  });

  /**
   * Smoothly scroll the page back to the top.
   * Wrapped in `useCallback` to avoid unnecessary re-creations.
   */
  const handleScrollTop = useCallback(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <Box className={classes.wrapper}>
      <Container size="lg" className={classes.container}>
        <Flex align="center" direction="column" className={classes.flex}>
          <Title className={classes.title}>{t("footer-highlight.title")}</Title>
          <Button size={size} className={classes.backButton} onClick={handleScrollTop}>
            {t("footer-highlight.button")}
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default FooterHightlight;
