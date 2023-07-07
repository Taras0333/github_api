import { useEffect } from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import SearchBar from './components/searchBar/searchBar';
import RepositoriesList from '../src/components/repositoriesList/repositoriesList';
import { BACKGROUND_LIGHT_GRAY } from '../src/utilities/const';
import { fetchList } from './store/stateSlice';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);

  return (
    <ChakraProvider theme={theme}>
      <Box minHeight="100vh" p="32px 54px" background={BACKGROUND_LIGHT_GRAY}>
        <SearchBar />
        <RepositoriesList />
      </Box>
    </ChakraProvider>
  );
}

export default App;
