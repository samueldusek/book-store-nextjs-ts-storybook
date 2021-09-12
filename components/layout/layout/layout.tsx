import { Fragment } from "react";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import useLayoutStyles from "./styles";
import { ApolloProvider } from "@apollo/client";
import client from "../../../apollo-client";
import { MyThemeProvider } from "../../../store/theme-context";

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const classes = useLayoutStyles();
  return (
    <Fragment>
      <MyThemeProvider>
        <Navbar />
        <ApolloProvider client={client}>{children}</ApolloProvider>
        <Footer />
        <style global jsx>{`
          div#__next {
            height: 100%;
            display: flex;
            flex-direction: column;
          }
        `}</style>
      </MyThemeProvider>
    </Fragment>
  );
};

export default Layout;
