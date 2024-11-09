import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./slices/users/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
  },
});
