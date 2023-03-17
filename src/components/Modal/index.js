import React, { useContext, useState } from "react";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, modalState } from "redux/store/reducers/modal";
import ModalStep from "components/Steps/index";
import EditFormContext from "context/EditFormContext";
import axios from "../../../node_modules/axios/index";

const ModalPage = () => {
  const dispatch = useDispatch();
  const modal = useSelector(modalState);

  const [confirmLoading] = useState(false);
  const { clientForm } = useContext(EditFormContext);

  const handleOk = () => {
    console.log(clientForm);
    dnm(clientForm);
  };
  const handleCancel = () => {
    dispatch(closeModal());
  };
  const dnm = async (clientForm) =>
    await axios
      .put(`http://localhost:8000/api/clients/${clientForm._id}`, clientForm)
      .then((res) => console.log(res.data));
  return (
    <>
      <Modal
        title="Edit a Client"
        open={modal}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <ModalStep />
      </Modal>
    </>
  );
};

export default ModalPage;
