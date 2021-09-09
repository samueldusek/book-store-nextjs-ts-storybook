import { Classes, Styles } from "jss";
import { createUseStyles } from "react-jss";
import { LayoutProps } from "./layout-detail-page";

export type LayoutDetailPageClassNames = "layoutDetailPage";
export type LayoutDetailPageClasses = Classes<LayoutDetailPageClassNames>;
export type LayoutDetailPageStylesProps = LayoutProps;
export type LayoutDetailPageStyles = Styles<
  LayoutDetailPageClassNames,
  LayoutDetailPageStylesProps
>;

const getStyles = {
  layoutDetailPage: {
    flexGrow: "1",
    width: "96%",
    margin: "auto",
    maxWidth: "1200px",
    display: "grid",
    gridTemplateColumns: "68% 30%",
    gridColumnGap: "2%",
  },
};

const useLayoutDetailPageStyles: (
  data?: any
) => LayoutDetailPageClasses = createUseStyles(getStyles);

export default useLayoutDetailPageStyles;
