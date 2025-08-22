import { Box, Container, Grid, SimpleGrid, Stack, Text, Title, Image } from "@mantine/core";
import Logo1 from "@/shared/assets/logo/person.svg";
import Logo2 from "@/shared/assets/logo/hands.png";
import Logo3 from "@/shared/assets/logo/click.svg";
import Logo4 from "@/shared/assets/logo/cards.svg";
import classes from "./stats.module.pcss";
import { useTranslation } from "react-i18next";

const Stats = () => {
  const { t } = useTranslation();
  const statsData = [
    { value: "2,245,341", icon: Logo1, label: t("stats.stat.1") },
    { value: "46,328", icon: Logo2, label: t("stats.stat.2") },
    { value: "828,867", icon: Logo3, label: t("stats.stat.3") },
    { value: "1,926,436", icon: Logo4, label: t("stats.stat.4") },
  ];

  return (
    <Box className={classes.wrapper}>
      <Container size="lg" className={classes.container}>
        <Grid gutter="xl" className={classes.rootGrid}>
          <Grid.Col span={{ base: 12, md: 6 }} className={classes.leftCol}>
            <Text className={classes.leftText}>
              {t("stats.title.title")}{" "}
              <Text span className={classes.highlightText}>
                {t("stats.title.sub-title")}
              </Text>
            </Text>
            <Text className={classes.secondaryText}>{t("stats.description")}</Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }} className={classes.rightCol}>
            <SimpleGrid verticalSpacing="xl" cols={2} className={classes.statsGrid}>
              {statsData.map(({ icon, value, label }, idx) => (
                <Grid key={idx} className={classes.statItem}>
                  <Grid.Col span={3} className={classes.statIconCol}>
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
