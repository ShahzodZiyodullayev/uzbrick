// src/widgets/clients/ui/clients.tsx

import { Carousel } from "@mantine/carousel";
import { Image, useMatches, Box, Container, Flex, Text, Title } from "@mantine/core";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { useTranslation } from "react-i18next";

import Logo1 from "@/shared/assets/logo/Logo-1.svg";
import Logo2 from "@/shared/assets/logo/Logo-2.svg";
import Logo3 from "@/shared/assets/logo/Logo-3.svg";
import Logo4 from "@/shared/assets/logo/Logo-4.svg";
import Logo5 from "@/shared/assets/logo/Logo-5.svg";
import Logo6 from "@/shared/assets/logo/Logo-6.svg";

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
const logos = [
  Logo1,
  Logo2,
  Logo3,
  Logo4,
  Logo5,
  Logo6,
  // Repeated to create a longer seamless loop without visible gap.
  Logo1,
  Logo2,
  Logo3,
  Logo4,
  Logo5,
  Logo6,
];

const Clients = () => {
  const { t } = useTranslation();

  // Autoplay plugin (delay in ms). Using ref to avoid re‑instantiation.
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  // Responsive slide width percentages (as strings Mantine expects).
  const slideSize = useMatches({
    base: `${100 / 1.15}%`, // ~1 logo (slightly > 1 to hint overflow)
    sm: `${100 / 3.23}%`, // ~3 logos visible
    md: `${100 / 5.3}%`, // ~5 logos visible
  });

  return (
    <Box className={classes.wrapper}>
      <Container size="lg" className={classes.container}>
        {/* Section header */}
        <Flex className={classes.header}>
          <Title className={classes.title}>{t("clients.title")}</Title>
          <Text className={classes.subtitle}>{t("clients.description")}</Text>
        </Flex>

        {/* Logo carousel (looping, autoplay, no manual controls) */}
        <Carousel
          withControls={false}
          slideSize={slideSize}
          // Single stable plugin instance.
          plugins={[autoplay.current]}
          emblaOptions={{
            loop: true,
            align: "start",
            slidesToScroll: 1,
          }}
          className={classes.carousel}>
          {logos.map((image, index) => (
            <Carousel.Slide key={index} className={classes.slide}>
              <Image src={image} alt={`Client logo ${index + 1}`} className={classes.logoImage} />
            </Carousel.Slide>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
};

export default Clients;
