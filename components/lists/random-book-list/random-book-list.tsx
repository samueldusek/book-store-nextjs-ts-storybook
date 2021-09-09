import { useQuery } from "@apollo/client";

import { GET_ALL_BOOKS } from "../../../queries/book";

import BookList from "../book-list/book-list";

import { formatBooks } from "../../../helpers/books";

const RandomBookList = () => {
  const { data, loading, error } = useQuery(GET_ALL_BOOKS, {
    variables: { page: 1 },
  });
  if (loading) return <p>Loading...</p>;
  const { books } = data;
  const formattedBooks = formatBooks(books);
  return (
    <BookList
      books={formattedBooks}
      cols={1}
      maxBooks={4}
      hasTitle={true}
      listTitle="More books for you"
    />
  );
};

export default RandomBookList;
