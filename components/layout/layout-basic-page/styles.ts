import { Classes, Styles } from "jss";
import { createUseStyles } from "react-jss";
import { LayoutProps } from "./layout-basic-page";

export type LayoutBasicPageClassNames = "layoutBasicPage";
export type LayoutBasicPageClasses = Classes<LayoutBasicPageClassNames>;
export type LayoutBasicPageStylesProps = LayoutProps;
export type LayoutBasicPageStyles = Styles<
  LayoutBasicPageClassNames,
  LayoutBasicPageStylesProps
>;

const getStyles = {
  layoutBasicPage: {
    flexGrow: "1",
    width: "96%",
    margin: "auto",
    maxWidth: "1200px",
  },
};

const useLayoutBasicPageStyles: (
  data?: any
) => LayoutBasicPageClasses = createUseStyles(getStyles);

export default useLayoutBasicPageStyles;
