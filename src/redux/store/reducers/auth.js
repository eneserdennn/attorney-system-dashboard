import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchClients from "./fetchClients";

const api = "http://localhost:8000";

const initialState = {
  profileInfo: {},
  token: null,
  status: "idle",
  error: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    const response = await api.post("/users/login", { email, password });
    return response.data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.status = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.status = "loggedin";
      state.profileInfo = action.payload;
      state.token = action.payload.token;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.status = "loggedout";
      state.error = action.error.message;
    });
  },
});

export const ProfileInfo = (state) => state.auth.profileInfo;
export const UserToken = (state) => state.auth.token;
export default authSlice.reducer;
