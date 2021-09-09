import { Classes, Styles } from "jss";
import { createUseStyles } from "react-jss";
import { AuthorListProps } from "./author-list";

export type AuthorListClassNames = "list" | "listWrapper";
export type AuthorListClasses = Classes<AuthorListClassNames>;
export type AuthorListStylesProps = AuthorListProps;
export type AuthorListStyles = Styles<
  AuthorListClassNames,
  AuthorListStylesProps
>;

const getStyles: AuthorListStyles = {
  list: ({ cols = 2 }: AuthorListStylesProps) => ({
    gridColumnStart: "span 2",
    display: "grid",
    gridTemplateColumns: "repeat(" + cols + ", 1fr)",
    justifyItems: "center",
    gridGap: "1rem",
    height: "min-content",
  }),
  listWrapper: {
    gridColumnStart: "span 2",
  },
};

const useAuthorListStyles: (data?: any) => AuthorListClasses = createUseStyles(
  getStyles
);

export default useAuthorListStyles;
