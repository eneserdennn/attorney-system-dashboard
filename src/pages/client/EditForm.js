import React from "react";
import { Form, Input } from "antd";
const EditForm = () => {
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
        <Input />
      </Form.Item>
      <Form.Item label="Surname">
        <Input />
      </Form.Item>
      <Form.Item label="Email">
        <Input />
      </Form.Item>
      <Form.Item label="Phone">
        <Input />
      </Form.Item>
    </Form>
  );
};

export default EditForm;
