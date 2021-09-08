import { Classes, Styles } from "jss";
import { createUseStyles } from "react-jss";
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

const getStyles: MainBookCardStyles = {
  MainCard: {
    "& h1": {
      fontSize: "3rem",
      margin: "1.5rem 0rem",
    },
    maxWidth: "800px",
  },
  bookContent: {
    display: "flex",
    flexDirection: "row",
    gap: "1.5rem",
  },
  imageBox: {
    flexGrow: "4",
    boxShadow: "-8px -8px 28px #d5d5d5, 8px 8px 28px #ffffff",
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
      },
    },
    "& footer": {
      "& h3, time": {
        display: "block",
        fontSize: "1.2rem",
        margin: "0rem",
        fontWeight: "bold",
      },
      "& h4": {
        margin: "1.2rem 0rem 0.5rem 0rem",
      },
    },
    "& header,footer": {
      "& h4": {
        fontSize: "1.2rem",
        color: "grey",
        margin: "0",
      },
    },
  },
};

const useMainBookCardStyles: (
  data?: any
) => MainBookCardClasses = createUseStyles(getStyles);

export default useMainBookCardStyles;
