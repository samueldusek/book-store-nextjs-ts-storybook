import AuthorCard from "../../cards/author-card/author-card";
import useAuthorListStyles, { AuthorListClasses } from "./styles";

export type AuthorListProps = {
  authors: any[];
  maxAuthors?: number;
  cols?: number;
};

const AuthorList = ({
  authors,
  maxAuthors = authors.length,
  ...props
}: AuthorListProps) => {
  const classes: AuthorListClasses = useAuthorListStyles({ ...props });
  return (
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
};

export default AuthorList;
