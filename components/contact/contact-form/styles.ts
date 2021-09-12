import { Classes, Styles } from "jss";
import { createUseStyles } from "react-jss";
import { ContactFormProps } from "./contact-form";

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

const getStyles = {
  Form: {
    width: "100%",
    maxWidth: "600px",
    margin: "auto",
    "& label": {
      display: "block",
      marginBottom: "0.5rem",
      fontSize: "1.3rem",
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
      color: "grey",
      backgroundColor: "#f5f5f5",
      border: "none",
      borderRadius: "15px",
      boxShadow: "-3px -3px 14px #d5d5d5, 3px 3px 14px #ffffff",
      "&:hover": {
        cursor: "pointer",
        color: "black",
      },
      "& svg": {
        height: "1.3rem",
      },
    },
  },
  contactControls: {
    display: "grid",
    gridTemplateColumns: "repeat(2, auto)",
    gridColumnGap: "1rem",
  },
  control: {
    "& label": {
      width: "100%",
    },
    "& input": {
      width: "100%",
      border: "0px",
      borderBottom: "1px solid #d5d5d5",
      outline: "0",
      fontSize: "1rem",
    },
  },
  message: {
    width: "100%",
    marginTop: "1rem",
    "& textarea": {
      width: "100%",
      padding: "1rem",
      border: "none",
      borderRadius: "20px",
      boxShadow: "-3px -3px 14px #d5d5d5, 3px 3px 14px #ffffff",
      marginTop: "1rem",
      fontSize: "1rem",
      outline: "none",
      resize: "none",
    },
  },
  error: {
    color: "#9e2a2b",
    marginTop: "0.6rem",
    marginBottom: "0rem",
    display: "flex",
    alignItems: "center",
    "& svg": {
      height: "1.1rem",
      marginRight: "0.2rem",
    },
  },
};

const useContactFormStyles: (
  data?: any
) => ContactFormClasses = createUseStyles(getStyles);

export default useContactFormStyles;
