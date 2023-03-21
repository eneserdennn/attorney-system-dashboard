import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  users: [],
  user: {},
  status: "idle",
  error: null,
  options: [],
};
const BASE_URL = "http://localhost:8000/api/users";

export const fetchUsers = createAsyncThunk("user/fetchUsers", async (id) => {
  const response = await axios.get(`${BASE_URL}`);
  return response.data;
});
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
        state.options = action.payload.map((user) => ({
          value: user._id,
          label: user.firstName,
        }));
      });
  },
});

export const selectAllUsers = (state) => state.users.users;

export const selectUserOptions = (state) => state.users.options;

export const selectUserStatus = (state) => state.users.status;

export default usersSlice.reducer;
