import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:8000/api/tasks";

const initialState = {
  tasks: [],
  status: "idle",
  error: null,
  notStartedTasks: [],
  inProgressTasks: [],
  onHoldTasks: [],
  completedTasks: [],
};
export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await axios.get(`${BASE_URL}`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDVkM2M3ZjU4NWFhNjNhODQxNzFiNCIsImlhdCI6MTY3ODEwMzU5OCwiZXhwIjoxNjgwNjk1NTk4fQ.aSrJ2noOj-oqHItTz4OA1Kr7qPP_TnGHNtkoReIKgaE",
    },
  });
  return response.data;
});
const tasksSlider = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchTasks.rejected, (state, action) => {
      state.error = action.error.message;
      state.status = "failed";
    });
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.tasks = action.payload;
      state.status = "succeeded";
      state.notStartedTasks = action.payload.filter(
        (task) => task.status === "notStarted"
      );
      state.onHold = action.payload.filter((task) => task.status === "onHold");
      state.inProgressTasks = action.payload.filter(
        (task) => task.status === "inProgress"
      );
      state.completedTasks = action.payload.filter(
        (task) => task.status === "completed"
      );
    });
  },
});

export const selectTasks = (state) => state.tasks.tasks;
export const selectStatusTasks = (state) => state.tasks.status;
export const selectNotStartedTasks = (state) => state.tasks.notStartedTasks;
export const selectInProgressTasks = (state) => state.tasks.inProgressTasks;
export default tasksSlider.reducer;
