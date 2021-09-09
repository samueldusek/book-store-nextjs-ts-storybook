export type AuthorShort = {
  id: string;
  name: string;
  photo: string;
};

export type Author = AuthorShort & {
  birthplace: string;
  dateOfBirth: string;
  dateOfDeath: string;
  books: {
    id: string;
    title: string;
    cover: string;
    datePublished: string;
    isbn: number;
    author: {
      id: string;
      name: string;
    };
  }[];
};

export const formatAuthor = (author: any): Author => {
  return {
    id: author.id,
    name: author.name,
    photo: `/images/authors/${(author.id % 10) + 1}.svg`,
    birthplace: author.birthplace,
    dateOfBirth: author.date_of_birth,
    dateOfDeath: author.date_of_death,
    books: author.books.map((book: any) => {
      return {
        id: book.id,
        title: book.title,
        cover: `/images/books/${(book.id % 10) + 1}.png`,
        author: {
          id: author.id,
          name: author.name,
        },
        datePublished: book.date_published,
        isbn: book.isbn,
      };
    }),
  };
};

export const formatAuthors = (authors: any[]): AuthorShort[] => {
  return authors.map((author) => {
    return {
      id: author.id,
      name: author.name,
      photo: `/images/authors/${(author.id % 10) + 1}.svg`,
    };
  });
};
