import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../Components/constant";

export const updateUser = createAsyncThunk(
  "updateUserSlice/updateUser",
  async (viewUserId, payload) => {
    try {
      const response = await axios.put(
        `${apiUrl}/users/${viewUserId}`,
        payload
      );
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }
);

const initialState = {
  updateUser: {},
};

export const updateUserSlice = createSlice({
  name: "updateUserSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [updateUser.fulfilled]: (state, { payload }) => {
      state.updateUser = payload.data;
    },
  },
});

export default updateUserSlice.reducer;
