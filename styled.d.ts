import "styled-components";

declare module "styled-components" {
   export interface DefaultTheme {
      colors: {
         primary: string;
         secondary: string;
         black: string;
         darkGrey: string;
         darkPurple: string;
         error: string;
         grey: string;
         lightGrey: string;
         lightPurple: string;
         success: string;
         warning: string;
         white: string;
         texts: string;
         textsActive: string;
         buttonBackground: string;
      };
      fontSize: {
         xl: string;
         l: string;
         m: string;
         s: string;
      };
      mq: {
         tablet: string;
         desktop: string;
         bigDesktop: string;
         huge: string;
      };
   }
}
