import { Image, useMatches } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

import classes from "@/widgets/clients/ui/clients.module.pcss";
import Logo1 from "@/shared/assets/logo/Logo-1.svg";
import Logo2 from "@/shared/assets/logo/Logo-2.svg";
import Logo3 from "@/shared/assets/logo/Logo-3.svg";
import Logo4 from "@/shared/assets/logo/Logo-4.svg";
import Logo5 from "@/shared/assets/logo/Logo-5.svg";
import Logo6 from "@/shared/assets/logo/Logo-6.svg";

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

const HeroCarousel = () => {
  // Autoplay plugin (delay in ms). Using ref to avoid re‑instantiation.
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  // Responsive slide width percentages (as strings Mantine expects).
  const slideSize = useMatches({
    base: `${100 / 1.15}%`, // ~1 logo (slightly > 1 to hint overflow)
    sm: `${100 / 3.23}%`, // ~3 logos visible
    md: `${100 / 5.3}%`, // ~5 logos visible
  });

  return (
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
  );
};

export default HeroCarousel;
