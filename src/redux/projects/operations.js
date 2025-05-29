import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProjects = createAsyncThunk(
    'projects/fetchProjects',
    async (thunkAPI) => {
        try {
            const res = await fetch('/data/projects.json');
            return await res.json();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)