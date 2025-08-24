import { Box, Container, Flex, Image, SegmentedControl, useMatches } from "@mantine/core";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import Logo from "@/shared/assets/logo/logo.svg";

import classes from "./header.module.pcss";

/**
 * Header widget.
 *
 * Responsibilities:
 * 1. Renders the site logo.
 * 2. Provides a language switcher (Uzbek / Russian) via i18next.
 * 3. Adapts control size responsively with Mantine `useMatches`.
 *
 * Internationalization (i18n):
 * - Reads the persisted language code from `localStorage` (key: `i18nextLng`).
 * - Invokes `i18n.changeLanguage` whenever the selected value changes.
 *
 * State:
 * - `value` holds the current language code displayed by `SegmentedControl`.
 *
 * Accessibility:
 * - `SegmentedControl` offers clear visible labels (`UZ`, `RU`).
 * - Consider adding `aria-label` to the control if surrounding context is ambiguous.
 *
 * Performance:
 * - Language change occurs in a `useEffect` tied to `value`. (Safe since changes are user-driven.)
 *
 * Extension ideas:
 * - Add English or additional languages dynamically from a config.
 * - Persist selection explicitly (i18next already handles persistence if configured).
 * - Replace static array with a mapped config including flag icons.
 */
const language = [
  { label: "UZ", value: "uz" },
  { label: "RU", value: "ru" },
];

const Header = () => {
  // Initialize from stored locale; fallback to "en" if absent.
  const [value, setValue] = useState(localStorage.getItem("i18nextLng") || "en");
  const { i18n } = useTranslation();

  // Responsive control size: smaller on mobile, larger from `sm` breakpoint.
  const size = useMatches({
    base: "xs",
    sm: "md",
  });

  /**
   * Change the active application language.
   * @param lng Target language code (e.g. "uz", "ru").
   */
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  // Apply language side effect whenever selection updates.
  useEffect(() => {
    changeLanguage(value);
  }, [value]);

  return (
    <Box className={classes.headerWrapper}>
      <Container size="xl" className={classes.headerContainer}>
        <Flex className={classes.headerFlex}>
          {/* Brand logo */}
          <Image src={Logo} className={classes.logo} />
          {/* Language selector */}
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
