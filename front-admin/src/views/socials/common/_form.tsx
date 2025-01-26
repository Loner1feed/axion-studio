import { SocialTypes } from "@utils/types";
import { Button, ColorPicker, Form, FormProps, Input, Switch } from "antd";
import React, { useState } from "react";

interface SocialsFormProps {
  form?: any;
  onFinish: FormProps["onFinish"];
  loading?: boolean;
  isEdit?: boolean;
}

export interface FieldType extends SocialTypes {}

export const SocialsForm: React.FC<SocialsFormProps> = ({
  onFinish,
  form,
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
        label="Backdrop color"
        name="backdropColor"
        rules={[{ required: true, message: "Backdrop color is required" }]}
        getValueFromEvent={(color) => {
          return "#" + color.toHex();
        }}
      >
        <ColorPicker size="large" showText />
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
