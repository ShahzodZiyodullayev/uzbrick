import { Box, Button, Container, Flex, Title, useMatches } from "@mantine/core";
import { useCallback } from "react";
import classes from "./footer-hightlight.module.pcss";
import { useTranslation } from "react-i18next";

const FooterHightlight = () => {
  const { t } = useTranslation();
  const size = useMatches({
    base: "md",
    sm: "lg",
  });

  const handleScrollTop = useCallback(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <Box className={classes.wrapper}>
      <Container size="lg" className={classes.container}>
        <Flex align="center" direction="column" className={classes.flex}>
          <Title className={classes.title}>{t("footer-highlight.title")}</Title>
          <Button size={size} className={classes.backButton} onClick={handleScrollTop}>
            {t("footer-highlight.button")}
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default FooterHightlight;
