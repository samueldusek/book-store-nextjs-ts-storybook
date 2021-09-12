import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/layout/layout";
import { MyThemeProvider } from "../store/theme-context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MyThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MyThemeProvider>
  );
}
export default MyApp;
