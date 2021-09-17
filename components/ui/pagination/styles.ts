import { Classes, Styles } from "jss";
import { createUseStyles } from "react-jss";
import { PaginationProps } from "./pagination";
import { CustomTheme } from "../../../helpers/theme";

export type PaginationClassNames = "Pagination";
export type PaginationClasses = Classes<PaginationClassNames>;
export type PaginationStylesProps = PaginationProps;
export type PaginationStyles = Styles<
  PaginationClassNames,
  PaginationStylesProps
>;

const getStyles: (theme: CustomTheme) => PaginationStyles = (theme) => ({
  Pagination: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    listStyleType: "none",
    padding: "0px",
    marginTop: "2rem",
    "& button": {
      width: "40px",
      height: "25px",
      margin: "0px 0.3rem",
      border: "none",
      borderRadius: "15px",
      backgroundColor: theme.background.color.secondary,
      color: theme.text.color.info,
      boxShadow: `-2px -2px 10px ${theme.shadow.color.secondary}, 2px 2px 10px ${theme.shadow.color.primary}`,
      transition: "all 0.4s ease-in-out",
      "&:hover": {
        cursor: "pointer",
        color: theme.text.color.primary,
      },
    },
    "& .active": {
      color: theme.text.color.primary,
    },
  },
});

const usePaginationStyles: (data?: any) => PaginationClasses = createUseStyles(
  getStyles
);

export default usePaginationStyles;
