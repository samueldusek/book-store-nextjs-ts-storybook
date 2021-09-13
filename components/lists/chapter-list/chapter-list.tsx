import { Fragment } from "react";
import useChapterListStyles from "./styles";
import { useTheme } from "../../../store/theme-context";

export type ChapterListProps = {
  chapters: {
    id?: string;
    title?: string;
  }[];
};

const ChapterList = ({ chapters }: ChapterListProps) => {
  const { theme } = useTheme();
  const classes = useChapterListStyles({ theme });

  const chaptersList =
    chapters.length === 0 ? (
      <p className={classes.none}>None</p>
    ) : (
      <ul className={classes.list}>
        {chapters.map((chapter) => (
          <li key={chapter.id}>{chapter.title}</li>
        ))}
      </ul>
    );

  return <Fragment>{chaptersList}</Fragment>;
};

export default ChapterList;
