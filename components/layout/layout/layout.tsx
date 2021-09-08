import { Fragment } from "react";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import useLayoutStyles from "./styles";

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const classes = useLayoutStyles();
  return (
    <Fragment>
      <Navbar />
      {children}
      <Footer />
      <style global jsx>{`
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
