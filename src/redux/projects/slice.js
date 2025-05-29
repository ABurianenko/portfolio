import { createSlice } from "@reduxjs/toolkit"
import { fetchProjects } from "./operations"

const initialState = {
    items: [],
    isLoading: false,
    error: null
}

const projectSlice = createSlice({
    name: 'projects',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchProjects.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchProjects.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = action.payload;
                state.error = null;
            })
            .addCase(fetchProjects.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});

export const projectReducer = projectSlice.reducer;