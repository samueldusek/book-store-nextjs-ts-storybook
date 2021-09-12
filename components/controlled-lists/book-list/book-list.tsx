import { useState } from "react";

import FetchedBookList from "../../lists/fetched-book-list/fetched-book-list";
import Pagination from "../../ui/pagination/pagination";

const BookList = () => {
  const [page, setPage] = useState(1);
  const onSetPage = (page: number) => {
    setPage(page);
  };
  return (
    <div>
      <FetchedBookList
        isRandom={false}
        page={page}
        hasTitle={true}
        listTitle="Discover all our books"
        maxBooks={10}
      />
      <Pagination maxPages={5} activePage={page} setPage={onSetPage} />
    </div>
  );
};

export default BookList;
