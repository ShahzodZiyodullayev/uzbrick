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

  const size = useMatches({
    base: "md",
    sm: "lg",
  });

  return (
    <Box className={classes.heroWrapper}>
      <Container size="lg" className={classes.heroContainer}>
        <Grid className={classes.grid}>
          <Grid.Col span={{ base: 12, md: 6 }} className={classes.gridColLeft}>
            <Stack className={classes.stack} gap="xl">
              <Text className={classes.title}>
                {t("hero.title.title")}{" "}
                <Text span className={classes.subTitle}>
                  {t("hero.title.sub-title")}
                </Text>
              </Text>
              <Text className={classes.text}>{t("hero.description")}</Text>
              <Button size={size} className={classes.button} onClick={() => navigate("phone")}>
                {t("hero.phone")}
              </Button>
            </Stack>
          </Grid.Col>
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
