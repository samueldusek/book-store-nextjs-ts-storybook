import { Classes, Styles } from "jss";
import { createUseStyles } from "react-jss";
import { LayoutProps } from "./layout";

export type LayoutClassNames = "page";
export type LayoutClasses = Classes<LayoutClassNames>;
export type LayoutStylesProps = LayoutProps;
export type LayoutStyles = Styles<LayoutClassNames, LayoutStylesProps>;

const getStyles = {
  page: {
    flexGrow: "1",
    width: "96%",
    margin: "auto",
    maxWidth: "1200px",
  },
};

const useLayoutStyles: (data?: any) => LayoutClasses = createUseStyles(
  getStyles
);

export default useLayoutStyles;
