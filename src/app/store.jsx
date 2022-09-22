import { configureStore } from "@reduxjs/toolkit";
import { loadingBarReducer } from "react-redux-loading-bar";
import commentReducer from "../features/comments/commentSlice";

export default configureStore({
  reducer: {
    comments: commentReducer,
    loadingBar: loadingBarReducer,
  },
});
