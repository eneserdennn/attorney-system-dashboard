import React, { useContext, useEffect, useState } from "react";
import { Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  getModalRowInfo,
  setModalRowInfoFirstStep,
} from "redux/store/reducers/modal";
import EditFormContext from "context/EditFormContext";
const EditFormFirstStep = () => {
  const rowInfo = useSelector(getModalRowInfo);
  const { clientForm, setClientForm } = useContext(EditFormContext);
  useEffect(() => {
    let dnm = true;
    if (dnm) {
      setClientForm(rowInfo);
    } else {
      dnm = false;
    }
  }, [rowInfo, setClientForm]);

  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      //   disabled={componentDisabled}
      style={{
        maxWidth: 600,
        margin: 20,
      }}
    >
      <Form.Item label="Name">
        <Input
          value={clientForm.name}
          onChange={(e) => {
            setClientForm({ ...clientForm, name: e.target.value });
          }}
        />
      </Form.Item>
      <Form.Item label="Surname">
        <Input
          value={clientForm.surname}
          onChange={(e) => {
            setClientForm({ ...clientForm, surname: e.target.value });
          }}
        />
      </Form.Item>

      <Form.Item label="Email">
        <Input
          value={clientForm.email}
          onChange={(e) => {
            setClientForm({ ...clientForm, email: e.target.value });
          }}
        />
      </Form.Item>
      <Form.Item label="Phone">
        <Input
          value={clientForm.phone}
          onChange={(e) => {
            setClientForm({ ...clientForm, phone: e.target.value });
          }}
        />
      </Form.Item>
    </Form>
  );
};

export default EditFormFirstStep;
