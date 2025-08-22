import { Box, Container, Flex, Image, SegmentedControl, useMatches } from "@mantine/core";
import Logo from "@/shared/assets/logo/logo.svg";
import { useState } from "react";
import classes from "./header.module.pcss";

const language = [
  { label: "UZ", value: "uz" },
  { label: "RU", value: "ru" },
];

const Header = () => {
  const [value, setValue] = useState("uz");
  const size = useMatches({
    base: "xs",
    sm: "md",
  });

  return (
    <Box className={classes.headerWrapper}>
      <Container size="xl" className={classes.headerContainer}>
        <Flex className={classes.headerFlex}>
          <Image src={Logo} className={classes.logo} />
          <SegmentedControl
            size={size}
            value={value}
            classNames={{
              root: classes.root,
              indicator: classes.indicator,
            }}
            onChange={setValue}
            data={language}
          />
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
