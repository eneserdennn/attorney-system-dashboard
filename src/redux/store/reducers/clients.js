import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../../node_modules/axios/index";

const initialState = {
  clients: [],
  status: "idle",
  error: null,
};
const fetchClients = createAsyncThunk("clients/fetchClients", async () => {
  const response = await axios.get("http://localhost:8000/api/clients/");
  console.log(response.data);
  return response.data;
});
const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchClients.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchClients.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.clients = action.payload;
      })
      .addCase(fetchClients.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default clientsSlice.reducer;

export const selectAllClients = (state) => state.clients.clients;

export const selectStatus = (state) => state.clients.status;

export const selectError = (state) => state.clients.error;
