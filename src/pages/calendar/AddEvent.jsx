import React from "react";
import { Button, Form, Input, TimePicker, DatePicker, Select } from "antd";
import dayjs from "dayjs";

const AddEvent = ({ selectedDate }) => {
  console.log(selectedDate);
  const { TextArea } = Input;
  const format = "HH:mm";
  const dateFormat = "DD/MM/YYYY";
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
    console.log(values.enddate.$d);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

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
      onValuesChange={(allValues) => console.log(allValues)}
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
        name="startdate"
        rules={[{ required: true, message: "Please select a date & time !" }]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        label="Start Time"
        name="starttime"
        rules={[{ required: true, message: "Please select a date & time !" }]}
      >
        <TimePicker format={format} />
      </Form.Item>

      <Form.Item
        label="End Date"
        name="enddate"
        rules={[{ required: true, message: "Please select a date & time !" }]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        label="End Time"
        name="endtime"
        rules={[{ required: true, message: "Please select a date & time !" }]}
      >
        <TimePicker defaultValue={dayjs("12:08", format)} format={format} />
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
          onChange={(e) => console.log(e)}
          style={{
            width: 120,
          }}
          options={options}
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
