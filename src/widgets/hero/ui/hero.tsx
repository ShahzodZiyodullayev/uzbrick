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
import Cartoon from "@/shared/assets/images/cartoon.svg";
import classes from "./hero.module.pcss";

const Hero = () => {
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
                Надежный кирпич для{" "}
                <Text span className={classes.subTitle}>
                  вашего будущего
                </Text>
              </Text>
              <Text className={classes.text}>
                UzBrick — производим высококачественный строительный кирпич с соблюдением всех
                стандартов и с заботой о прочности вашего проекта.
              </Text>
              <Button size={size} className={classes.button}>
                Заказать звонок
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
