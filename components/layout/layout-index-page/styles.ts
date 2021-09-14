import { Classes, Styles } from "jss";
import { createUseStyles } from "react-jss";
import { LayoutProps } from "./layout-index-page";

export type LayoutIndexPageClassNames = "layoutIndexPage";
export type LayoutIndexPageClasses = Classes<LayoutIndexPageClassNames>;
export type LayoutIndexPageStylesProps = LayoutProps;
export type LayoutIndexPageStyles = Styles<
  LayoutIndexPageClassNames,
  LayoutIndexPageStylesProps
>;

const getStyles = {
  layoutIndexPage: {
    flexGrow: "1",
    width: "96%",
    margin: "auto",
    maxWidth: "1200px",
    display: "grid",
    gridTemplateColumns: "70% 28%",
    gridColumnGap: "2%",
  },
};

const useLayoutIndexPageStyles: (
  data?: any
) => LayoutIndexPageClasses = createUseStyles(getStyles);

export default useLayoutIndexPageStyles;
