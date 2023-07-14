
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../Components/constant";

export const fetchAllUsers = createAsyncThunk(
  "users/fetchAllUsers",
  async () => {
    try {
      const response = await axios.get(`${apiUrl}/users`);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }
);

export const addUser = createAsyncThunk("users/addUser", async (payload) => {
  try {
    console.log("i am up ");
    const response = await axios.post(`${apiUrl}/users`, payload);

    return response.data;
  } catch (err) {
    console.error(err);
  }
});





export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (deleteUserId) => {
    try {
      const response = await axios.delete(`${apiUrl}/users/${deleteUserId}`);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }
);

const initialState = {
  allUsers: [],
  userDelete: false,
  addUser: {},
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAllUsers.fulfilled]: (state, { payload }) => {
      ("Fetch all Users Successfully");
      return { ...state, allUsers: payload.data };
    },

    [deleteUser.fulfilled]: (state, { payload }) => {
   
      (" User deleted Successfully");
      return { ...state, deleteUser: true };
    },
    [addUser.fulfilled]: (state, { payload }) => {
      
      (" User added Successfully");
      return { ...state, addUser: payload.data };
    },

  },
});

export const getAllUsers = (e) => e.allUsers;
export const deletedUser = (e) => e.userDelete;

export default userSlice.reducer;
