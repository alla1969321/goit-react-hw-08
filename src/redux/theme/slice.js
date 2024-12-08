import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeThemeMode(state, { payload }) {
      state.mode = payload;
    },
  },
});

export const { changeThemeMode } = themeSlice.actions;

export const themeReducer = themeSlice.reducer;
