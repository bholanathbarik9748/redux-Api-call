import { configureStore } from "@reduxjs/toolkit";
import userDetail from "../features/userDetailSlice";

export const Store = configureStore({
    reducer: {
        app: userDetail
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});