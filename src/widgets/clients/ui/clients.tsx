// src/widgets/clients/ui/clients.tsx

import { Box, Container, Flex, Text, Title } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";

import { HeroCarousel } from "@/shared/ui/Carousel/ui/hero-carousel.ts";

import classes from "./clients.module.pcss";

/**
 * Clients (logos) carousel widget.
 *
 * Purpose:
 * - Displays a continuously scrolling, looping carousel of partner / client logos.
 * - Reinforces social proof below the hero section.
 *
 * Internationalization:
 * - Section heading and subtitle pulled from translation keys: `clients.title`, `clients.description`.
 *
 * Responsiveness:
 * - `slideSize` dynamically adjusts how many logos appear per viewport width using `useMatches`.
 *   (Values chosen so fractional widths keep smooth continuous motion.)
 *
 * Autoplay:
 * - `embla-carousel-autoplay` plugin advances slides every 2000ms.
 * - Stored in a `useRef` to keep a stable plugin instance across renders.
 *
 * Accessibility:
 * - Each logo gets an `alt` like "Client logo N".
 * - Carousel controls are disabled (`withControls={false}`) to keep a clean passive showcase.
 *
 * Extension ideas:
 * - Pause on hover/focus: pass `onMouseEnter`/`onMouseLeave` to stop/start the plugin.
 * - Provide an array via props or remote fetch instead of static imports.
 * - Add lazy loading if logo set becomes large.
 */

const Clients = () => {
  const { t } = useTranslation();

  return (
    <Box className={classes.wrapper}>
      <Container size="lg" className={classes.container}>
        {/* Section header */}
        <Flex className={classes.header}>
          <Title className={classes.title}>{t("clients.title")}</Title>
          <Text className={classes.subtitle}>{t("clients.description")}</Text>
        </Flex>
        <Suspense fallback={null}>
          <HeroCarousel />
        </Suspense>
      </Container>
    </Box>
  );
};

export default Clients;
