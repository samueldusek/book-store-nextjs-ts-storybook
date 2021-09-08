import { Fragment } from "react";
import useChapterListStyles from "./styles";

export type ChapterListProps = {
  chapters: {
    id?: string;
    title?: string;
  }[];
};

const ChapterList = ({ chapters }: ChapterListProps) => {
  const classes = useChapterListStyles();

  const chaptersList =
    chapters.length === 0 ? (
      <p>None</p>
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
