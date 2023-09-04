import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createUser = createAsyncThunk("createUser", async (data, { rejectWithValue }) => {
    const response = await axios.post("https://64f34661edfa0459f6c6754a.mockapi.io/curd", data, { 'Content-Type': 'application/json', });

    try {
        const result = await response;
        return result;
    } catch (error) {
        console.log(error);
        return rejectWithValue(error);
    }
})

export const getAllUser = createAsyncThunk("getAllUser", async (_, { rejectWithValue }) => {
    const response = await axios.get("https://64f34661edfa0459f6c6754a.mockapi.io/curd");

    try {
        const result = response;
        return result;
    } catch (error) {
        console.log("error", error);
        return rejectWithValue(error);
    }
})

export const userDetail = createSlice({
    name: "userDetail",
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    extraReducers: {
        [createUser.pending]: (state) => {
            state.loading = true;
        },
        [createUser.fulfilled]: (state, action) => {
            state.loading = false;
            console.log("fulfilled");
            state.users.push(action.payload);
        },
        [createUser.rejected]: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },
        [getAllUser.pending]: (state) => {
            state.loading = true;
        },
        [getAllUser.fulfilled]: (state, action) => {
            state.loading = false;
            console.log("fulfilled getAllUser");
            state.users = action.payload;
        },
        [getAllUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export default userDetail.reducer;