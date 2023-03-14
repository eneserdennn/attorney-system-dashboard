import { createSlice } from '@reduxjs/toolkit';
import { fetchClients } from './fetchClients';

const initialState = {
    clients: [],
    status: 'idle',
    error: null,
};

const clientsSlice = createSlice({
    name: 'clients',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchClients.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchClients.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.clients = action.payload;
            })
            .addCase(fetchClients.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default clientsSlice.reducer;

export const selectAllClients = (state) => state.clients.clients;

export const selectStatus = (state) => state.clients.status;

export const selectError = (state) => state.clients.error;
