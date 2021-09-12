import { Fragment } from "react";
import BookCard from "../../cards/book-card/book-card";
import useBookListStyles, { BookListClasses } from "./styles";

import { BookShort } from "../../../helpers/books";

export type BookListProps = {
  books?: BookShort[];
  maxBooks?: number;
  cols?: number;
  hasTitle?: boolean;
  listTitle?: string;
  isLoading?: boolean;
};

const BookList = ({
  books = [],
  maxBooks = books.length,
  hasTitle = false,
  listTitle = "",
  isLoading = false,
  ...props
}: BookListProps) => {
  const classes: BookListClasses = useBookListStyles({ ...props });

  const list = (
    <div className={classes.list}>
      {books.slice(0, maxBooks).map((book, idx) => (
        <BookCard
          key={`book-list-item-${idx}`}
          id={book.id}
          title={book.title}
          cover={book.cover}
          datePublished={book.datePublished}
          isbn={book.isbn}
          author={book.author}
          isLoading={isLoading}
        />
      ))}
    </div>
  );

  if (hasTitle) {
    return (
      <div>
        <h2>{listTitle}</h2>
        {list}
      </div>
    );
  }

  return <Fragment>{list}</Fragment>;
};

export default BookList;
