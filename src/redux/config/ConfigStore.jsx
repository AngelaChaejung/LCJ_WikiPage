import { configureStore } from "@reduxjs/toolkit";
import post from "../modules/PostSlice";
const store = configureStore({
  reducer: { post: post },
});
export default store;
