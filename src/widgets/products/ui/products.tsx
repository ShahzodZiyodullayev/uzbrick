import { Box, Card, Container, SimpleGrid, Stack, Text, Title, useMatches } from "@mantine/core";
import classes from "./products.module.pcss";
import { useTranslation } from "react-i18next";

const Products = () => {
  const { t } = useTranslation();
  const spacings = useMatches({
    base: 20,
    md: 100,
  });

  return (
    <Box className={classes.wrapper}>
      <Container size="lg" className={classes.container}>
        <Stack className={classes.stack}>
          <Title className={classes.sectionTitle}>{t("products.title")}</Title>
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing={spacings} className={classes.grid}>
            <Card className={classes.card} withBorder>
              <Title className={classes.cardTitle}>{t("products.product.1.title")}</Title>
              <Text className={classes.cardText}>{t("products.product.1.description")}</Text>
            </Card>
            <Card className={classes.card} withBorder>
              <Title className={classes.cardTitle}>{t("products.product.2.title")}</Title>
              <Text className={classes.cardText}>{t("products.product.2.description")}</Text>
            </Card>
            <Card className={classes.card} withBorder>
              <Title className={classes.cardTitle}>{t("products.product.3.title")}</Title>
              <Text className={classes.cardText}>{t("products.product.3.description")}</Text>
            </Card>
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Products;
