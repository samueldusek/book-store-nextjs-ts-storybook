export const formatBooks = (books: any) => {
  return books.map((book: any) => {
    return {
      id: book.id,
      title: book.title,
      cover: `/images/books/${(book.id % 10) + 1}.png`,
      datePublished: book.date_published,
      isbn: book.isbn,
      author: book.author,
      chapters: book.chapters,
    };
  });
};

export const formatBook = (book: any) => {
  return {
    id: book.id,
    title: book.title,
    cover: `/images/books/${(book.id % 10) + 1}.png`,
    datePublished: book.date_published,
    isbn: book.isbn,
    author: book.author,
    chapters: book.chapters,
  };
};
