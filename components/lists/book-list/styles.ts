import { Classes, Styles } from "jss";
import { createUseStyles } from "react-jss";
import { BookListProps } from "./book-list";

export type BookListClassNames = "list";
export type BookListClasses = Classes<BookListClassNames>;
export type BookListStylesProps = BookListProps;
export type BookListStyles = Styles<BookListClassNames, BookListStylesProps>;

const getStyles: BookListStyles = {
  list: ({ cols = 2 }: BookListStylesProps) => ({
    display: "grid",
    gridTemplateColumns: "repeat(" + cols + ", 1fr)",
    gridAutoRows: "auto",
    columnGap: "1.5rem",
    justifyItems: "center",
    rowGap: "1.5rem",
    maxWidth: "1000px",
    height: "min-content",
    "& h2": {
      fontSize: "2rem",
      marginTop: "1rem",
      marginBottom: "0rem",
    },
  }),
};

const useBookListStyles: (data?: any) => BookListClasses = createUseStyles(
  getStyles
);

export default useBookListStyles;
