import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  stepCount: 0,
  modalType: "",
  modalRowInfo: {},
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
    setModalType: (state, action) => {
      state.modalType = action.payload;
    },
    setModalRowInfo: (state, action) => {
      state.modalRowInfo = action.payload ;
    },
  },
});
export const getModalRowInfo = (state) => state.modal.modalRowInfo;
export const getModalType = (state) => state.modal.modalType;
export const modalState = (state) => state.modal.isOpen;
export const stepCountState = (state) => state.modal.stepCount;

export const {
  openModal,
  setModalType,
  closeModal,
  nextStepCount,
  prevStepCount,
  resetStepCount,
  setModalRowInfo,
} = modalSlice.actions;
export default modalSlice.reducer;
