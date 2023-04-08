import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("post/fetchPosts", async () => {
  const response = await axios.get("http://localhost:3001/post");
  return response.data;
});
export const postNewPost = createAsyncThunk("post/postNewPost", async (post) => {
  const response = await axios.post("http://localhost:3001/post", post);
  return response.data;
});
const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addPost: (state, action) => {
      const { title, content, date, id } = action.payload;
      state.posts.push({ title, content, date, id });
      console.log(action.payload.id);
    },
  },
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.status = "loading";
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.posts = action.payload;
    },
    [fetchPosts.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [postNewPost.fulfilled]: (state, action) => {
      state.posts.push(action.payload);
    },
  },
});
export const { addPost } = postSlice.actions;
export default postSlice.reducer;
export const addNewPost = (title, content, date) => (dispatch, getState) => {
  const { posts } = getState().post;
  const id = posts.length + 1;
  const newPost = { title, content, date, id };
  dispatch(postNewPost(newPost));
};
