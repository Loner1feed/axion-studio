import { Card, message } from "antd";
import React, { useState } from "react";
import { FieldType, TechnologiesForm } from "./common/_form";
import { FormProps, useForm } from "antd/es/form/Form";
import { useNavigate } from "react-router-dom";
import { TechnologiesService } from "@utils/services/technologies.service";
import { AxiosError, AxiosResponse } from "axios";

export const TechnologiesCreate: React.FC = () => {
  //hooks
  const [form] = useForm();
  const navigate = useNavigate();

  // state
  const [loading, setLoading] = useState(false);

  const handleFormFinish: FormProps<FieldType>["onFinish"] = (values) => {
    setLoading(true);
    TechnologiesService.create(values)
      .then((res: AxiosResponse) => {
        if (res.status === 200) {
          message.success("Technology successfully created!");
          navigate("../", { replace: true });
        }
      })
      .catch((e: AxiosError) => {
        message.error("Can't create Technology");
        console.log(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Card title="Create Technology" loading={loading}>
      <TechnologiesForm
        form={form}
        onFinish={handleFormFinish}
        isEdit={false}
      />
    </Card>
  );
};
