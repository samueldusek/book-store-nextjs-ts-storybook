import { Classes, Styles } from "jss";
import { createUseStyles } from "react-jss";
import { CustomTheme } from "../../../../store/theme-context";
import { ErrorMsgProps } from "./error-message";

export type ErrorMsgClassNames = "error";
export type ErrorMsgClasses = Classes<ErrorMsgClassNames>;
export type ErrorMsgStylesProps = ErrorMsgProps;
export type ErrorMsgStyles = Styles<ErrorMsgClassNames, ErrorMsgStylesProps>;

const getStyles: (theme: CustomTheme) => ErrorMsgStyles = (theme) => ({
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

const useErrorMsgStyles: (data?: any) => ErrorMsgClasses = createUseStyles(
  getStyles
);

export default useErrorMsgStyles;
