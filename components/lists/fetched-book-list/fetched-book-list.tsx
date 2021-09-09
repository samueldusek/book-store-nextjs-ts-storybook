import { useQuery } from "@apollo/client";

import { GET_ALL_BOOKS } from "../../../queries/book";

import BookList from "../book-list/book-list";

import { formatBooks } from "../../../helpers/books";

import { getRandInteger, shuffleArray } from "../../../helpers/utils";

type FetchedBookListProps = {
  isRandom?: boolean;
  page?: number;
  cols?: number;
  maxBooks?: number;
  hasTitle?: boolean;
  listTitle?: string;
};

const FetchedBookList = ({
  isRandom = false,
  page = 1,
  ...props
}: FetchedBookListProps) => {
  const pageToLoad = isRandom ? getRandInteger(1, 5) : page;

  const { data, loading, error } = useQuery(GET_ALL_BOOKS, {
    variables: { page: pageToLoad },
  });

  if (loading) return <p>Loading...</p>;

  const { books } = data;
  const formattedBooks = formatBooks(books);
  const booksToDisplay = isRandom
    ? shuffleArray(formattedBooks)
    : formattedBooks;

  return <BookList books={booksToDisplay} {...props} />;
};

export default FetchedBookList;
