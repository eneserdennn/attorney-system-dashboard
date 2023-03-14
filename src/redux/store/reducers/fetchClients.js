import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchClients = createAsyncThunk('clients/fetchClients', async () => {
    const response = await axios.get('http://localhost:8000/api/clients/');
    return response.data;
});
