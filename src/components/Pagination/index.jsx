import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

const Pagination = ({ setCurrentPage }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel='...'
      nextLabel='>'
      previousLabel='<'
      onPageChange={(e) => setCurrentPage(e.selected + 1)}
      pageCount={2}
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
