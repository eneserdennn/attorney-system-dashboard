import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL =
  "http://localhost:8000/api/users/64048c512c6cf50e0a8c2abc/tasks";

const initialState = {
  tasks: [],
  status: "idle",
  error: null,
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
    });
  },
});

export const selectTasks = (state) => state.tasks.tasks;
export const selectStatusTasks = (state) => state.tasks.status;

export default tasksSlider.reducer;
