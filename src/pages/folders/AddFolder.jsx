import { Button, Checkbox, Form, Input, Select } from "antd";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import {
  selectAllClients,
  selectOptions,
  selectStatus,
} from "redux/store/reducers/clients";
import { useGetUsers } from "hooks/useGetUsers";
import {
  selectUserOptions,
  selectUserStatus,
} from "redux/store/reducers/users";
import { useGetAllClients } from "hooks/useGetAllClients";

const AddFolder = () => {
  const clientStatus = useSelector(selectStatus);
  const userStatus = useSelector(selectUserStatus);
  useGetAllClients(clientStatus);
  useGetUsers(userStatus);
  const clientOption = useSelector(selectOptions);
  const userOptions = useSelector(selectUserOptions);
  const handleOnFinish = async (value) => {
    console.log(value);
    //post client
    await axios
      .post(`http://localhost:8000/api/clients/${value.userId}/folders`, value)
      .then((res) => console.log(res.data));
  };
  return (
    <>
      <Form
        onFinish={handleOnFinish}
        onValuesChange={(allValues) => console.log(allValues)}
        onFinishFailed={(e) => console.log(e)}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item
          name="name"
          label="Folder Name"
          rules={[{ required: true, message: "Please input your nanme!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="natures"
          label="Natures"
          rules={[{ required: true, message: "Please input your nanme!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="jurisdictions"
          label="jurisdictions"
          rules={[{ required: true, message: "Please input your nanme!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="currency"
          label="Currency"
          rules={[{ required: true, message: "Please input your nanme!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="language"
          label="Language"
          rules={[{ required: true, message: "Please input your nanme!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="client" label="Client">
          <Select options={clientOption} />
        </Form.Item>
        <Form.Item
          name="userId"
          label="User"
          rules={[{ required: true, message: "Please input your nanme!" }]}
        >
          <Select options={userOptions} />
        </Form.Item>
        <Form.Item
          name="clientId"
          label="Client"
          rules={[{ required: true, message: "Please input your nanme!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="billingMethod"
          label="Billing Method"
          rules={[{ required: true, message: "Please input your nanme!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="applicableRate"
          label="Applicable Rate"
          rules={[{ required: true, message: "Please input your nanme!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="butgededAmount"
          label="Butgeted Amount"
          rules={[{ required: true, message: "Please input your nanme!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="fixedExpenses"
          label="Fixed Expenses"
          rules={[{ required: true, message: "Please input your nanme!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="documentPaths"
          label="Document Paths"
          rules={[{ message: "Please input your nanme!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Button
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddFolder;
