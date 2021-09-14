import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import LayoutIndexPage from "../components/layout/layout-index-page/layout-index-page";
import AuthorList from "../components/controlled-lists/author-list/author-list";
import BookList from "../components/controlled-lists/book-list/book-list";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Book Store</title>
      </Head>
      <LayoutIndexPage>
        <BookList />
        <AuthorList />
      </LayoutIndexPage>
    </Fragment>
  );
};

export default Home;
