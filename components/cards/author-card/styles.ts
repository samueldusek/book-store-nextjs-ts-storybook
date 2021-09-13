import { Classes, Styles } from "jss";
import { createUseStyles } from "react-jss";
import { CustomTheme } from "../../../store/theme-context";
import { AuthorCardProps } from "./author-card";

export type AuthorCardClassNames = "Card" | "image" | "name";
export type AuthorCardClasses = Classes<AuthorCardClassNames>;
export type AuthorCardStylesProps = AuthorCardProps;
export type AuthorCardStyles = Styles<
  AuthorCardClassNames,
  AuthorCardStylesProps
>;

const getStyles: (theme: CustomTheme) => AuthorCardStyles = (theme) => ({
  Card: {
    width: "100%",
    maxWidth: "100px",
    minHeight: "120px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& a": {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      transition: "all 0.4s 0s ease-in-out",
      cursor: "pointer",
      color: theme.text.color.primary,
      "&:hover": {
        transform: "scale(1.05)",
      },
    },
  },
  image: {
    width: "90%",
    margin: "auto",
    borderRadius: "50%",
    overflow: "hidden",
    backgroundColor: theme.background.color.secondary,
    boxShadow: `-2px -2px 10px ${theme.shadow.color.primary}, 2px 2px 10px ${theme.shadow.color.secondary}`,
  },
  name: {
    marginTop: "0.3rem",
    fontSize: "0.9rem",
    textAlign: "center",
  },
});

const useAuthorCardStyles: (data?: any) => AuthorCardClasses = createUseStyles(
  getStyles
);

export default useAuthorCardStyles;
