import { Classes, Styles } from "jss";
import { createUseStyles } from "react-jss";
import { MainAuthorCardProps } from "./main-author-card";
import { CustomTheme } from "../../../store/theme-context";

export type MainAuthorCardClassNames =
  | "MainCard"
  | "authorContent"
  | "imageBox"
  | "textBox";
export type MainAuthorCardClasses = Classes<MainAuthorCardClassNames>;
export type MainAuthorCardStylesProps = MainAuthorCardProps;
export type MainAuthorCardStyles = Styles<
  MainAuthorCardClassNames,
  MainAuthorCardStylesProps
>;

const getStyles: (theme: CustomTheme) => MainAuthorCardStyles = (theme) => ({
  MainCard: {
    "& h1": {
      fontSize: "3rem",
      margin: "0rem",
      marginBottom: "1.5rem",
      color: theme.text.color.primary,
    },
    maxWidth: "800px",
    width: "100%",
  },
  authorContent: {
    display: "flex",
    flexDirection: "row",
    gap: "2%",
  },
  imageBox: {
    flexBasis: "60%",
    "& img": {
      filter: `drop-shadow(2px 2px 10px ${theme.shadow.color.primary})`,
    },
  },
  textBox: {
    flexBasis: "38%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "& header": {
      "& h3": {
        fontSize: "1.6rem",
        margin: "0.4rem 0",
        color: theme.text.color.primary,
      },
    },
    "& footer": {
      "& time": {
        display: "block",
        fontSize: "1.2rem",
        margin: "0rem",
        fontWeight: "bold",
        color: theme.text.color.primary,
      },
      "& h4": {
        margin: "1.2rem 0rem 0.5rem 0rem",
      },
    },
    "& header,footer": {
      "& h4": {
        fontSize: "1.2rem",
        color: theme.text.color.info,
        margin: "0",
      },
    },
  },
});

const useMainAuthorCardStyles: (
  data?: any
) => MainAuthorCardClasses = createUseStyles(getStyles);

export default useMainAuthorCardStyles;
