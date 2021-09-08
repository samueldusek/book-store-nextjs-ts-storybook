import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";

import { GET_AUTHOR } from "../../queries/author";
import client from "../../apollo-client";
import MainAuthorCard from "../../components/cards/main-author-card/main-author-card";
import BookList from "../../components/lists/book-list/book-list";

const AuthorDetailPage: NextPage = ({ author }: any) => {
  const title = `${author.name} details`;
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <MainAuthorCard {...author} />
      <BookList books={author.books} cols={1} />
    </Fragment>
  );
};

export async function getStaticPaths() {
  const paths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => {
    return {
      params: {
        id: `${num}`,
      },
    };
  });
  return {
    fallback: "blocking",
    paths: paths,
  };
}

export async function getStaticProps(context: any) {
  const { id } = context.params;

  const { data } = await client.query({
    query: GET_AUTHOR,
    variables: { id: id },
  });

  const { author } = data;

  return {
    props: {
      author: {
        id: author.id,
        name: author.name,
        photo: `/images/authors/${id % 10}.svg`,
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
      },
    },
    revalidate: 60,
  };
}

export default AuthorDetailPage;
