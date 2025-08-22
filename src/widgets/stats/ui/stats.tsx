import { Box, Container, Grid, SimpleGrid, Stack, Text, Title, Image } from "@mantine/core";
import Logo1 from "@/shared/assets/logo/person.svg";
import Logo2 from "@/shared/assets/logo/hands.png";
import Logo3 from "@/shared/assets/logo/click.svg";
import Logo4 from "@/shared/assets/logo/cards.svg";
import classes from "./stats.module.pcss";

const statsData = [
  { value: "2,245,341", label: "Members", icon: Logo1 },
  { value: "46,328", label: "Clubs", icon: Logo2 },
  { value: "828,867", label: "Event Bookings", icon: Logo3 },
  { value: "1,926,436", label: "Payments", icon: Logo4 },
];

const Stats = () => {
  return (
    <Box className={classes.wrapper}>
      <Container size="lg" className={classes.container}>
        <Grid gutter="xl" className={classes.rootGrid}>
          <Grid.Col span={{ base: 12, md: 6 }} className={classes.leftCol}>
            <Text className={classes.leftText}>
              Сотрудничество с{" "}
              <Text span className={classes.highlightText}>
                застройщиками, дилерами и архитекторами
              </Text>
            </Text>
            <Text className={classes.secondaryText}>
              Постоянные поставки на долгосрочной основе
            </Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }} className={classes.rightCol}>
            <SimpleGrid verticalSpacing="xl" cols={2} className={classes.statsGrid}>
              {statsData.map(({ icon, value, label }, idx) => (
                <Grid key={idx} className={classes.statItem}>
                  <Grid.Col span="content" className={classes.statIconCol}>
                    <Image src={icon} className={classes.icon} />
                  </Grid.Col>
                  <Grid.Col span="auto" className={classes.statContentCol}>
                    <Stack gap={4} className={classes.statStack}>
                      <Title order={3} className={classes.statValue}>
                        {value}
                      </Title>
                      <Text className={classes.statLabel}>{label}</Text>
                    </Stack>
                  </Grid.Col>
                </Grid>
              ))}
            </SimpleGrid>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default Stats;
