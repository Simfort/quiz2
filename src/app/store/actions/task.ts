import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  answeredTask: {} as { [key: number | string]: number | string | number[] },
  progress: 5.882352941,
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setTask(
      state: typeof initialState,
      action: {
        payload: { task: number | string; value: number | string | number[] };
      }
    ) {
      state.answeredTask[action.payload.task] = action.payload.value;
    },
    addProgress(state: typeof initialState) {
      state.progress = state.progress + 5.882352941;
    },
  },
});

export const { setTask, addProgress } = taskSlice.actions;
export default taskSlice.reducer;
