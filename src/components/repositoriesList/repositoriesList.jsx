import { Flex, Text } from '@chakra-ui/react';
import ListCard from './listCard';
import Pagination from '../pagination/pagination';
import { useSelector } from 'react-redux';
import { selectCurrentItems, selectErrorMassage } from '../../store/stateSlice';

const RepositoriesList = () => {
  const currentItems = useSelector(selectCurrentItems);
  const errorMassage = useSelector(selectErrorMassage);

  return (
    <Flex flexDirection="column">
      {errorMassage && (
        <Flex
          width="100%"
          justifyContent="center"
          padding="60px 0px"
          fontSize="40px"
        >
          <Text color="red">{errorMassage}</Text>
        </Flex>
      )}
      {currentItems.map(listItem => {
        return <ListCard listItem={listItem} key={listItem.id} />;
      })}
      <Pagination />
    </Flex>
  );
};

export default RepositoriesList;
