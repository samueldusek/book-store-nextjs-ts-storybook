import { Fragment, useContext } from "react";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import useLayoutStyles from "./styles";
import { ApolloProvider } from "@apollo/client";
import client from "../../../apollo-client";
import { ThemeContext, CustomTheme } from "../../../store/theme-context";

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const themeCtx = useContext(ThemeContext);
  const classes = useLayoutStyles();
  const theme = themeCtx.theme;
  return (
    <Fragment>
      <Navbar />
      <ApolloProvider client={client}>{children}</ApolloProvider>
      <Footer />
      <style global jsx>{`
        body {
          background-color: ${theme.background.color.primary};
        }
        div#__next {
          height: 100%;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </Fragment>
  );
};

export default Layout;
