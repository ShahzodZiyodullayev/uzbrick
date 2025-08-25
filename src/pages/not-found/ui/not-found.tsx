import { Box, Button, Container, Stack, Text, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { SEO } from "@/shared/ui/SEO";
import { ariaPatterns } from "@/shared/lib/accessibility";

const NotFound = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const isRussian = currentLang === "ru";

  const pageTitle = isRussian ? "Страница не найдена - 404" : "Sahifa topilmadi - 404";
  const pageDescription = isRussian
    ? "Запрашиваемая страница не существует. Вернитесь на главную страницу UzBrick для поиска строительных материалов."
    : "So'ralgan sahifa mavjud emas. Qurilish materiallari qidirish uchun UzBrick bosh sahifasiga qayting.";

  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        url="https://uzbrick.uz/404"
        type="website"
        noIndex={true}
      />
      <Box component="main" {...ariaPatterns.main}>
        <Container size="md" py="xl">
          <Stack align="center" gap="xl" mih="60vh" justify="center">
            <Title order={1} size="h1" ta="center" {...ariaPatterns.heading(1)}>
              404
            </Title>

            <Stack align="center" gap="md">
              <Title order={2} size="h3" ta="center" {...ariaPatterns.heading(2)}>
                {isRussian ? "Страница не найдена" : "Sahifa topilmadi"}
              </Title>

              <Text ta="center" size="lg" maw={500}>
                {isRussian
                  ? "К сожалению, запрашиваемая страница не существует. Возможно, она была перемещена или удалена."
                  : "Afsuski, so'ralgan sahifa mavjud emas. Ehtimol u ko'chirilgan yoki o'chirilgan."}
              </Text>
            </Stack>

            <Button
              size="md"
              onClick={() => navigate("/")}
              aria-describedby="home-button-description">
              {isRussian ? "Вернуться на главную" : "Bosh sahifaga qaytish"}
            </Button>

            <div id="home-button-description" className="sr-only">
              {isRussian
                ? "Перейти на главную страницу UzBrick с информацией о строительных материалах"
                : "Qurilish materiallari haqida ma'lumot bilan UzBrick bosh sahifasiga o'ting"}
            </div>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default NotFound;
