import { ProcessTypes } from "@utils/types";
import { Button, Form, FormProps, Input, Switch } from "antd";
import { useState } from "react";

export interface FieldType extends ProcessTypes {}

interface ProcessFormProps {
  form?: any;
  onFinish: FormProps["onFinish"];
  loading?: boolean;
  isEdit?: boolean;
}

export const ProcessForm: React.FC<ProcessFormProps> = ({
  form,
  onFinish,
  loading,
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
      <Form.Item<FieldType>
        label="Title"
        name="title"
        rules={[{ required: true, message: "Title is required" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Paragraph"
        name="paragraph"
        rules={[{ required: true, message: "Paragraph is required" }]}
      >
        <Input.TextArea autoSize />
      </Form.Item>

      <Form.Item<FieldType>
        label="Number"
        name="number"
        rules={[{ required: true, message: "Number is required" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Show On Front"
        name="showOnFront"
        rules={[{ required: true, message: "Show on front is required" }]}
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
