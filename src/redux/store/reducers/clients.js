import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../../node_modules/axios/index";

const initialState = {
  clients: [],
  client: {},
  status: "idle",
  error: null,
  updateStatus: "idle",
  updatedClient: {},
};
const BASE_URL = "http://localhost:8000";

const fetchClients = createAsyncThunk("clients/fetchClients", async () => {
  const response = await axios.get(`${BASE_URL}/api/clients/`);
  return response.data;
});

export const fetchClient = createAsyncThunk(
  "client/fetchClient",
  async (id) => {
    const response = await axios.get(`${BASE_URL}/api/clients/${id}`);
    return response.data;
  }
);
// export const postClient = createAsyncThunk(
//   "clients/postClient",
//   async (clientInfo) => {
//     const response = await axios.put(
//       `${BASE_URL}/api/clients/${clientInfo._id}`
//     );

//     return response.data;
//   }
// );
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
        state.clients = action.payload.filter(
          (user) => user.isOrganization === false && user.deleted === false
        );
      })
      .addCase(fetchClients.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchClient.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchClient.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchClient.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.client = action.payload;
      });
  },
});

export const selectAllClients = (state) => state.clients.clients;

export const selectStatus = (state) => state.clients.status;

export const selectError = (state) => state.clients.error;

export const selectClient = (state) => state.clients.client;

export default clientsSlice.reducer;
