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

const logos = [Logo6, Logo1, Logo2, Logo3, Logo4, Logo5];

const About = () => {
  const { t } = useTranslation();
  const width = useMatches({
    base: 40,
    sm: 50,
  });

  const gap = useMatches({
    base: "xs",
    sm: "xl",
  });

  return (
    <Box className={classes.wrapper}>
      <Container size="lg" className={classes.container}>
        <Grid gutter={100} className={classes.grid}>
          <Grid.Col visibleFrom="sm" span="content" className={classes.imageCol}>
            <Image src={Tesla} alt="UzBrick production" className={classes.image} />
          </Grid.Col>
          <Grid.Col span="auto" className={classes.contentCol}>
            <Stack className={classes.stack}>
              <Text className={classes.title}>
                <Text span className={classes.subTitle}>
                  UzBrick
                </Text>{" "}
                {t("about.title.sub-title")}
              </Text>
              <Text className={classes.description}>
                {t("about.description.1")}
                <br />
                <br />
                {t("about.description.2")}
                <br />
                <br />
                {t("about.description.3")}
              </Text>
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
