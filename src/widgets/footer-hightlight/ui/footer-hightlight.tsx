import { Box, Button, Container, Flex, Title } from "@mantine/core";
import classes from "./footer-hightlight.module.pcss"

const FooterHightlight = () => {
  return (
    <Box className={classes.wrapper}>
      <Container size="lg" className={classes.container}>
        <Flex align="center" direction="column" className={classes.flex}>
          <Title className={classes.title}>Надежный производитель кирпича в Узбекистане</Title>
          <Button size="lg" className={classes.backButton}>
            Наверх
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default FooterHightlight;
