import { Form, Input } from "antd";
import MainCard from "components/MainCard";
import { useState } from "react";
const AddClient = () => {
  const [userForm, setUserForm] = useState({
    name: "",
    surname: "",
    phone: "",
    address: "",
    city: "",
    isOrganization: "",
    Quality: "",
    currency: "",
    organization: "",
  });
  return (
    <MainCard title="Add New Client" sx={{ textAlign: "center" }}>
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
        <Form.Item label="name">
          <Input />
        </Form.Item>
        <Form.Item label="surname">
          <Input />
        </Form.Item>
        <Form.Item label="phone">
          <Input />
        </Form.Item>

        <Form.Item label="address">
          <Input />
        </Form.Item>
        <Form.Item label="city">
          <Input />
        </Form.Item>
        <Form.Item label="is Organization">
          <Input />
        </Form.Item>

        <Form.Item label="Quality">
          <Input />
        </Form.Item>

        <Form.Item label="Currency">
          <Input />
        </Form.Item>

        <Form.Item label="Organization">
          <Input />
        </Form.Item>
      </Form>
    </MainCard>
  );
};

export default AddClient;
