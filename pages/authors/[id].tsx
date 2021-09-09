import type { NextPage } from "next";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { Fragment } from "react";

import { GET_AUTHOR } from "../../queries/author";
import client from "../../apollo-client";
import LayoutDetailPage from "../../components/layout/layout-detail-page/layout-detail-page";
import MainAuthorCard from "../../components/cards/main-author-card/main-author-card";
import BookList from "../../components/lists/book-list/book-list";
import { formatAuthor, Author } from "../../helpers/authors";

const AuthorDetailPage: NextPage<{ author: Author }> = ({ author }) => {
  const title = `${author.name} details`;
  const listTitle = `${author.name} books`;
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <LayoutDetailPage>
        <MainAuthorCard {...author} />
        <BookList
          books={author.books}
          cols={1}
          hasTitle={true}
          listTitle={listTitle}
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
    query: GET_AUTHOR,
    variables: { id: id },
  });

  const { author } = data;

  return {
    props: {
      author: formatAuthor(author),
    },
    revalidate: 60,
  };
};

export default AuthorDetailPage;
