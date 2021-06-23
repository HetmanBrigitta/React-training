import React, { FC } from 'react';
import ReactPaginate from 'react-paginate';

import style from './Pagination.module.scss';

interface IPagination {
  totalNumberOfPages: number;
  size: number;
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
    containerClassName={style.paginationWrapper}
    previousLabel={
      totalNumberOfPages !== 1 ? (
        <span className={`${style.arrow} ${page === 0 && style.arrowDisabled}`}>Previous</span>
      ) : null
    }
    nextLabel={
      totalNumberOfPages !== 1 ? (
        // TODO B: Check why totalNumberOfPages is 0
        <span
          className={`
            ${style.arrow}
            ${page === totalNumberOfPages && console.log(totalNumberOfPages) && style.arrowDisabled}
          `}>
          Next
        </span>
      ) : null
    }
  />
);

export default Pagination;
