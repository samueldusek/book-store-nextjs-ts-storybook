import { Classes, Styles } from "jss";
import { createUseStyles } from "react-jss";
import { PaginationProps } from "./pagination";

export type PaginationClassNames = "Pagination";
export type PaginationClasses = Classes<PaginationClassNames>;
export type PaginationStylesProps = PaginationProps;
export type PaginationStyles = Styles<
  PaginationClassNames,
  PaginationStylesProps
>;

const getStyles: PaginationStyles = {
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
      backgroundColor: "#f5f5f5",
      color: "grey",
      boxShadow: "-4px -4px 20px #d5d5d5, 4px 4px 20px #fff",
      transition: "all 0.4s ease-in-out",
      "&:hover": {
        cursor: "pointer",
        color: "black",
      },
    },
    "& .active": {
      color: "black",
    },
  },
};

const usePaginationStyles: (data?: any) => PaginationClasses = createUseStyles(
  getStyles
);

export default usePaginationStyles;
