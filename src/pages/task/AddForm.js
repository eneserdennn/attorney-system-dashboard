import { Form, Input, Button, Select } from "antd";
import MainCard from "components/MainCard";
import axios from "axios";
import {
  selectUserOptions,
  selectUserStatus,
} from "redux/store/reducers/users";
import { useSelector } from "react-redux";
import { useGetUsers } from "hooks/useGetUsers";
import { selectToken } from "redux/store/reducers/auth";
const AddForm = () => {
  const token = useSelector(selectToken);
  const userStatus = useSelector(selectUserStatus);
  useGetUsers(userStatus);
  const userOptions = useSelector(selectUserOptions);

  const handleOnFinish = async (value) => {
    const { name, surname, userId, phone, email, password, address } = value;
    const data = {
      name,
      surname,
      userId,
      phone,
      email,
      password,
      address,
    };

    const response = await axios.post(
      "http://localhost:8000/api/clients",
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
    <MainCard title="Add New Task">
      <Form
        onFinish={handleOnFinish}
        onValuesChange={(allValues) => console.log(allValues)}
        onFinishFailed={(e) => console.log(e)}
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
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Please input your nanme!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: "Please input your surname!" }]}
          name="surname"
          label="Surname"
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="userId"
          label="User"
          rules={[{ required: true, message: "Please input your nanme!" }]}
        >
          <Select options={userOptions} />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: "Please input your phone!" }]}
          name="phone"
          label="Phone"
        >
          <Input />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: "Please input your phone!" }]}
          name="email"
          label="E-mail"
        >
          <Input />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: "Please input your phone!" }]}
          name="password"
          label="Password"
        >
          <Input />
        </Form.Item>

        <Form.Item
          rules={[{ required: true, message: "Please input your address!" }]}
          name="address"
          label="Address"
        >
          <Input />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: "Please input your city!" }]}
          name="city"
          label="City"
        >
          <Input />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: "Please input your city!" }]}
          name="country"
          label="Country"
        >
          <Input />
        </Form.Item>

        <Form.Item
          rules={[{ required: true, message: "Please input your username!" }]}
          name="quality"
          label="Quality"
        >
          <Input />
        </Form.Item>

        <Form.Item
          rules={[{ required: true, message: "Please input your currency!" }]}
          name="currency"
          label="Currency"
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </MainCard>
  );
};

export default AddForm;
