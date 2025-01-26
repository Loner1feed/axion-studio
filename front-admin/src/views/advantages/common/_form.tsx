import { AdvantageTypes } from "@utils/types";
import { Button, Form, FormProps, Input, Switch } from "antd";
import React, { useState } from "react";

export interface FieldType extends AdvantageTypes {}

interface AdvantagesFormProps {
  form?: any;
  onFinish: FormProps["onFinish"];
  loading?: boolean;
  isEdit?: boolean;
}

export const AdvantagesForm: React.FC<AdvantagesFormProps> = ({
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
        label="Heading"
        name="heading"
        rules={[{ required: true, message: "Heading is required" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Subheading"
        name="subheading"
        rules={[{ required: true, message: "Subheading is required" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Paragraph"
        name="paragraph"
        rules={[{ required: true, message: "Paragraph is required" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Video URL"
        name="videoUrl"
        rules={[{ required: true, message: "Video URL is required" }]}
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
