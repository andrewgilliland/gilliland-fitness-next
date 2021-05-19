import { ThemeProvider } from "next-themes";
import Page from "../components/Page";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Page>
        <Component {...pageProps} />
      </Page>
    </ThemeProvider>
  );
}

export default MyApp;
