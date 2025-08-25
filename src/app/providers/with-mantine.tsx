import { type ComponentType, createElement } from "react";
import "@mantine/notifications/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/core/styles.css";
import { Button, createTheme, List, MantineProvider, SegmentedControl } from "@mantine/core";
import { emotionTransform, MantineEmotionProvider } from "@mantine/emotion";

export const withMantine = (component: ComponentType) => () => {
  const theme = createTheme({
    fontFamily: "Inter, sans-serif",
    respectReducedMotion: true,
    focusRing: "auto",
    cursorType: "pointer",
    components: {
      Button: Button.extend({
        defaultProps: {
          color: "#8C3B35",
        },
      }),
      List: List.extend({
        styles: () => ({
          root: {
            listStyle: "none",
          },
        }),
      }),
      SegmentedControl: SegmentedControl.extend({
        defaultProps: {
          color: "#8C3B35",
        },
      }),
    },
  });

  return (
    <MantineProvider
      theme={theme}
      withCssVariables
      defaultColorScheme="light"
      stylesTransform={emotionTransform}>
      <MantineEmotionProvider>{createElement(component)}</MantineEmotionProvider>
    </MantineProvider>
  );
};
