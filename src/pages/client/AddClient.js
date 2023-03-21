import { Form, Input, Button } from "antd";
import MainCard from "components/MainCard";

const AddClient = () => {
  const handleOnFinish = (value) => {
    console.log(value);
    //post client
  };
  return (
    <MainCard title="Add New Client" sx={{ textAlign: "center" }}>
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
          label="name"
          rules={[{ required: true, message: "Please input your nanme!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: "Please input your surname!" }]}
          name="surname"
          label="surname"
        >
          <Input />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: "Please input your phone!" }]}
          name="phone"
          label="phone"
        >
          <Input />
        </Form.Item>

        <Form.Item
          rules={[{ required: true, message: "Please input your address!" }]}
          name="address"
          label="address"
        >
          <Input />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: "Please input your city!" }]}
          name="city"
          label="city"
        >
          <Input />
        </Form.Item>
        <Form.Item label="is Organization">
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

        <Form.Item
          rules={[
            { required: true, message: "Please input your organization!" },
          ]}
          name="organization"
          label="Organization"
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

export default AddClient;
