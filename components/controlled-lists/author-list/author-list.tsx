import { useState } from "react";

import FetchedAuthorList from "../../lists/fetched-author-list/fetched-author-list";
import Pagination from "../../ui/pagination/pagination";

const AuthorList = () => {
  const [page, setPage] = useState(1);
  const onSetPage = (page: number) => {
    setPage(page);
  };
  return (
    <div>
      <FetchedAuthorList
        isRandom={false}
        page={page}
        hasTitle={true}
        listTitle="Our authors"
      />
      <Pagination maxPages={5} activePage={page} setPage={onSetPage} />
    </div>
  );
};

export default AuthorList;
