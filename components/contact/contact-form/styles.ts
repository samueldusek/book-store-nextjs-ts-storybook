import { Classes, Styles } from "jss";
import { createUseStyles } from "react-jss";
import { ContactFormProps } from "./contact-form";
import { CustomTheme } from "../../../store/theme-context";
import { getSizeMedia } from "../../../helpers/utils";

export type ContactFormClassNames =
  | "Form"
  | "contactControls"
  | "control"
  | "message"
  | "error";
export type ContactFormClasses = Classes<ContactFormClassNames>;
export type ContactFormStylesProps = ContactFormProps;
export type ContactFormStyles = Styles<
  ContactFormClassNames,
  ContactFormStylesProps
>;

const getStyles: (theme: CustomTheme) => ContactFormStyles = (theme) => ({
  Form: {
    width: "100%",
    maxWidth: "600px",
    margin: "auto",
    "& label": {
      display: "block",
      marginBottom: "0.5rem",
      fontSize: "1.3rem",
      color: theme.text.color.primary,
    },
    "& button": {
      display: "flex",
      alignItems: "center",
      marginTop: "2rem",
      padding: "0.6rem",
      paddingLeft: "1rem",
      marginLeft: "auto",
      fontSize: "1.2rem",
      textTransform: "uppercase",
      letterSpacing: "0.1rem",
      color: theme.text.color.secondary,
      backgroundColor: theme.background.color.secondary,
      border: "none",
      borderRadius: "15px",
      boxShadow: `-3px -3px 14px ${theme.shadow.color.secondary}, 3px 3px 14px ${theme.shadow.color.primary}`,
      "&:hover": {
        cursor: "pointer",
        color: theme.text.color.primary,
      },
      "& svg": {
        height: "1.3rem",
      },
    },
    [getSizeMedia.down("xs")]: {
      padding: "0rem 2rem",
    },
  },
  contactControls: {
    display: "grid",
    gridTemplateColumns: "repeat(2, auto)",
    gridColumnGap: "1rem",
    [getSizeMedia.down("xs")]: {
      gridTemplateColumns: "repeat(1, auto)",
    },
  },
  control: {
    "& label": {
      width: "100%",
    },
    "& input": {
      width: "100%",
      border: "0px",
      color: theme.text.color.primary,
      backgroundColor: theme.background.color.primary,
      borderBottom: `1px solid ${theme.text.color.primary}`,
      outline: "0",
      fontSize: "1rem",
      [getSizeMedia.down("xs")]: {
        marginBottom: "1rem",
      },
    },
  },
  message: {
    width: "100%",
    marginTop: "1rem",
    "& textarea": {
      color: theme.text.color.primary,
      backgroundColor: theme.background.color.secondary,
      width: "100%",
      padding: "1rem",
      border: "none",
      borderRadius: "20px",
      boxShadow: `-3px -3px 14px ${theme.shadow.color.secondary}, 3px 3px 14px ${theme.shadow.color.primary}`,
      marginTop: "1rem",
      fontSize: "1rem",
      outline: "none",
      resize: "none",
    },
  },
  error: {
    color: theme.text.color.warning,
    marginTop: "0.6rem",
    marginBottom: "0rem",
    display: "flex",
    alignItems: "center",
    "& svg": {
      height: "1.1rem",
      marginRight: "0.2rem",
    },
  },
});

const useContactFormStyles: (
  data?: any
) => ContactFormClasses = createUseStyles(getStyles);

export default useContactFormStyles;
