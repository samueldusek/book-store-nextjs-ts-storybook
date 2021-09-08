import { Fragment } from "react";

import type { NextPage } from "next";

import Head from "next/head";

import { GET_BOOK } from "../../queries/book";
import client from "../../apollo-client";
import MainBookCard from "../../components/cards/main-book-card/main-book-card";

type BookDetailPageProps = {
  book: {
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
};

const BookDetailPage: NextPage = ({ book }: any) => {
  const title = `${book.title} details`;
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <MainBookCard
        id={book.id}
        title={book.title}
        cover={book.cover}
        datePublished={book.datePublished}
        isbn={book.isbn}
        author={book.author}
        chapters={book.chapters}
      />
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
    query: GET_BOOK,
    variables: { id: id },
  });

  const { book } = data;

  return {
    props: {
      book: {
        id: book.id,
        title: book.title,
        cover: `/images/books/${id % 10}.png`,
        datePublished: book.date_published,
        isbn: book.isbn,
        author: book.author,
        chapters: book.chapters,
      },
    },
    revalidate: 60,
  };
}

export default BookDetailPage;
