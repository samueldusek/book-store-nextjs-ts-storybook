import { Classes, Styles } from "jss";
import { createUseStyles } from "react-jss";
import { BookListProps } from "./book-list";
import { CustomTheme } from "../../../store/theme-context";

export type BookListClassNames = "list" | "title";
export type BookListClasses = Classes<BookListClassNames>;
export type BookListStylesProps = BookListProps;
export type BookListStyles = Styles<BookListClassNames, BookListStylesProps>;

const getStyles: (theme: CustomTheme) => BookListStyles = (theme) => ({
  list: ({ cols = 2 }: BookListStylesProps) => ({
    display: "grid",
    gridTemplateColumns: "repeat(" + cols + ", 1fr)",
    gridAutoRows: "minmax(180px,auto)",
    columnGap: "1.5rem",
    justifyItems: "center",
    rowGap: "1.5rem",
    maxWidth: "1000px",
    height: "min-content",
  }),
  title: {
    color: theme.text.color.primary,
  },
});

const useBookListStyles: (data?: any) => BookListClasses = createUseStyles(
  getStyles
);

export default useBookListStyles;
