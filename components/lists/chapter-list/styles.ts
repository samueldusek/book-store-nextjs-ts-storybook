import { Classes, Styles } from "jss";
import { createUseStyles } from "react-jss";
import { CustomTheme } from "../../../store/theme-context";
import { ChapterListProps } from "./chapter-list";

export type ChapterListClassNames = "list" | "none";
export type ChapterListClasses = Classes<ChapterListClassNames>;
export type ChapterListStylesProps = ChapterListProps;
export type ChapterListStyles = Styles<
  ChapterListClassNames,
  ChapterListStylesProps
>;

const getStyles: (theme: CustomTheme) => ChapterListStyles = (theme) => ({
  list: {
    "& li": {
      color: theme.text.color.primary,
    },
  },
  none: {
    color: theme.text.color.primary,
  },
});

const useChapterListStyles: (
  data?: any
) => ChapterListClasses = createUseStyles(getStyles);

export default useChapterListStyles;
