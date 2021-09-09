import { useQuery } from "@apollo/client";

import { GET_ALL_AUTHORS } from "../../../queries/author";

import AuthorList from "../author-list/author-list";

import { getRandInteger } from "../../../helpers/utils";

import { formatAuthors } from "../../../helpers/authors";

type FetchedAuthorListProps = {
  isRandom?: boolean;
  page?: number;
  cols?: number;
  maxAuthors?: number;
  hasTitle?: boolean;
  listTitle?: string;
};

const FetchedAuthorList = ({
  isRandom = false,
  page = 1,
  ...props
}: FetchedAuthorListProps) => {
  const pageToLoad = isRandom ? getRandInteger(1, 5) : page;
  const { data, loading, error } = useQuery(GET_ALL_AUTHORS, {
    variables: { page: pageToLoad },
  });
  if (loading) return <p>Loading...</p>;
  const { authors } = data;
  const formattedAuthors = formatAuthors(authors);
  return <AuthorList authors={formattedAuthors} {...props} />;
};

export default FetchedAuthorList;
