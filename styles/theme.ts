import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
   colors: {
      primary: "#303030",
      secondary: "#96A1B8",
      black: "#303030",
      darkGrey: "#96A1B8",
      darkPurple: "#6F1976",
      error: "#FD8C8C",
      grey: "#C0C7D6",
      lightGrey: "#F7F8FA",
      lightPurple: "#E6E6FA",
      success: "#00B087",
      warning: "#1627C0",
      white: "#FFFFFF",
   },
   fontSize: {
      xl: "24px",
      l: "17px",
      m: "12px",
      s: "11px",
   },
   mq: {
      tablet: "@media (min-width: 768px)",
      desktop: "@media (min-width: 1024px)",
      bigDesktop: "@media (min-width: 1280px)",
      huge: "@media (min-width: 1440px)",
   },
};
