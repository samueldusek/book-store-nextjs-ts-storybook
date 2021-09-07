import { Classes, Styles } from "jss";
import { createUseStyles } from "react-jss";
import { BookCardProps } from "./book-card";

export type BookCardClassNames =
  | "Card"
  | "imageBox"
  | "textBox"
  | "heading"
  | "author"
  | "footer"
  | "isbn"
  | "link";
export type BookCardClasses = Classes<BookCardClassNames>;
export type BookCardStylesProps = BookCardProps;
export type BookCardStyles = Styles<BookCardClassNames, BookCardStylesProps>;

const getStyles: BookCardStyles = {
  Card: {
    borderRadius: "52px",
    backgroundColor: "#f5f5f5",
    boxShadow: "-6px -6px 14px #d5d5d5, 6px 6px 14px #ffffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1.5rem",
    height: "100%",
    width: "100%",
    maxWidth: "500px",
    maxHeight: "250px",
  },
  imageBox: {
    height: "100%",
    width: "30%",
    borderRadius: "14px",
    boxShadow: "-4px -4px 14px #d5d5d5, 4px 4px 14px #ffffff",
    overflow: "hidden",
  },
  textBox: {
    width: "66%",
    marginLeft: "4%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  heading: {
    fontSize: "1.5rem",
    margin: "0px",
    marginBottom: "0.3rem",
  },
  author: {
    fontSize: "1.1rem",
    flexGrow: "1",
    color: "#A9A9A9",
    margin: "0px",
    textDecoration: "none",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  isbn: {
    margin: "0px",
    marginTop: "0.4rem",
    color: "#A9A9A9",
  },
  link: {
    fontSize: "1.2rem",
    textDecoration: "none",
    letterSpacing: "0.1rem",
    color: "grey",
    transition: "all 0.3s 0s ease-in-out",
    cursor: "pointer",
    "&:hover": {
      color: "black",
    },
  },
};

const useBookCardStyles: (data?: any) => BookCardClasses = createUseStyles(
  getStyles
);

export default useBookCardStyles;
