import { FaqTypes } from "@utils/types";
import { Button, Form, FormProps, Input, InputNumber, Switch } from "antd";
import { useState } from "react";

export interface FieldType extends FaqTypes {}

interface FaqFormProps {
  form?: any;
  onFinish: FormProps["onFinish"];
  loading?: boolean;
  isEdit?: boolean;
}

export const FaqForm: React.FC<FaqFormProps> = ({
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
        label="Question"
        name="question"
        rules={[{ required: true, message: "Question is required" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Answer"
        name="answer"
        rules={[{ required: true, message: "Answer is required" }]}
      >
        <Input.TextArea autoSize />
      </Form.Item>

      <Form.Item<FieldType>
        label="Order"
        name="order"
        rules={[{ required: true, message: "Order is required" }]}
      >
        <InputNumber />
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
