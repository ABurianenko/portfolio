import { createSlice } from "@reduxjs/toolkit";

const getInitialTheme = () => {
    return localStorage.getItem('theme') || 'light';
  };

const initialState = {
    mode: getInitialTheme,
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        },
        setTheme: (state, action) => {
            state.mode = action.payload;
        },
    },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;