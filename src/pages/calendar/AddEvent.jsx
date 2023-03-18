import React from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  TimePicker,
  DatePicker,
  Space,
  Select,
} from "antd";
import dayjs from "dayjs";
const format = "HH:mm";
const { TextArea } = Input;
const options = [
  {
    value: "jack",
    label: "Jack",
  },
  {
    value: "lucy",
    label: "Lucy",
  },
  {
    value: "Yiminghe",
    label: "yiminghe",
  },
  {
    value: "disabled",
    label: "Disabled",
    disabled: true,
  },
];
const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const onChange = (date, dateString) => {
  console.log(date, dateString);
};
const AddEvent = () => {
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Start Date"
        name="start-date"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Space direction="horizontal">
          <DatePicker onChange={onChange} />
          <TimePicker defaultValue={dayjs("12:08", format)} format={format} />
        </Space>
      </Form.Item>

      <Form.Item
        label="End Date"
        name="end-date"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Space direction="horizontal">
          <DatePicker onChange={onChange} />
          <TimePicker defaultValue={dayjs("12:08", format)} format={format} />
        </Space>
      </Form.Item>
      <Form.Item
        label="Place"
        name="place"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />
      </Form.Item>
      <Form.Item
        label="Calendar"
        name="calendar"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Select
          defaultValue="lucy"
          style={{
            width: 120,
          }}
          options={options}
          onChange={(e) => console.log(e)}
        />
      </Form.Item>
      <Form.Item
        label="Associated to"
        name="associated-to"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Select
          defaultValue="lucy"
          style={{
            width: 120,
          }}
          options={options}
          onChange={(e) => console.log(e)}
        />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddEvent;
