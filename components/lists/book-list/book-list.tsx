import BookCard from "../../cards/book-card/book-card";
import useBookListStyles, { BookListClasses } from "./styles";

export type BookListProps = {
  books: any[];
  maxBooks?: number;
  cols?: number;
};

const BookList = ({
  books,
  maxBooks = books.length,
  ...props
}: BookListProps) => {
  const classes: BookListClasses = useBookListStyles({ ...props });
  return (
    <div className={classes.list}>
      {books.slice(0, maxBooks).map((book) => (
        <BookCard
          key={book.id}
          id={book.id}
          title={book.title}
          cover={book.cover}
          datePublished={book.datePublished}
          isbn={book.isbn}
          author={book.author}
        />
      ))}
    </div>
  );
};

export default BookList;
