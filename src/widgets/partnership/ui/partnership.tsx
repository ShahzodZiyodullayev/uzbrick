import { Box, Button, Container, Grid, Image, Stack, Text, Title, useMatches } from "@mantine/core";
import Partnerships from "@/shared/assets/images/partnership.svg";
import classes from "./partnership.module.pcss";
import { useTranslation } from "react-i18next";

const Partnership = () => {
  const { t } = useTranslation();
  const size = useMatches({
    base: "md",
    sm: "lg",
  });

  return (
    <Box className={classes.wrapper}>
      <Container size="lg" className={classes.container}>
        <Grid gutter={100} className={classes.grid}>
          <Grid.Col visibleFrom="sm" span="content" className={classes.imageCol}>
            <Image src={Partnerships} className={classes.image} />
          </Grid.Col>
          <Grid.Col span="auto" className={classes.contentCol}>
            <Stack className={classes.stack}>
              <Title className={classes.title}>{t("partnership.title")}</Title>
              <Text className={classes.description}>{t("partnership.description")}</Text>
              <Button w="max-content" size={size} className={classes.ctaButton}>
                {t("partnership.button")}
              </Button>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default Partnership;
