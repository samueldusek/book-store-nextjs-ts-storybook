import { Classes, Styles } from "jss";
import { createUseStyles } from "react-jss";
import { AuthorListProps } from "./author-list";

export type AuthorListClassNames = "list";
export type AuthorListClasses = Classes<AuthorListClassNames>;
export type AuthorListStylesProps = AuthorListProps;
export type AuthorListStyles = Styles<
  AuthorListClassNames,
  AuthorListStylesProps
>;

const getStyles: AuthorListStyles = {
  list: ({ cols = 2 }: AuthorListStylesProps) => ({
    display: "grid",
    gridTemplateColumns: "repeat(" + cols + ", 1fr)",
    gridAutoRows: "auto",
    columnGap: "1rem",
    rowGap: "1rem",
    maxWidth: "300px",
  }),
};

const useAuthorListStyles: (data?: any) => AuthorListClasses = createUseStyles(
  getStyles
);

export default useAuthorListStyles;
