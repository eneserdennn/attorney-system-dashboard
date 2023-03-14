import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchClients from "./fetchClients";

const api = "http://localhost:8000";

const initialState = {
  token: null,
  isLoading: false,
  error: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    const response = await api.post("/users/login", { email, password });
    return response.data.token;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.token = null;
    },
    login(state, action) {
      state.token = action.payload;
    },
    token(state, action) {},
  },
});

export default authSlice.reducer;
