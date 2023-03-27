import { Button, Checkbox, Form, Input, Select } from "antd";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import {
  selectAllClients,
  selectClientFolders,
  selectOptions,
  selectStatus,
} from "redux/store/reducers/clients";
import { useGetUsers } from "hooks/useGetUsers";
import {
  selectUserOptions,
  selectUserStatus,
} from "redux/store/reducers/users";
import { useGetAllClients } from "hooks/useGetAllClients";
import MainCard from "components/MainCard";

const AddFolder = () => {
  const clientStatus = useSelector(selectStatus);
  const userStatus = useSelector(selectUserStatus);
  useGetAllClients(clientStatus);
  useGetUsers(userStatus);
  const clientOption = useSelector(selectOptions);
  const userOptions = useSelector(selectUserOptions);
  const token = localStorage.getItem("token");
  const dnm = useSelector(selectClientFolders);
  console.log(dnm);
  const handleOnFinish = async (value) => {
    console.log(value);
    const {
      folderName,
      natures,
      jurisdictions,
      currency,
      userId,
      clientId,
      phone,
      email,
      password,
      address,
      billingMethod,
      butgededAmount,
      fixedAmount,
    } = value;
    const data = {
      folderName,
      natures,
      jurisdictions,
      currency,
      userId,
      clientId,
      phone,
      email,
      password,
      address,
      billingMethod,
      butgededAmount,
      fixedAmount,
    };
    //post client
    const response = await axios.post(
      `http://localhost:8000/api/clients/${clientId}/folders`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);
  };
  return (
    <MainCard title="Add a Folder" align="left">
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
          name="folderName"
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
          label="Jurisdictions"
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
        <Form.Item name="clientId" label="Client">
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
    </MainCard>
  );
};

export default AddFolder;
