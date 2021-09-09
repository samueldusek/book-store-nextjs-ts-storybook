import { Fragment } from "react";
import AuthorCard from "../../cards/author-card/author-card";
import useAuthorListStyles, { AuthorListClasses } from "./styles";

import { AuthorShort } from "../../../helpers/authors";

export type AuthorListProps = {
  authors: AuthorShort[];
  maxAuthors?: number;
  cols?: number;
  hasTitle?: boolean;
  listTitle?: string;
  gridCols?: number;
};

const AuthorList = ({
  authors,
  maxAuthors = authors.length,
  hasTitle = false,
  listTitle = "",
  ...props
}: AuthorListProps) => {
  const classes: AuthorListClasses = useAuthorListStyles({ ...props });

  const list = (
    <div className={classes.list}>
      {authors.slice(0, maxAuthors).map((author) => (
        <AuthorCard
          key={author.id}
          id={author.id}
          name={author.name}
          photo={author.photo}
        />
      ))}
    </div>
  );

  if (hasTitle) {
    return (
      <div className={classes.listWrapper}>
        <h2>{listTitle}</h2>
        {list}
      </div>
    );
  }

  return <Fragment>{list}</Fragment>;
};

export default AuthorList;
