import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  stepCount: 0,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
    },
    nextStepCount: (state) => {
      state.stepCount += 1;
    },
    prevStepCount: (state) => {
      state.stepCount -= 1;
    },
    resetStepCount: (state) => {
      state.stepCount = 0;
    },
  },
});

export const modalState = (state) => state.modal.isOpen;
export const stepCountState = (state) => state.modal.stepCount;
export const {
  openModal,
  closeModal,
  nextStepCount,
  prevStepCount,
  resetStepCount,
} = modalSlice.actions;
export default modalSlice.reducer;
