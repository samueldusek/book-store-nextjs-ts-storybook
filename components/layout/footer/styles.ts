import { Classes, Styles } from "jss";
import { createUseStyles } from "react-jss";
import { FooterProps } from "./footer";

export type FooterClassNames = "Footer";
export type FooterClasses = Classes<FooterClassNames>;
export type FooterStylesProps = FooterProps;
export type FooterStyles = Styles<FooterClassNames, FooterStylesProps>;

const getStyles = {
  Footer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& a": {
      color: "grey",
    },
  },
};

const useFooterStyles: (data?: any) => FooterClasses = createUseStyles(
  getStyles
);

export default useFooterStyles;