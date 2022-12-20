import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setContactsFiltration(state, action) {
      return action.payload;
    },
  },
});

export const { setContactsFiltration } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
