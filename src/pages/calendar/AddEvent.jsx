import React from "react";
import { Button, Form, Input, TimePicker, DatePicker, Select } from "antd";
import dayjs from "dayjs";
import { selectUserOptions } from "redux/store/reducers/users";
import { useSelector } from "react-redux";
import { selectOptions } from "redux/store/reducers/clients";
import { useGetUsers } from "hooks/useGetUsers";

const AddEvent = ({ selectedDate }) => {
  useGetUsers("idle");
  const users = useSelector(selectUserOptions);
  const clientOptions = useSelector(selectOptions);
  console.log(selectedDate);
  const { TextArea } = Input;
  const format = "HH:mm";

  const onFinish = (values) => {
    // console.log("Success:", values);
    const { timeend, dateend, timestart, datestart } = values;
    dayjs(timeend);
    dayjs(dateend);
    dayjs(timestart);
    dayjs(datestart);
    const formattedEndTime = timeend.format("HH:mm");
    const formattedStartTime = timestart.format("HH:mm");
    const formattedEnddate = dateend.format("DD/MM/YY");
    const formattedStartDate = datestart.format("DD/MM/YY");

    const data = {
      ...values,
      formattedEndTime,
      formattedStartTime,
      formattedEnddate,
      formattedStartDate,
    };
    delete data.datestart;
    delete data.timestart;
    delete data.dateend;
    delete data.timeend;
    console.log(data);
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
        name="datestart"
        rules={[{ required: true, message: "Please select a date & time !" }]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        label="Start Time"
        name="timestart"
        rules={[{ required: true, message: "Please select a date & time !" }]}
      >
        <TimePicker format={format} />
      </Form.Item>

      <Form.Item
        label="End Date"
        name="dateend"
        rules={[{ required: true, message: "Please select a date & time !" }]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        label="End Time"
        name="timeend"
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
        name="userId"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Select
          onChange={(e) => console.log(e)}
          style={{
            width: "100%",
          }}
          options={users}
        />
      </Form.Item>
      <Form.Item
        label="Associated to"
        name="associatedTo"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Select
          style={{
            width: "100%",
          }}
          options={clientOptions}
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
