import { Box, Card, Container, SimpleGrid, Stack, Text, Title, useMatches } from "@mantine/core";
import classes from "./products.module.pcss";

const Products = () => {
  const spacings = useMatches({
    base: 20,
    md: 100,
  });

  return (
    <Box className={classes.wrapper}>
      <Container size="lg" className={classes.container}>
        <Stack className={classes.stack}>
          <Title className={classes.sectionTitle}>
            Современное производство кирпича — гарантия качества UzBrick
          </Title>
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing={spacings} className={classes.grid}>
            <Card className={classes.card} withBorder>
              <Title className={classes.cardTitle}>Керамический кирпич</Title>
              <Text className={classes.cardText}>
                Классический строительный материал с высокой прочностью и огнестойкостью. Подходит
                для наружных и внутренних работ.
              </Text>
            </Card>
            <Card className={classes.card} withBorder>
              <Title className={classes.cardTitle}>Силикатный кирпич</Title>
              <Text className={classes.cardText}>
                Экономичный вариант для перегородок и малоэтажного строительства. Отличается
                звукоизоляцией и точными размерами.
              </Text>
            </Card>
            <Card className={classes.card} withBorder>
              <Title className={classes.cardTitle}>Облицовочный кирпич</Title>
              <Text className={classes.cardText}>
                Идеален для фасадных решений. Широкая палитра цветов и текстур, высокая
                морозостойкость.
              </Text>
            </Card>
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Products;
