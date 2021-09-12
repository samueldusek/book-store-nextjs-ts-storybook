import React from "react";

import usePaginationStyles from "./styles";

export type PaginationProps = {
  maxPages: number;
  activePage: number;
  setPage: (page: number) => void;
};

function Pagination({ maxPages, activePage, setPage }: PaginationProps) {
  const classes = usePaginationStyles();
  const buttons = [];

  for (let idx = 1; idx <= maxPages; idx++) {
    buttons.push(
      <button
        key={idx}
        className={activePage === idx ? "active" : undefined}
        onClick={() => setPage(idx)}
      >
        {idx}
      </button>
    );
  }

  return <nav className={classes.Pagination}>{buttons}</nav>;
}

export default Pagination;
