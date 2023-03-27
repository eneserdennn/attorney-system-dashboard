import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../../../../node_modules/axios/index";

const initialState = {
  clients: [],
  client: {},
  status: "idle",
  error: null,
  updatedStatus: "idle",
  updatedClient: {},
  options: [],
  folders: [],
  events: [],
};

const BASE_URL = "http://localhost:8000";
const token = localStorage.getItem("token");
export const fetchClients = createAsyncThunk(
  "clients/fetchClients",
  async () => {
    const response = await axios.get(`${BASE_URL}/api/clients/`);
    return response.data;
  }
);

export const fetchClient = createAsyncThunk(
  "client/fetchClient",
  async (id) => {
    const response = await axios.get(`${BASE_URL}/api/clients/${id}`);
    return response.data;
  }
);

export const updateClient = createAsyncThunk(
  "client/update",
  async (client) => {
    const res = await axios.put(
      `${BASE_URL}/api/clients/${client._id}`,
      client,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  }
);
const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchClients.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchClients.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.clients = action.payload.filter(
          (client) =>
            client.isOrganization === false && client.deleted === false
        );
        state.options = action.payload.map((client) => ({
          value: client._id,
          label: client.name,
        }));
        state.folders = action.payload.map((client) => client.folders);
        state.events = action.payload.map((client) => client.events);
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
      })
      .addCase(updateClient.pending, (state) => {
        state.updatedStatus = "loading";
      })
      .addCase(updateClient.fulfilled, (state, action) => {
        state.updatedClient = action.payload;
        state.updatedStatus = "succeeded";
        state.status = "idle";
      })
      .addCase(updateClient.rejected, (state, action) => {
        state.updatedStatus = "failed";
        state.error = action.error.message;
      });
  },
});
export const selectAllClients = (state) => state.clients.clients;

export const selectOptions = (state) => state.clients.options;

export const selectStatus = (state) => state.clients.status;

export const selectError = (state) => state.clients.error;

export const selectClient = (state) => state.clients.client;

export const selectClientFolders = (state) => state.clients.folders;

export const selectClientsEvents = (state) => state.clients.events;
export const selectUpdatedClient = (state) => state.clients.updatedClient;

export const selectUpdatedStatus = (state) => state.clients.updatedStatus;

export const { setStatus } = clientsSlice.actions;

export default clientsSlice.reducer;
