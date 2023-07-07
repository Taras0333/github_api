import { Input, Flex } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import {
  searchRepos,
  resetPagination,
  selectEndOffset,
} from '../../store/stateSlice';
import { useDispatch, useSelector } from 'react-redux';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const endOffset = useSelector(selectEndOffset);

  useEffect(() => {
    inputValue
      ? dispatch(searchRepos(inputValue))
      : dispatch(resetPagination());
  }, [dispatch, inputValue]);

  useEffect(() => {
    setInputValue('');
  }, [endOffset]);

  return (
    <Flex margin="0px 20px 0px 20px">
      <Input
        onChange={e => setInputValue(e.target.value)}
        value={inputValue}
        placeholder="Search"
        borderRadius="4px"
        boxShadow="0px 4px 24px 0px rgba(51, 51, 51, 0.24), 0px 4px 4px 0px rgba(51, 51, 51, 0.04)"
        border="none"
        _focusVisible={{ border: 'none' }}
        h="56px"
      />
    </Flex>
  );
};

export default SearchBar;
