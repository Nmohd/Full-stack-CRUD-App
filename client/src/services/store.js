import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userSlice from "./fetchApi";
import fetchSingleUserSlice from "./fetchSingleUser";
import updateUserSlice from "./updateUser";

export default configureStore({
  reducer: {
    allUsers: userSlice,
    singleUser: fetchSingleUserSlice,
    updateUser: updateUserSlice,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
