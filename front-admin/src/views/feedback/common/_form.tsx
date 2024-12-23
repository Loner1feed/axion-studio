import { FeedbackTypes } from "@utils/types";
import {
  Button,
  Flex,
  Form,
  FormInstance,
  FormProps,
  Input,
  message,
  Space,
  Switch,
} from "antd";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import { CopyOutlined } from "@ant-design/icons";

const CopyLabel: React.FC<{ value: string; label: string }> = ({
  label,
  value,
}) => (
  // @ts-ignore
  <CopyToClipboard text={value} onCopy={() => message.success("Copied!")}>
    <Space style={{ cursor: "pointer" }}>
      {label}
      <CopyOutlined style={{ color: "#4096ff" }} />
    </Space>
  </CopyToClipboard>
);

export interface FieldType extends FeedbackTypes {}

interface FeedbackFormProps {
  form?: FormInstance;
  onFinish: FormProps["onFinish"];
  loading?: boolean;
  isEdit?: boolean;
}

export const FeedbackForm: React.FC<FeedbackFormProps> = ({
  form,
  onFinish,
  loading,
  isEdit,
}) => {
  const [touched, setTouched] = useState(false);

  return (
    <Form
      layout="vertical"
      style={{ maxWidth: 500, margin: "0 auto" }}
      onFinish={onFinish}
      disabled={loading}
      form={form}
      onFieldsChange={() => setTouched(true)}
    >
      <Flex gap="middle">
        <Form.Item<FieldType>
          style={{ width: "100%" }}
          label={<CopyLabel value={form?.getFieldValue("name")} label="Name" />}
          name="name"
          // rules={[{ required: true, message: "Name is required" }]}
        >
          <Input disabled />
        </Form.Item>

        <Form.Item<FieldType>
          style={{ width: "100%" }}
          label={
            <CopyLabel value={form?.getFieldValue("surname")} label="Surname" />
          }
          name="surname"
          // rules={[{ required: true, message: "Surname is required" }]}
        >
          <Input disabled />
        </Form.Item>
      </Flex>

      <Form.Item<FieldType>
        label={<CopyLabel value={form?.getFieldValue("email")} label="Email" />}
        name="email"
        // rules={[{ required: true, message: "Email is required" }]}
      >
        <Input disabled />
      </Form.Item>

      <Form.Item<FieldType>
        label={
          <CopyLabel value={form?.getFieldValue("message")} label="Message" />
        }
        name="message"
        // rules={[{ required: true, message: "Message is required" }]}
      >
        <Input.TextArea disabled />
      </Form.Item>

      <Form.Item<FieldType>
        label="Additional info"
        name="addInfo"
        rules={[{ required: true, message: "Additional info is required" }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item<FieldType>
        label="Contacted? (Check this field if you contacted the potential client)"
        name="contacted"
        rules={[{ required: true, message: "" }]}
      >
        <Switch />
      </Form.Item>

      <Form.Item style={{ display: "flex", justifyContent: "center" }}>
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          disabled={!touched}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
