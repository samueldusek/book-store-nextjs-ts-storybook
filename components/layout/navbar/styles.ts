import { Classes, Styles } from "jss";
import { createUseStyles } from "react-jss";
import { NavbarProps } from "./navbar";
import { CustomTheme } from "../../../helpers/theme";
import { getSizeMedia } from "../../../helpers/utils";

export type NavbarClassNames = "Navbar" | "smallNavbar";
export type NavbarClasses = Classes<NavbarClassNames>;
export type NavbarStylesProps = NavbarProps;
export type NavbarStyles = Styles<NavbarClassNames, NavbarStylesProps>;

const getStyles: (theme: CustomTheme) => NavbarStyles = (theme) => ({
  Navbar: {
    width: "98%",
    margin: "auto",
    marginBottom: "1rem",
    maxWidth: "1400px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& h2": {
      color: theme.text.color.primary,
      textTransform: "uppercase",
      letterSpacing: "0.1rem",
    },
    "& a": {
      marginLeft: "1.5rem",
      color: theme.text.color.info,
      letterSpacing: "0.1rem",
      textDecoration: "none",
      transition: "all 0.4s 0s ease-in-out",
      "&:hover": {
        color: theme.text.color.primary,
      },
    },
    "& .active": {
      color: theme.text.color.primary,
    },
    "& nav": {
      [getSizeMedia.down("xs")]: {
        display: "none",
      },
    },
  },
  smallNavbar: {
    display: "none",
    [getSizeMedia.down("xs")]: {
      display: "block",
    },
  },
});

const useNavbarStyles: (data?: any) => NavbarClasses = createUseStyles(
  getStyles
);

export default useNavbarStyles;
