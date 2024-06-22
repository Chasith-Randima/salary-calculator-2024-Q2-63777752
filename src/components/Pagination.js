// import ReactPaginate from 'react-paginate';

// const Pagination = () => {
//   const handlePageClick = (data) => {
//     console.log(data.selected);
//   };

//   return (
//     <ReactPaginate
//       previousLabel={'previous'}
//       nextLabel={'next'}
//       breakLabel={'...'}
//       pageCount={3}
//       marginPagesDisplayed={2}
//       pageRangeDisplayed={5}
//       onPageChange={handlePageClick}
//       containerClassName={'pagination'}
//       activeClassName={'active'}
//     />
//   );
// };

// export default Pagination;



import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ pageCount, onPageChange }) => {
  const handlePageClick = (data) => {
    onPageChange(data.selected);
  };

  return (
    <ReactPaginate
      previousLabel={'previous'}
      nextLabel={'next'}
      breakLabel={'...'}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageClick}
      containerClassName={'pagination'}
      activeClassName={'active'}
    />
  );
};

export default Pagination;
