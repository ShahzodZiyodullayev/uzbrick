import {
  ActionIcon,
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Image,
  InputBase,
  Stack,
  Text,
  TextInput,
  Title,
  useMatches,
} from "@mantine/core";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useForm } from "@mantine/form";
import { useRef } from "react";
import { IMaskInput } from "react-imask";

import Cartoon from "@/shared/assets/images/cartoon.svg";

import classes from "./phone.module.pcss";

const Phone = () => {
  const phoneInputRef = useRef(null);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const size = useMatches({
    base: "md",
    md: "lg",
  });

  const PhoneNumberRegex = /^\+998\d{9}$/;

  const form = useForm({
    initialValues: {
      name: "",
      phone: "",
      comment: "",
    },

    validate: {
      name: (value: any) => (value.trim().length > 0 ? null : t("errors.name-error")),
      phone: (value: any) => (PhoneNumberRegex.test(value) ? null : t("errors.phone-error")),
      comment: (value: any) => (value.trim().length >= 10 ? null : t("errors.comment-error")),
    },
  });

  const handleExit = () => navigate("..");

  return (
    <Box className={classes.wrapper}>
      <ActionIcon className={classes.exit} size={size} onClick={handleExit}>
        <FontAwesomeIcon icon={faXmark} />
      </ActionIcon>
      <Grid className={classes.grid} gutter={0}>
        <Grid.Col span={{ base: 12, md: 6 }} className={classes.formCol}>
          <Flex className={classes.formFlex}>
            <form className={classes.form} onSubmit={form.onSubmit(values => console.log(values))}>
              <Stack className={classes.formStack}>
                <Stack className={classes.formStackTitle}>
                  <Title className={classes.title}>{t("phone.title")}</Title>
                  <Text className={classes.subtitle}>{t("phone.description")}</Text>
                </Stack>
                <Stack className={classes.inputsStack}>
                  <TextInput
                    variant="filled"
                    size="lg"
                    className={classes.input}
                    classNames={{ input: classes.inputStyle }}
                    placeholder={t("phone.form.name")}
                    {...form.getInputProps("name")}
                  />
                  <InputBase
                    component={IMaskInput}
                    mask="{+998} 00 000 00 00"
                    unmask
                    variant="filled"
                    className={classes.input}
                    classNames={{ input: classes.inputStyle }}
                    placeholder={t("phone.form.phone")}
                    size="lg"
                    ref={phoneInputRef}
                    {...form.getInputProps("phone")}
                    onAccept={(value: any) => {
                      if (typeof value === "string") {
                        form.getInputProps("phone").onChange(value, value.length === 13);
                      }
                    }}
                  />
                  <TextInput
                    variant="filled"
                    size="lg"
                    className={classes.input}
                    classNames={{ input: classes.inputStyle }}
                    placeholder={t("phone.form.comment")}
                    {...form.getInputProps("comment")}
                  />
                </Stack>
                <Center className={classes.submitCenter}>
                  <Button type="submit" size={size} className={classes.submitButton}>
                    {t("phone.button")}
                  </Button>
                </Center>
              </Stack>
            </form>
          </Flex>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }} className={classes.imageCol}>
          <Center className={classes.imageColCenter}>
            <Image src={Cartoon} className={classes.illustrationImage} />
          </Center>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default Phone;
