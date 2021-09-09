import { Fragment } from "react";

import type { NextPage } from "next";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

import Head from "next/head";
import LayoutDetailPage from "../../components/layout/layout-detail-page/layout-detail-page";

import { GET_BOOK } from "../../queries/book";
import client from "../../apollo-client";
import MainBookCard from "../../components/cards/main-book-card/main-book-card";
import RandomBookList from "../../components/lists/random-book-list/random-book-list";
import { formatBook } from "../../helpers/books";

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
      <LayoutDetailPage>
        <MainBookCard {...book} />
        <RandomBookList />
      </LayoutDetailPage>
    </Fragment>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
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
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params!;

  const { data } = await client.query({
    query: GET_BOOK,
    variables: { id: id },
  });

  const { book } = data;

  const formattedBook = formatBook(book);

  return {
    props: {
      book: formattedBook,
    },
    revalidate: 60,
  };
};

export default BookDetailPage;
