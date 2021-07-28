import { ThemeProvider } from "next-themes";
import Page from "@/components/Page";
import { ProvideAuth } from "@/lib/auth";
import "@/styles/globals.css";


function MyApp({ Component, pageProps }) {
 
  return (
    <ThemeProvider attribute="class">
      <ProvideAuth>
        <Page>
          <Component {...pageProps} />
        </Page>
      </ProvideAuth>
    </ThemeProvider>
  );
}

export default MyApp;
