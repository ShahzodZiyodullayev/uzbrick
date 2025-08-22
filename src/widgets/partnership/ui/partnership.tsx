import { Box, Button, Container, Grid, Image, Stack, Text, Title } from "@mantine/core";
import Partnerships from "@/shared/assets/images/partnership.svg";
import classes from "./partnership.module.pcss";

const Partnership = () => {
  return (
    <Box className={classes.wrapper}>
      <Container size="lg" className={classes.container}>
        <Grid gutter={100} className={classes.grid}>
          <Grid.Col span="content" className={classes.imageCol}>
            <Image src={Partnerships} className={classes.image} />
          </Grid.Col>
          <Grid.Col span="auto" className={classes.contentCol}>
            <Stack className={classes.stack}>
              <Title className={classes.title}>Партнерство</Title>
              <Text className={classes.description}>
                Мы открыты к сотрудничеству с застройщиками, дилерами, логистическими компаниями и
                торговыми сетями. Предлагаем индивидуальные условия, скидки на оптовые партии и
                поддержку на всех этапах. Свяжитесь с нами для обсуждения условий и заключения
                договора.
              </Text>
              <Button w="max-content" size="lg" className={classes.ctaButton}>
                Связаться
              </Button>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default Partnership;
