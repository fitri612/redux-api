import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const API = "https://jsonplaceholder.typicode.com/comments";

const initialState = {
  entities: [],
  loading: false,
};

export const fetchComments = createAsyncThunk(
  "comments/fetchComment",
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
      state.loading = true;
    });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.entities = action.payload;
      state.loading = false;
      toast.success("Success!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
    builder.addCase(fetchComments.rejected, (state, action) => {
      state.loading = false;
      toast.error('Error !', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });
    });
  },
});

export default commentSlice.reducer;
