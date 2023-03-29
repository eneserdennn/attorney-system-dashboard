import { Form, Input, Button, DatePicker, TimePicker, Select } from "antd";
import MainCard from "components/MainCard";
import axios from "axios";
import {
  selectUserOptions,
  selectUserStatus,
} from "redux/store/reducers/users";
import { useSelector } from "react-redux";
import { useGetUsers } from "hooks/useGetUsers";
import { selectToken } from "redux/store/reducers/auth";
import { selectOptions, selectStatus } from "redux/store/reducers/clients";
import { useGetAllClients } from "hooks/useGetAllClients";
const AddForm = () => {
  const token = useSelector(selectToken);
  const userStatus = useSelector(selectUserStatus);
  const clientStatus = useSelector(selectStatus);
  useGetUsers(userStatus);
  useGetAllClients(clientStatus);
  const userOptions = useSelector(selectUserOptions);
  const clientOptions = useSelector(selectOptions);
  console.log(clientOptions);
  const statusOptions = [
    { label: "Normal", value: "normal" },
    { label: "High", value: "high" },
    { label: "Low", value: "low" },
  ];
  const taskTypes = [
    { label: "Stain", value: "stain" },
    { label: "Call", value: "call" },
    { label: "Meeting", value: "meeting" },
    { label: "Writing", value: "writing" },
    { label: "Research", value: "research" },
    { label: "Procedure Date", value: "proceduredate" },
  ];
  const handleOnFinish = async (value) => {
    const { name, priority, userId, task } = value;
    const data = {
      name,
      priority,
      userId,
      task,
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
          label="Task Name"
          rules={[{ required: true, message: "Please input your nanme!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="priority"
          label="Priority"
          rules={[{ required: true, message: "Please input your nanme!" }]}
        >
          <Select options={statusOptions} />
        </Form.Item>
        <Form.Item
          name="userId"
          label="User"
          rules={[{ required: true, message: "Please input your nanme!" }]}
        >
          <Select options={userOptions} />
        </Form.Item>
        <Form.Item
          name="task"
          label="Task Type"
          rules={[{ required: true, message: "Please input your nanme!" }]}
        >
          <Select options={taskTypes} />
        </Form.Item>
        <Form.Item
          label="Start Date"
          name="startdate"
          rules={[{ required: true, message: "Please select a date & time !" }]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          label="End Time"
          name="endtime"
          rules={[{ required: true, message: "Please select a date & time !" }]}
        >
          <TimePicker />
        </Form.Item>
        <Form.Item
          name="associatedTo"
          label="Associated To"
          rules={[{ required: true, message: "Please input your nanme!" }]}
        >
          <Select options={clientOptions} />
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
