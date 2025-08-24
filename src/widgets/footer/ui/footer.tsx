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

import classes from "./footer.module.pcss";

const Footer = () => {
  const { t } = useTranslation();
  const direction: any = useMatches({
    base: "column-reverse",
    sm: "row",
  });

  const gap = useMatches({
    base: 30,
    sm: 0,
  });

  const form = useForm({
    initialValues: {
      email: "",
    },

    validate: {
      email: (value: any) => (/^\S+@\S+\.\S+$/.test(value) ? null : t("errors.mail-error")),
    },
  });

  return (
    <Box className={classes.wrapper}>
      <Container size="lg" className={classes.container}>
        <Flex justify="space-between" gap={gap} direction={direction} className={classes.flex}>
          <Stack className={classes.leftStack}>
            <Image visibleFrom="sm" src={Logo} alt="UzBrick logo" className={classes.logoImage} />
            <Stack gap={4} className={classes.copyrightStack}>
              <Text className={classes.copyrightText}>{t("footer.copyright")}</Text>
              <Text className={classes.copyrightText}>{t("footer.author")}</Text>
            </Stack>
            <Group className={classes.socialGroup}>
              <ActionIcon size="lg" color="#444" className={classes.socialActionIcon}>
                <FontAwesomeIcon icon={faInstagram} className={classes.socialIcon} />
              </ActionIcon>
              <ActionIcon size="lg" color="#444" className={classes.socialActionIcon}>
                <FontAwesomeIcon icon={faYoutube} className={classes.socialIcon} />
              </ActionIcon>
            </Group>
          </Stack>
          <form onSubmit={form.onSubmit(values => console.log(values))}>
            <Stack className={classes.rightStack}>
              <Text className={classes.subscribeTitle}>{t("footer.input-label")}</Text>
              <TextInput
                size="md"
                variant="filled"
                placeholder={t("footer.placeholder")}
                className={classes.input}
                classNames={{ input: classes.inputStyle }}
                {...form.getInputProps("email")}
                rightSection={
                  <Button variant="transparent" type="submit" p={0}>
                    <FontAwesomeIcon color="#fff" icon={faPaperPlane} size="lg" />
                  </Button>
                }
              />
            </Stack>
          </form>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
