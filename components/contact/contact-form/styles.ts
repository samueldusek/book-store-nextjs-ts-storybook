import { Classes, Styles } from "jss";
import { createUseStyles } from "react-jss";
import { ContactFormProps } from "./contact-form";

export type ContactFormClassNames = "Form";
export type ContactFormClasses = Classes<ContactFormClassNames>;
export type ContactFormStylesProps = ContactFormProps;
export type ContactFormStyles = Styles<
  ContactFormClassNames,
  ContactFormStylesProps
>;

const getStyles = {
  Form: {
    width: "100%",
    maxWidth: "100px",
    "& a": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      transition: "all 0.4s 0s ease-in-out",
      cursor: "pointer",
      "&:hover": {
        transform: "scale(1.05)",
      },
    },
  },
};

const useContactFormStyles: (
  data?: any
) => ContactFormClasses = createUseStyles(getStyles);

export default useContactFormStyles;
