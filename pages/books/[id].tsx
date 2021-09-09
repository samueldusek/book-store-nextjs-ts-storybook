import { Fragment } from "react";

import type { NextPage } from "next";
import { GetStaticProps, GetStaticPaths } from "next";

import Head from "next/head";
import LayoutDetailPage from "../../components/layout/layout-detail-page/layout-detail-page";

import { GET_BOOK } from "../../queries/book";
import client from "../../apollo-client";
import MainBookCard from "../../components/cards/main-book-card/main-book-card";
import FetchedBookList from "../../components/lists/fetched-book-list/fetched-book-list";
import { formatBook, Book } from "../../helpers/books";

const BookDetailPage: NextPage<{ book: Book }> = ({ book }) => {
  const title = `${book.title} details`;
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <LayoutDetailPage>
        <MainBookCard {...book} />
        <FetchedBookList
          isRandom={true}
          hasTitle={true}
          listTitle="More books for you"
          cols={1}
          maxBooks={4}
        />
      </LayoutDetailPage>
    </Fragment>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
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

  return {
    props: {
      book: formatBook(book),
    },
    revalidate: 60,
  };
};

export default BookDetailPage;
