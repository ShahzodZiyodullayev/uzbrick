import { Box, Container, Flex, Image, SegmentedControl, useMatches } from "@mantine/core";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import Logo from "@/shared/assets/logo/logo.svg";

import classes from "./header.module.pcss";

const language = [
  { label: "UZ", value: "uz" },
  { label: "RU", value: "ru" },
];

const Header = () => {
  const [value, setValue] = useState(localStorage.getItem("i18nextLng") || "en");
  const { i18n } = useTranslation();
  const size = useMatches({
    base: "xs",
    sm: "md",
  });

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    changeLanguage(value);
  }, [value]);

  return (
    <Box className={classes.headerWrapper}>
      <Container size="xl" className={classes.headerContainer}>
        <Flex className={classes.headerFlex}>
          <Image src={Logo} className={classes.logo} />
          <SegmentedControl
            size={size}
            value={value}
            onChange={(val: string | null): void => setValue(val as any)}
            defaultValue={localStorage.getItem("i18nextLng") || "en"}
            classNames={{
              root: classes.root,
              indicator: classes.indicator,
            }}
            data={language}
          />
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
