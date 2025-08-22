import { Box, Container, Grid, Group, Image, Stack, Text } from "@mantine/core";
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
  return (
    <Box className={classes.wrapper}>
      <Container size="lg" className={classes.container}>
        <Grid gutter={100} className={classes.grid}>
          <Grid.Col span="content" className={classes.imageCol}>
            <Image src={Tesla} alt="UzBrick production" className={classes.image} />
          </Grid.Col>
          <Grid.Col span="auto" className={classes.contentCol}>
            <Stack className={classes.stack}>
              <Text className={classes.title}>
                <Text span className={classes.subTitle}>
                  UzBrick
                </Text>{" "}
                — создаем прочную основу для вашего строительства
              </Text>
              <Text className={classes.description}>
                UzBrick — это современное предприятие по производству кирпича, основанное с целью
                обеспечить рынок Узбекистана качественными строительными материалами. <br />
                <br /> Мы работаем по современным технологиям, строго соблюдая стандарты качества.
                Главные ценности компании — надежность, экологичность и индивидуальный подход к
                каждому клиенту. <br />
                <br />
                Производственные мощности UzBrick позволяют выпускать до [указать объем] кирпичей в
                месяц, что обеспечивает стабильные поставки для объектов любой сложности.
              </Text>
              <Group className={classes.logosGroup} gap="xl">
                {logos.map((icon, index) => (
                  <Image
                    src={icon}
                    w={50}
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
