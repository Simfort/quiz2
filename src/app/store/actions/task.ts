import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  answeredTask: {} as { [key: number | string]: number | string | number[] },
  progress: 5.882352941,
  REDIRECT_FLAG: false,
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
    setREDIRECT_FLAG(state: typeof initialState, action: { payload: boolean }) {
      state.REDIRECT_FLAG = action.payload;
    },
  },
});

export const { setTask, addProgress, setREDIRECT_FLAG } = taskSlice.actions;
export default taskSlice.reducer;
