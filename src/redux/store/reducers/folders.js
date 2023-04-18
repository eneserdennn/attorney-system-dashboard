import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../../../../node_modules/axios/index";

const initialState = {
  folders: [],
  folder: {},
  status: "idle",
  error: null,
  updatedStatus: "idle",
};

const BASE_URL = "http://localhost:8000";
const token = localStorage.getItem("token");

export const fetchFolders = createAsyncThunk(
  "clients/fetchFolders",
  async () => {
    const response = await axios.get(`${BASE_URL}/api/folders/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
);

const folderSlice = createSlice({
  name: "folders",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFolders.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchFolders.pending, (state, action) => {
        state.status = "idle";
      })
      .addCase(fetchFolders.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.folders = action.payload;
      });
  },
});

export const selectAllFolders = (state) => state.folders.folders;
export default folderSlice.reducer;
