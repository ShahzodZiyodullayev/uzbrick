import { Box, Card, Container, SimpleGrid, Stack, Text, Title, useMatches } from "@mantine/core";
import classes from "./logistics.module.pcss";
import { useTranslation } from "react-i18next";

const Logistics = () => {
  const { t } = useTranslation();
  const spacings = useMatches({
    base: 20,
    md: 100,
  });

  return (
    <Box className={classes.wrapper}>
      <Container size="lg" className={classes.container}>
        <Stack className={classes.stack}>
          <Title className={classes.sectionTitle}>{t("logistics.title")}</Title>
          <Text className={classes.description}>{t("logistics.description")}</Text>
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing={spacings} className={classes.grid}>
            <Card className={classes.card} withBorder>
              <Title className={classes.cardTitle}>{t("logistics.logistic.1.title")}</Title>
              <Text className={classes.cardText}>{t("logistics.logistic.1.description")}</Text>
            </Card>
            <Card className={classes.card} withBorder>
              <Title className={classes.cardTitle}>{t("logistics.logistic.2.title")}</Title>
              <Text className={classes.cardText}>{t("logistics.logistic.2.description")}</Text>
            </Card>
            <Card className={classes.card} withBorder>
              <Title className={classes.cardTitle}>{t("logistics.logistic.3.title")}</Title>
              <Text className={classes.cardText}>{t("logistics.logistic.3.description")}</Text>
            </Card>
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Logistics;
