import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./actions/task";

export default configureStore({
  reducer: {
    task: taskReducer,
  },
});
