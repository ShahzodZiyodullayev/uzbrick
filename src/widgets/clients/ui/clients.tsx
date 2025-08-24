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

const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo1, Logo2, Logo3, Logo4, Logo5, Logo6];

const Clients = () => {
  const { t } = useTranslation();
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  const slideSize = useMatches({
    base: `${100 / 1.15}%`,
    sm: `${100 / 3.23}%`,
    md: `${100 / 5.3}%`,
  });

  return (
    <Box className={classes.wrapper}>
      <Container size="lg" className={classes.container}>
        <Flex className={classes.header}>
          <Title className={classes.title}>{t("clients.title")}</Title>
          <Text className={classes.subtitle}>{t("clients.description")}</Text>
        </Flex>
        <Carousel
          withControls={false}
          slideSize={slideSize}
          plugins={[autoplay.current]}
          emblaOptions={{
            loop: true,
            align: "start",
            slidesToScroll: 1,
          }}
          className={classes.carousel}>
          {logos.map((image, index) => (
            <Carousel.Slide key={index} className={classes.slide}>
              <Image
                src={image}
                alt={`Loyiha haqida ${index + 1}-rasm`}
                className={classes.logoImage}
              />
            </Carousel.Slide>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
};

export default Clients;
