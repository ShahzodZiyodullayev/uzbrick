import {
  ActionIcon,
  Box,
  Container,
  Flex,
  Group,
  Image,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Logo from "@/shared/assets/logo/logo.png";
import classes from "./footer.module.pcss";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  return (
    <Box className={classes.wrapper}>
      <Container size="lg" className={classes.container}>
        <Flex justify="space-between" className={classes.flex}>
          <Stack className={classes.leftStack}>
            <Image src={Logo} alt="UzBrick logo" className={classes.logoImage} />
            <Stack gap={4} className={classes.copyrightStack}>
              <Text className={classes.copyrightText}>Авторское право © 2020 Uzbrick ltd.</Text>
              <Text className={classes.copyrightText}>Все права защищены.</Text>
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
          <Stack className={classes.rightStack}>
            <Text className={classes.subscribeTitle}>Будьте в курсе событий</Text>
            <TextInput
              size="md"
              variant="filled"
              placeholder="Your email address"
              className={classes.input}
              classNames={{ input: classes.inputStyle }}
              rightSection={<FontAwesomeIcon color="#fff" icon={faPaperPlane} />}
            />
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
