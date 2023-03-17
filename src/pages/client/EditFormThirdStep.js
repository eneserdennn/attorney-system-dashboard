import React, { useContext } from "react";
import { Form, Input } from "antd";
import EditFormContext from "context/EditFormContext";

const EditFormThirdStep = () => {
  const { clientForm, setClientForm } = useContext(EditFormContext);
  return (
    <Form
      labelCol={{
        span: 6,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      //   disabled={componentDisabled}
      style={{
        maxWidth: 800,
        margin: 20,
      }}
    >
      <Form.Item label="Quality">
        <Input
          value={clientForm.quality}
          onChange={(e) => {
            setClientForm({ ...clientForm, quality: e.target.value });
          }}
        />
      </Form.Item>
      <Form.Item label="Currency">
        <Input
          value={clientForm.currency}
          onChange={(e) => {
            setClientForm({ ...clientForm, currency: e.target.value });
          }}
        />
      </Form.Item>

      <Form.Item label="Organization">
        <Input
          value={clientForm.organization}
          onChange={(e) => {
            setClientForm({ ...clientForm, organization: e.target.value });
          }}
        />
      </Form.Item>
      <Form.Item label="Info 3">
        <Input />
      </Form.Item>
    </Form>
  );
};

export default EditFormThirdStep;
