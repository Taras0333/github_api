import { Flex } from '@chakra-ui/react';
import ReactPaginate from 'react-paginate';
import { ARCHIVO } from '../../utilities/const';
import { useDispatch } from 'react-redux';
import {
  changePage,
  selectListLength,
  selectPageCount,
} from '../../store/stateSlice';
import { useSelector } from 'react-redux';
import { CARDS_PER_PAGE } from '../../utilities/const';

const Pagination = () => {
  const dispatch = useDispatch();
  const listLength = useSelector(selectListLength);
  const pageCount = useSelector(selectPageCount);

  const handlePageClick = event => {
    const newOffset = (event.selected * CARDS_PER_PAGE) % listLength;
    dispatch(changePage(newOffset));
  };
  return (
    <Flex
      width="100%"
      justifyContent="center"
      marginTop="43px"
      fontFamily={ARCHIVO}
    >
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="Previous"
        renderOnZeroPageCount={null}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        containerClassName={'pagination'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        activeClassName={'active'}
      />
    </Flex>
  );
};

export default Pagination;
