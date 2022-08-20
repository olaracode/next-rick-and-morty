import { extendTheme } from "@chakra-ui/react";

const components = {
  Button: {
    variants: {
      outline: {
        bg: "transparent",
        border: "1px",
        borderRadius: "18px",
        borderColor: "brand.main",
        fontWeight: "300",
        _hover: {
          filter: "brightness(98%)",
          backgroundColor: "brand.card",
        },
      },
    },
  },
};

export const darkTheme = extendTheme({
  styles: {
    global: {
      body: {
        color: "#ffffff",
        background: "#14152D",
      },
    },
  },
  colors: {
    brand: {
      bg: "#14152D",
      card: "#1F2145",
      main: "#83BE4C",
      accent: "#A3CBA4",
      light: "#EDF0E4",
    },
    text: {
      main: "#EDF0E4",
      hover: "#000",
    },
  },
  components: { ...components },
});

export const lightTheme = extendTheme({
  styles: {
    global: {
      body: {
        color: "black",
        background: "#fafafa",
      },
    },
  },
  colors: {
    brand: {
      bg: "#fafafa",
      card: "#EDF0E4",
      main: "#83BE4C",
      accent: "#1F2145",
      light: "#fafafa",
    },
    text: {
      main: "#1F2145",
    },
  },
  components: { ...components },
});
