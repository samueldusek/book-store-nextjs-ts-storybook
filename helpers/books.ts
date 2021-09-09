export type Book = {
  id: string;
  title: string;
  cover: string;
  datePublished: string;
  isbn: number;
  author: {
    id: string;
    name: string;
  };
  chapters: {
    id: string;
    title: string;
  }[];
};

export const formatBooks = (books: any): Book[] => {
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

export const formatBook = (book: any): Book => {
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
