import { useQuery } from "@apollo/client";

import { GET_ALL_AUTHORS } from "../../../queries/author";

import AuthorList from "../author-list/author-list";

import { getRandInteger } from "../../../helpers/utils";

import { formatAuthors } from "../../../helpers/authors";

const RandomAuthorList = () => {
  const { data, loading, error } = useQuery(GET_ALL_AUTHORS, {
    variables: { page: getRandInteger(1, 5) },
  });
  if (loading) return <p>Loading...</p>;
  const { authors } = data;
  const formattedAuthors = formatAuthors(authors);
  return <AuthorList authors={formattedAuthors} cols={5} />;
};

export default RandomAuthorList;
