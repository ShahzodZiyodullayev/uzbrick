import { Box, Card, Container, SimpleGrid, Stack, Text, Title, useMatches } from "@mantine/core";
import classes from "./logistics.module.pcss";

const Logistics = () => {
  const spacings = useMatches({
    base: 20,
    md: 100,
  });
  return (
    <Box className={classes.wrapper}>
      <Container size="lg" className={classes.container}>
        <Stack className={classes.stack}>
          <Title className={classes.sectionTitle}>Логистика и доставка</Title>
          <Text className={classes.description}>
            Мы знаем, насколько важно соблюдать сроки строительства. Поэтому UzBrick предлагает
            оперативную доставку кирпича прямо на ваш объект.
          </Text>
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing={spacings} className={classes.grid}>
            <Card className={classes.card} withBorder>
              <Title className={classes.cardTitle}>Подготовка продукции</Title>
              <Text className={classes.cardText}>
                Вся продукция надежно упаковывается на поддоны, обматывается пленкой и маркируется.
                Это исключает повреждения при транспортировке.
              </Text>
            </Card>
            <Card className={classes.card} withBorder>
              <Title className={classes.cardTitle}>Доставка по Узбекистану</Title>
              <Text className={classes.cardText}>
                Мы доставляем кирпич по Ташкенту, области и во все регионы страны. Используем
                грузовой автотранспорт, подходящий под объем заказа — от малотоннажек до фур.
              </Text>
            </Card>
            <Card className={classes.card} withBorder>
              <Title className={classes.cardTitle}>Разгрузка и сопровождение</Title>
              <Text className={classes.cardText}>
                По запросу предоставляем услуги по разгрузке и размещению материала на объекте.
                Водитель предоставляет все сопроводительные документы.
              </Text>
            </Card>
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Logistics;
