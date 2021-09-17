import { Classes, Styles } from "jss";
import { createUseStyles } from "react-jss";
import { AuthorListProps } from "./author-list";
import { CustomTheme } from "../../../helpers/theme";

export type AuthorListClassNames = "list" | "listWrapper";
export type AuthorListClasses = Classes<AuthorListClassNames>;
export type AuthorListStylesProps = AuthorListProps;
export type AuthorListStyles = Styles<
  AuthorListClassNames,
  AuthorListStylesProps
>;

const getStyles: (theme: CustomTheme) => AuthorListStyles = (theme) => ({
  list: ({ cols = 2, gridCols = 1 }: AuthorListStylesProps) => ({
    gridColumnStart: "span " + gridCols,
    display: "grid",
    gridTemplateColumns: "repeat(" + cols + ", 1fr)",
    justifyItems: "center",
    gridGap: "1rem",
    height: "min-content",
  }),
  listWrapper: ({ gridCols = 1 }: AuthorListStylesProps) => ({
    gridColumnStart: "span " + gridCols,
    "& h2": {
      color: theme.text.color.primary,
    },
  }),
});

const useAuthorListStyles: (data?: any) => AuthorListClasses = createUseStyles(
  getStyles
);

export default useAuthorListStyles;
