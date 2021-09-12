import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import LayoutDetailPage from "../components/layout/layout-detail-page/layout-detail-page";
import FetchedAuthorList from "../components/lists/fetched-author-list/fetched-author-list";
import BookList from "../components/controlled-lists/book-list/book-list";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Book Store</title>
      </Head>
      <LayoutDetailPage>
        <BookList />
        <FetchedAuthorList hasTitle={true} listTitle="Our authors" />
      </LayoutDetailPage>
    </Fragment>
  );
};

export default Home;
