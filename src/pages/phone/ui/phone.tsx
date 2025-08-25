// src/pages/phone/ui/phone.tsx
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
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { useNavigate } from "react-router-dom";
import { useForm } from "@mantine/form";
import { useRef } from "react";
import { IMaskInput } from "react-imask";

import Cartoon from "@/shared/assets/images/cartoon.png";
import { SEO } from "@/shared/ui/SEO";

import classes from "./phone.module.pcss";

/**
 * Phone page form component.
 *
 * Purpose:
 * - Collects user name, phone number (Uzbekistan format), and a comment.
 * - Validates fields client-side via Mantine `useForm`.
 * - Uses a masked input (`react-imask`) to guide phone number entry.
 *
 * Mask / value note:
 * - `mask="{+998} 00 000 00 00"` displays formatted value.
 * - `unmask` prop makes the stored value digits only: `998XXXXXXXXX`.
 * - Validation regex therefore matches: ^998\d{9}$.
 *   Remove `unmask` (and update regex) if you prefer a stored value including `+`.
 *
 * Accessibility:
 * - Semantic `<form>` with native submit.
 * - Close (exit) button uses an icon; could add `aria-label` if required.
 *
 * Extension ideas:
 * - Replace `console.log` with API submission + loading state.
 * - Add server-side error mapping.
 */

interface FormValues {
  name: string;
  phone: string; // Digits only when `unmask` is enabled (starts with 998...)
  comment: string;
}

const PHONE_REGEX = /^998\d{9}$/; // Matches unmasked Uzbekistan number without leading '+'

const Phone = () => {
  const phoneInputRef = useRef<HTMLInputElement | null>(null);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const isRussian = currentLang === "ru";
  const navigate = useNavigate();

  // Responsive size token for buttons / icons.
  const size = useMatches({
    base: "md",
    md: "lg",
  });

  // Form configuration with typed values and validators.
  const form = useForm<FormValues>({
    initialValues: {
      name: "",
      phone: "",
      comment: "",
    },
    validate: {
      name: value => (value.trim().length > 0 ? null : t("errors.name-error")),
      phone: value => (PHONE_REGEX.test(value) ? null : t("errors.phone-error")),
      comment: value => (value.trim().length >= 10 ? null : t("errors.comment-error")),
    },
  });

  const pageTitle = isRussian ? "Связаться с нами" : "Biz bilan bog'lanish";

  const pageDescription = isRussian
    ? "Свяжитесь с UzBrick для получения консультации по строительным материалам. Оставьте заявку и наш специалист свяжется с вами в ближайшее время."
    : "Qurilish materiallari bo'yicha maslahat olish uchun UzBrick bilan bog'laning. Ariza qoldiring va mutaxassisimiz tez orada siz bilan bog'lanadi.";

  // Navigate back (assumes parent route handles display state).
  const handleExit = () => navigate("..");

  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        url="https://uzbrick.uz/phone"
        type="website"
      />
      <Box className={classes.wrapper}>
        <ActionIcon
          className={classes.exit}
          size={size}
          onClick={handleExit}
          aria-label="Close form">
          <FontAwesomeIcon icon={faXmark} />
        </ActionIcon>

        <Grid className={classes.grid} gutter={0}>
          {/* Left column: form */}
          <Grid.Col span={{ base: 12, md: 6 }} className={classes.formCol}>
            <Flex className={classes.formFlex}>
              <form
                className={classes.form}
                onSubmit={form.onSubmit(values => {
                  // Replace with API submission.
                  console.log(values);
                })}
                noValidate>
                <Stack className={classes.formStack}>
                  {/* Title / description */}
                  <Stack className={classes.formStackTitle}>
                    <Title className={classes.title}>{t("phone.title")}</Title>
                    <Text className={classes.subtitle}>{t("phone.description")}</Text>
                  </Stack>

                  {/* Inputs */}
                  <Stack className={classes.inputsStack}>
                    <TextInput
                      variant="filled"
                      size="lg"
                      className={classes.input}
                      classNames={{ input: classes.inputStyle }}
                      placeholder={t("phone.form.name")}
                      autoComplete="name"
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
                      inputMode="tel"
                      ref={phoneInputRef}
                      {...form.getInputProps("phone")}
                      // IMask onAccept gives the unmasked numeric string when `unmask` is set
                      onAccept={(value: unknown) => {
                        if (typeof value === "string") {
                          form.setFieldValue("phone", value);
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

                  {/* Submit */}
                  <Center className={classes.submitCenter}>
                    <Button type="submit" size={size} className={classes.submitButton}>
                      {t("phone.button")}
                    </Button>
                  </Center>
                </Stack>
              </form>
            </Flex>
          </Grid.Col>

          {/* Right column: illustration */}
          <Grid.Col span={{ base: 12, md: 6 }} className={classes.imageCol}>
            <Center className={classes.imageColCenter}>
              <Image src={Cartoon} className={classes.illustrationImage} alt="Illustration" />
            </Center>
          </Grid.Col>
        </Grid>
      </Box>
    </>
  );
};

export default Phone;
