// src/widgets/footer/ui/footer.tsx

import {
  ActionIcon,
  Box,
  Button,
  Container,
  Flex,
  Group,
  Image,
  Stack,
  Text,
  TextInput,
  useMatches,
} from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { useTranslation } from "react-i18next";
import { useForm } from "@mantine/form";

import Logo from "@/shared/assets/logo/logo.png";
import { ariaPatterns } from "@/shared/lib/accessibility.ts";

import classes from "./footer.module.pcss";

/**
 * Footer component
 *
 * Responsibilities:
 * - Displays company logo, social links, and copyright text.
 * - Provides an email subscription input with basic validation.
 * - Adapts layout direction responsively via Mantine `useMatches`.
 *
 * State/Logic:
 * - Uses Mantine `useForm` for email field with regex validation.
 * - On submit: currently logs values (replace with API integration).
 *
 * Accessibility:
 * - Form uses native `<form>` for proper submit semantics.
 * - Icon buttons rely on visual icons; add `aria-label` if needed.
 *
 * Styling:
 * - All visual styles come from `footer.module.pcss`.
 *
 * Replace TODOs:
 * - Hook real submit logic inside `onSubmit`.
 *
 * Example integration:
 * <Footer />
 */
const Footer = () => {
  const { t } = useTranslation();

  // Responsive layout values
  const direction: any = useMatches({
    base: "column-reverse",
    sm: "row",
  });

  const gap = useMatches({
    base: 30,
    sm: 0,
  });

  // Form: single email field with simple pattern validation
  const form = useForm({
    initialValues: {
      email: "",
    },
    validate: {
      email: (value: string) => (/^\S+@\S+\.\S+$/.test(value) ? null : t("errors.mail-error")),
    },
  });

  return (
    <Box className={classes.wrapper} {...ariaPatterns.contentinfo}>
      <Container size="lg" className={classes.container}>
        <Flex
          justify="space-between"
          gap={gap}
          // Layout reverses on mobile to show subscription above
          direction={direction}
          className={classes.flex}>
          <Stack className={classes.leftStack}>
            <Image
              visibleFrom="sm"
              src={Logo}
              className={classes.logoImage}
              alt="UzBrick логотип компании"
              role="img"
            />
            <Stack gap={4} className={classes.copyrightStack}>
              <Text className={classes.copyrightText}>{t("footer.copyright")}</Text>
              <Text className={classes.authorText}>{t("footer.author")}</Text>
            </Stack>
            <Group className={classes.socialGroup} role="list" aria-label="Социальные сети">
              <ActionIcon
                size="lg"
                color="#444"
                className={classes.socialActionIcon}
                component="a"
                href="https://instagram.com/uzbrick"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Подписаться на UzBrick в Instagram"
                role="listitem">
                <FontAwesomeIcon icon={faInstagram} className={classes.socialIcon} />
              </ActionIcon>
              <ActionIcon
                size="lg"
                color="#444"
                className={classes.socialActionIcon}
                component="a"
                href="https://youtube.com/@uzbrick"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Подписаться на канал UzBrick в YouTube"
                role="listitem">
                <FontAwesomeIcon icon={faYoutube} className={classes.socialIcon} />
              </ActionIcon>
            </Group>
          </Stack>

          <form
            onSubmit={form.onSubmit(values => {
              // TODO: integrate subscription API call
              console.log(values);
            })}
            aria-label="Подписка на новости"
            role="form">
            <Stack className={classes.rightStack}>
              <Text className={classes.subscribeTitle} component="label" htmlFor="newsletter-email">
                {t("footer.input-label")}
              </Text>
              <TextInput
                id="newsletter-email"
                size="md"
                variant="filled"
                placeholder={t("footer.placeholder")}
                className={classes.input}
                classNames={{ input: classes.inputStyle }}
                {...form.getInputProps("email")}
                aria-describedby="email-description"
                aria-required="true"
                autoComplete="email"
                rightSection={
                  <Button
                    variant="transparent"
                    type="submit"
                    p={0}
                    aria-label={t("footer.submit-aria") || "Submit email"}>
                    <FontAwesomeIcon color="#fff" icon={faPaperPlane} size="lg" />
                  </Button>
                }
              />
              <div id="email-description" className="sr-only">
                Введите ваш email для получения новостей и обновлений от UzBrick
              </div>
            </Stack>
          </form>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
