import { Classes, Styles } from "jss";
import { createUseStyles } from "react-jss";
import { BookCardProps } from "./book-card";
import { CustomTheme } from "../../../helpers/theme";

export type BookCardClassNames = "Card" | "imageBox" | "textBox";
export type BookCardClasses = Classes<BookCardClassNames>;
export type BookCardStylesProps = BookCardProps;
export type BookCardStyles = Styles<BookCardClassNames, BookCardStylesProps>;

const getStyles: (theme: CustomTheme) => BookCardStyles = (theme) => ({
  Card: {
    borderRadius: "52px",
    backgroundColor: theme.background.color.secondary,
    boxShadow: `-6px -6px 14px ${theme.shadow.color.primary}, 6px 6px 14px ${theme.shadow.color.secondary}`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1.5rem",
    height: "100%",
    width: "100%",
    maxWidth: "500px",
    maxHeight: "250px",
    minWidth: "345px",
  },
  imageBox: {
    height: "100%",
    width: "30%",
    borderRadius: "14px",
    boxShadow: `-4px -4px 14px ${theme.shadow.color.primary}, 4px 4px 14px ${theme.shadow.color.secondary}`,
    overflow: "hidden",
  },
  textBox: {
    height: "100%",
    width: "66%",
    marginLeft: "4%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "& header": {
      "& h3": {
        fontSize: "1.1rem",
        color: theme.text.color.primary,
        margin: "0px",
        marginBottom: "0.3rem",
      },
      "& h5": {
        fontSize: "1rem",
        color: theme.text.color.secondary,
        margin: "0px",
        textDecoration: "none",
      },
    },
    "& footer": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      "& time": {
        color: theme.text.color.primary,
      },
      "& p": {
        color: theme.text.color.info,
        margin: "0px",
        marginTop: "0.4rem",
      },
      "& a": {
        fontSize: "1.1rem",
        textDecoration: "none",
        letterSpacing: "0.1rem",
        color: theme.text.color.secondary,
        transition: "all 0.3s 0s ease-in-out",
        cursor: "pointer",
        "&:hover": {
          color: theme.text.color.primary,
        },
      },
    },
  },
});

const useBookCardStyles: (data?: any) => BookCardClasses = createUseStyles(
  getStyles
);

export default useBookCardStyles;
