import { Fragment, useContext } from "react";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import useLayoutStyles from "./styles";
import { ApolloProvider } from "@apollo/client";
import client from "../../../apollo-client";
import { useTheme } from "../../../store/theme-context";

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const classes = useLayoutStyles();
  const { theme } = useTheme();
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
