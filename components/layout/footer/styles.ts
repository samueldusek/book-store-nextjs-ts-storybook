import { Classes, Styles } from "jss";
import { createUseStyles } from "react-jss";
import { FooterProps } from "./footer";
import { CustomTheme } from "../../../helpers/theme";

export type FooterClassNames = "Footer";
export type FooterClasses = Classes<FooterClassNames>;
export type FooterStylesProps = FooterProps;
export type FooterStyles = Styles<FooterClassNames, FooterStylesProps>;

const getStyles: (theme: CustomTheme) => FooterStyles = (theme) => ({
  Footer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.text.color.primary,
    "& a": {
      color: theme.text.color.secondary,
    },
    marginTop: "1rem",
  },
});

const useFooterStyles: (data?: any) => FooterClasses = createUseStyles(
  getStyles
);

export default useFooterStyles;
