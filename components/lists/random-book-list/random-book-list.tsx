import { useQuery } from "@apollo/client";

import { GET_ALL_BOOKS } from "../../../queries/book";

import BookList from "../book-list/book-list";

import { formatBooks } from "../../../helpers/books";

import { getRandInteger, shuffleArray } from "../../../helpers/utils";

const RandomBookList = () => {
  const { data, loading, error } = useQuery(GET_ALL_BOOKS, {
    variables: { page: getRandInteger(1, 5) },
  });
  if (loading) return <p>Loading...</p>;
  const { books } = data;
  const formattedBooks = formatBooks(books);
  const shuffledBooks = shuffleArray(formattedBooks);
  return (
    <BookList
      books={shuffledBooks}
      cols={1}
      maxBooks={4}
      hasTitle={true}
      listTitle="More books for you"
    />
  );
};

export default RandomBookList;
