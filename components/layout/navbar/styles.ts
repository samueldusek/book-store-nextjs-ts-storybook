import { Classes, Styles } from "jss";
import { createUseStyles } from "react-jss";
import { NavbarProps } from "./navbar";

export type NavbarClassNames = "Navbar";
export type NavbarClasses = Classes<NavbarClassNames>;
export type NavbarStylesProps = NavbarProps;
export type NavbarStyles = Styles<NavbarClassNames, NavbarStylesProps>;

const getStyles = {
  Navbar: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& h2": {
      textTransform: "uppercase",
      letterSpacing: "0.1rem",
    },
    "& a": {
      color: "grey",
      letterSpacing: "0.1rem",
      textDecoration: "none",
      transition: "all 0.4s 0s ease-in-out",
      "&:hover": {
        color: "black",
      },
    },
  },
};

const useNavbarStyles: (data?: any) => NavbarClasses = createUseStyles(
  getStyles
);

export default useNavbarStyles;
