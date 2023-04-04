import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  authInfo: {},
};

export const login = createAsyncThunk("auth/login", async (credentials) => {
  const response = await fetch("http://api.eneserden.com/api/users/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  }).then((response) => response.json());

  // Token localStorage'a kaydediliyor

  localStorage.setItem("token", response.token);
  // console.log(await response.json());
  console.log(response);
  return response;
});

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
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.authInfo = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectToken = (state) => state.auth.token;
export const authstate = (state) => state.auth;
export const dnmstate = (state) => console.log(state.authInfo);

export const { logout } = authSlice.actions;
export default authSlice.reducer;
