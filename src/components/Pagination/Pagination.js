import React from 'react';

const Pagination = ({ currentPage, pageSize, onPageChange, onPageSizeChange, totalItems }) => {
  const totalPages = Math.ceil(totalItems / pageSize);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  const handlePageSizeChange = (event) => {
    const newSize = parseInt(event.target.value, 10);
    onPageSizeChange(newSize);
  };

  return (
    <div>
      <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
        {'<'}
      </button>

      <span>{`Page ${currentPage} of ${totalPages}`}</span>

      <button disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}>
        {'>'}
      </button>

      <select value={pageSize} onChange={handlePageSizeChange}>
        <option value={5}>5 per page</option>
        <option value={10}>10 per page</option>
        <option value={20}>20 per page</option>
      </select>
    </div>
  );
};

export default Pagination;
