import { Button, Form, FormProps, Input, Switch } from "antd";
import React, { useState } from "react";

export interface FieldType {
  title: string;
  paragraph: string;
  iconName: string;
  showOnFront: boolean;
}

interface ProjectTypesFormProps {
  form?: any;
  onFinish: FormProps["onFinish"];
  loading?: boolean;
  isEdit?: boolean;
}

export const ProjectTypesForm: React.FC<ProjectTypesFormProps> = ({
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
        label="Icon Name"
        name="iconName"
        rules={[{ required: true, message: "Icon name is required" }]}
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
