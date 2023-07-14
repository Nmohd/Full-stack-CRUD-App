import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../Components/constant";

export const fetchSingleUser = createAsyncThunk(
  "fetchSingleUserSlice/fetchSingleUser",
  async (viewUserId) => {
    try {
      const response = await axios.get(`${apiUrl}/users/${viewUserId}`);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }
);

const initialState = {
  singleUser: {},
};

export const fetchSingleUserSlice = createSlice({
  name: "fetchSingleUserSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchSingleUser.fulfilled]: (state, { payload }) => {
      state.singleUser = payload.data;
    },
  },
});

export const getSingleUser = (e) => e.singleUser;

export default fetchSingleUserSlice.reducer;
