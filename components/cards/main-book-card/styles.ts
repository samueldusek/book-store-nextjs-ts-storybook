import { Classes, Styles } from "jss";
import { createUseStyles } from "react-jss";
import { CustomTheme } from "../../../store/theme-context";
import { MainBookCardProps } from "./main-book-card";

export type MainBookCardClassNames =
  | "MainCard"
  | "bookContent"
  | "imageBox"
  | "textBox";
export type MainBookCardClasses = Classes<MainBookCardClassNames>;
export type MainBookCardStylesProps = MainBookCardProps;
export type MainBookCardStyles = Styles<
  MainBookCardClassNames,
  MainBookCardStylesProps
>;

const getStyles: (theme: CustomTheme) => MainBookCardStyles = (theme) => ({
  MainCard: {
    "& h1": {
      fontSize: "3rem",
      margin: "1.5rem 0rem",
      color: theme.text.color.primary,
    },
    maxWidth: "800px",
    width: "100%",
  },
  bookContent: {
    display: "flex",
    flexDirection: "row",
    gap: "1.5rem",
  },
  imageBox: {
    flexBasis: "65%",
    flexShrink: "0",
    boxShadow: `-8px -8px 28px ${theme.shadow.color.primary}, 8px 8px 28px ${theme.shadow.color.secondary}`,
    borderRadius: "20px",
    overflow: "hidden",
  },
  textBox: {
    flexGrow: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "& header": {
      "& h2": {
        fontSize: "1.6rem",
        margin: "0.4rem 0",
        color: theme.text.color.primary,
      },
    },
    "& footer": {
      "& h3, time": {
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
        color: theme.text.color.info,
        fontSize: "1.2rem",
        margin: "0",
      },
    },
  },
});

const useMainBookCardStyles: (
  data?: any
) => MainBookCardClasses = createUseStyles(getStyles);

export default useMainBookCardStyles;
