import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
// import { ThemeProvider, DefaultTheme } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import { theme } from "../styles/theme";
import { Navigation } from "components/Navigation/Navigation";
import NextNProgress from "nextjs-progressbar";

// const theme: DefaultTheme = {
//    colors: {
//       primary: "#111",
//       secondary: "#0070f3",
//    },
// };

export default function App({ Component, pageProps }: AppProps) {
   return (
      <>
         <ThemeProvider theme={theme}>
            <GlobalStyle />
            <NextNProgress />
            <Navigation />
            <Component {...pageProps} />
         </ThemeProvider>
      </>
   );
}
