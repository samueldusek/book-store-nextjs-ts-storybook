import { useQuery } from "@apollo/client";

import { GET_ALL_AUTHORS } from "../../../queries/author";

import AuthorList from "../author-list/author-list";

import { getRandInteger, shuffleArray } from "../../../helpers/utils";

import { formatAuthors } from "../../../helpers/authors";

type FetchedAuthorListProps = {
  isRandom?: boolean;
  page?: number;
  cols?: number;
  maxAuthors?: number;
  hasTitle?: boolean;
  listTitle?: string;
  gridCols?: number;
};

const FetchedAuthorList = ({
  isRandom = false,
  page = 1,
  maxAuthors = 10,
  ...props
}: FetchedAuthorListProps) => {
  const pageToLoad = isRandom ? getRandInteger(1, 5) : page;
  const { data, loading, error } = useQuery(GET_ALL_AUTHORS, {
    variables: { page: pageToLoad },
  });

  let authorsToDisplay = new Array(maxAuthors).fill(1);

  if (!loading && !error) {
    const { authors } = data;
    const formattedAuthors = formatAuthors(authors);
    authorsToDisplay = isRandom
      ? shuffleArray(formattedAuthors)
      : formattedAuthors;
  }

  return (
    <AuthorList
      authors={authorsToDisplay}
      maxAuthors={maxAuthors}
      isLoading={loading}
      {...props}
    />
  );
};

export default FetchedAuthorList;
