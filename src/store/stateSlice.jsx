import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CARDS_PER_PAGE, ERROR_MASSAGE } from '../utilities/const';
import { getRepositoriesList } from '../api/retrive_repositories';

const initialState = {
  itemOffset: 0,
  endOffset: CARDS_PER_PAGE,
  list: [],
  currentItems: [],
  pageCount: 0,
  errorMassage: '',
};

export const fetchList = createAsyncThunk('state/fetch', async thunkAPI => {
  return getRepositoriesList().then(res => res.data);
});

export const stateSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {
    changePage: (state, { payload }) => {
      state.itemOffset = payload;
      state.endOffset = state.itemOffset + CARDS_PER_PAGE;
      state.currentItems = state.list.slice(state.itemOffset, state.endOffset);
      state.errorMassage = '';
    },
    searchRepos: (state, { payload }) => {
      const searchResult = state.list.filter(el =>
        el.name.toLowerCase().includes(payload.toLowerCase())
      );
      state.currentItems = searchResult;
      if (!state.currentItems.length) {
        state.errorMassage = ERROR_MASSAGE;
      } else {
        state.errorMassage = '';
      }
    },
    resetPagination: state => {
      state.currentItems = state.list.slice(state.itemOffset, state.endOffset);
      state.errorMassage = '';
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchList.fulfilled, (state, { payload }) => {
      state.list = payload;
      state.pageCount = Math.ceil(state.list.length / CARDS_PER_PAGE);
      state.currentItems = state.list.slice(state.itemOffset, state.endOffset);
    });
  },
});

export const { changePage, searchRepos, resetPagination } = stateSlice.actions;

export const selectItemOffset = state => state.pagination.itemOffset;
export const selectEndOffset = state => state.pagination.endOffset;
export const selectList = state => state.pagination.list;
export const selectCurrentItems = state => state.pagination.currentItems;
export const selectListLength = state => state.pagination.list.length;
export const selectPageCount = state => state.pagination.pageCount;
export const selectErrorMassage = state => state.pagination.errorMassage;

export default stateSlice.reducer;
