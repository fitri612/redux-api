import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "https://jsonplaceholder.typicode.com/comments";

const initialState = {
  entities: [],
  loading: false,
  success: false,
  error: null,
};


export const fetchComments = createAsyncThunk(
  'comments/fetchComment',
  async () => {
    const response = await axios.get(API);
    return response.data;
  }
);

const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchComments.pending, (state, action) => {
      ;(state.pending = true),
        (state.success = false),
        (state.error = null);
    });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      ;(state.pending = false),
        (state.success = true),
        (state.entities = action.payload);
    });
    builder.addCase(fetchComments.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default commentSlice.reducer;
