import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./theme/slice";
import { projectReducer } from "./projects/slice";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        projects: projectReducer,
    }
})