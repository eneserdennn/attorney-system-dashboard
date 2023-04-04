import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../../node_modules/axios/index";

const BASE_URL = "http://api.eneserden.com";

const initalState = {
  events: "",
};

const calendarSlice = createSlice({
  name: "calendar",
  initalState,
  reducers: {},
});
