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
  maxBooks,
  ...props
}: FetchedBookListProps) => {
  const pageToLoad = isRandom ? getRandInteger(1, 5) : page;

  const { data, loading, error } = useQuery(GET_ALL_BOOKS, {
    variables: { page: pageToLoad },
  });

  let booksToDisplay = new Array(maxBooks).fill(1);

  if (!loading && !error) {
    const { books } = data;
    const formattedBooks = formatBooks(books);
    booksToDisplay = isRandom ? shuffleArray(formattedBooks) : formattedBooks;
  }

  return <BookList books={booksToDisplay} isLoading={loading} {...props} />;
};

export default FetchedBookList;
