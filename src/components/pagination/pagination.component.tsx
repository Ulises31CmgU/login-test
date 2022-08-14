/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Pagination } from '@mui/material';
import React, { useMemo } from 'react';

function PaginationComponent(props:any) {
  const {
    totalDataCount,
    dataCountPerPage,
    handlePageChange,
    currentPage,
  } = props;

  const pageNumbers = useMemo(
    () => Math.ceil(totalDataCount / dataCountPerPage),
    [totalDataCount, dataCountPerPage],
  );

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    handlePageChange(value);
  };

  return (
    <Pagination
      shape="rounded"
      count={pageNumbers}
      page={currentPage}
      onChange={handleChange}
    />
  );
}

export default PaginationComponent;
