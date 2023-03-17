import React, { useContext } from "react";
import { Form, Input } from "antd";
import { useSelector } from "react-redux";
import { getModalRowInfo } from "redux/store/reducers/modal";
import EditFormContext from "context/EditFormContext";
const EditFormSecondStep = () => {
  const rowInfo = useSelector(getModalRowInfo);
  const { clientForm, setClientForm } = useContext(EditFormContext);
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
      <Form.Item label="City">
        <Input
          value={clientForm.city}
          onChange={(e) => {
            setClientForm({ ...clientForm, city: e.target.value });
          }}
        />
      </Form.Item>
      <Form.Item label="Address">
        <Input
          value={clientForm.address}
          onChange={(e) => {
            setClientForm({ ...clientForm, address: e.target.value });
          }}
        />
      </Form.Item>

      <Form.Item label="Info 2">
        <Input />
      </Form.Item>
      <Form.Item label="Info 3">
        <Input />
      </Form.Item>
    </Form>
  );
};

export default EditFormSecondStep;
