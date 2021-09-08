import { Classes, Styles } from "jss";
import { createUseStyles } from "react-jss";
import { MainAuthorCardProps } from "./main-author-card";

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

const getStyles: MainAuthorCardStyles = {
  MainCard: {
    "& h1": {
      fontSize: "3rem",
      margin: "1.5rem 0rem",
    },
    maxWidth: "800px",
  },
  authorContent: {
    display: "flex",
    flexDirection: "row",
    gap: "1.5rem",
  },
  imageBox: {
    flexGrow: "4",
    overflow: "hidden",
    "& img": {
      filter: "drop-shadow(10px 10px 10px grey)",
    },
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

const useMainAuthorCardStyles: (
  data?: any
) => MainAuthorCardClasses = createUseStyles(getStyles);

export default useMainAuthorCardStyles;
