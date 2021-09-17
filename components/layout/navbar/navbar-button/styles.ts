import { Classes, Styles } from "jss";
import { createUseStyles } from "react-jss";
import { NavbarButtonProps } from "./navbar-button";
import { CustomTheme } from "../../../../helpers/theme";
import { getSizeMedia } from "../../../../helpers/utils";

export type NavbarButtonClassNames = "NavbarButton";
export type NavbarButtonClasses = Classes<NavbarButtonClassNames>;
export type NavbarButtonStylesProps = NavbarButtonProps;
export type NavbarButtonStyles = Styles<
  NavbarButtonClassNames,
  NavbarButtonStylesProps
>;

const getStyles: (theme: CustomTheme) => NavbarButtonStyles = (theme) => ({
  NavbarButton: {
    backgroundColor: "transparent",
    border: "none",
    display: "none",
    "&:hover": {
      cursor: "pointer",
    },
    "& svg": {
      width: "30px",
      height: "30px",
      color: theme.text.color.secondary,
      "&:hover": {
        color: theme.text.color.primary,
      },
    },
    [getSizeMedia.down("xs")]: {
      display: "block",
    },
  },
});

const useNavbarButtonStyles: (
  data?: any
) => NavbarButtonClasses = createUseStyles(getStyles);

export default useNavbarButtonStyles;
