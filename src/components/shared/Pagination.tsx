import React, { FC } from 'react';
import ReactPaginate from 'react-paginate';

import style from './Pagination.module.scss';

interface IPagination {
  totalNumberOfPages: number;
  onPageChange: (selectedItem: { selected: number }) => void;
  page: number;
}

const Pagination: FC<IPagination> = ({ totalNumberOfPages, onPageChange, page }: IPagination) => (
  <ReactPaginate
    pageCount={totalNumberOfPages}
    pageRangeDisplayed={5}
    marginPagesDisplayed={0}
    onPageChange={onPageChange}
    activeClassName={style.activePage}
    containerClassName={`${style.paginationWrapper} ${style.flex}`}
    pageClassName={style.listStyle}
    previousClassName={style.listStyle}
    nextClassName={style.listStyle}
    pageLinkClassName={style.customLink}
    previousLinkClassName={style.customLink}
    nextLinkClassName={style.customLink}
    activeLinkClassName={style.customActiveLink}
    previousLabel={
      totalNumberOfPages > 1 ? (
        <span className={`${style.arrow} ${page === 0 && style.arrowDisabled}`}>Previous</span>
      ) : null
    }
    nextLabel={
      totalNumberOfPages > 1 ? (
        <span
          className={`
            ${style.arrow}
            ${page === totalNumberOfPages - 1 && style.arrowDisabled}
          `}>
          Next
        </span>
      ) : null
    }
  />
);

export default Pagination;
