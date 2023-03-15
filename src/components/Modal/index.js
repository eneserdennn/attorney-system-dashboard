import React, { useState } from "react";
import { Button, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, modalState, openModal } from "redux/store/reducers/modal";
import ModalStep from "components/Steps/index";

const ModalPage = () => {
  const dispatch = useDispatch();
  const modal = useSelector(modalState);
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const showModal = () => {
    dispatch(openModal());
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      dispatch(closeModal());
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    dispatch(closeModal());
  };
  console.log(modal);
  return (
    <>
      <Modal
        title="Title"
        open={modal}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <ModalStep />
        <p>{modalText}</p>
      </Modal>
    </>
  );
};

export default ModalPage;
