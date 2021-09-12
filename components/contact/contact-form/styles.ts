import { Classes, Styles } from "jss";
import { createUseStyles } from "react-jss";
import { ContactFormProps } from "./contact-form";

export type ContactFormClassNames =
  | "Form"
  | "contactControls"
  | "control"
  | "message";
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
    "& label": {
      display: "block",
    },
    "& button": {
      marginTop: "1rem",
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
    },
  },
  message: {
    width: "100%",
    marginTop: "1rem",
    "& textarea": {
      width: "100%",
    },
  },
};

const useContactFormStyles: (
  data?: any
) => ContactFormClasses = createUseStyles(getStyles);

export default useContactFormStyles;
