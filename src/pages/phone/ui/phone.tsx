import {
  ActionIcon,
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Image,
  Stack,
  Text,
  TextInput,
  Title,
  useMatches,
} from "@mantine/core";
import Cartoon from "@/shared/assets/images/cartoon.svg";
import classes from "./phone.module.pcss";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Phone = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const size = useMatches({
    base: "md",
    md: "lg",
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
                />
                <TextInput
                  variant="filled"
                  size="lg"
                  className={classes.input}
                  classNames={{ input: classes.inputStyle }}
                  placeholder={t("phone.form.phone")}
                />
                <TextInput
                  variant="filled"
                  size="lg"
                  className={classes.input}
                  classNames={{ input: classes.inputStyle }}
                  placeholder={t("phone.form.comment")}
                />
              </Stack>
              <Center className={classes.submitCenter}>
                <Button size={size} className={classes.submitButton}>
                  {t("phone.button")}
                </Button>
              </Center>
            </Stack>
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
