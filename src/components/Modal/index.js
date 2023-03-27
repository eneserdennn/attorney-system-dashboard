import React, { useContext } from "react";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, modalState } from "redux/store/reducers/modal";
import ModalStep from "components/Steps/index";
import EditFormContext from "context/EditFormContext";
import {
  selectUpdatedStatus,
  updateClient,
} from "redux/store/reducers/clients";

const ModalPage = () => {
  const dispatch = useDispatch();
  const modal = useSelector(modalState);
  const updateStatus = useSelector(selectUpdatedStatus);

  const { clientForm } = useContext(EditFormContext);

  const handleOk = () => {
    dispatch(updateClient(clientForm));
    updateStatus === "succeeded" && dispatch(closeModal());
  };

  const handleCancel = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <Modal
        title="Edit a Client"
        open={modal}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ModalStep />
      </Modal>
    </>
  );
};

export default ModalPage;
