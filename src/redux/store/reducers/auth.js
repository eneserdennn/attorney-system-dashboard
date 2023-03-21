import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const login = createAsyncThunk("auth/login", async (credentials) => {
  const response = await fetch("http://localhost:8000/api/users/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }
  const data = await response.json();

  // Token localStorage'a kaydediliyor
  localStorage.setItem("token", data.token);

  return data;
});
const initialState = {
  user: null,
  token: null,
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;

      // Token localStorage'dan siliniyor
      localStorage.removeItem("token");
    },
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.status = "loading";
    },
    [login.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.user = action.payload;
      state.token = action.payload.token;
      state.error = null;
    },
    [login.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const selectToken = (state) => state.auth.token;

export const { logout } = authSlice.actions;
export default authSlice.reducer;
