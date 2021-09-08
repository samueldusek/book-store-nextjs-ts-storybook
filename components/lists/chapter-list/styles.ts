import { Classes, Styles } from "jss";
import { createUseStyles } from "react-jss";
import { ChapterListProps } from "./chapter-list";

export type ChapterListClassNames = "list";
export type ChapterListClasses = Classes<ChapterListClassNames>;
export type ChapterListStylesProps = ChapterListProps;
export type ChapterListStyles = Styles<
  ChapterListClassNames,
  ChapterListStylesProps
>;

const getStyles: ChapterListStyles = {
  list: {},
};

const useChapterListStyles: (
  data?: any
) => ChapterListClasses = createUseStyles(getStyles);

export default useChapterListStyles;
