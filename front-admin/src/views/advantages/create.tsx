import { FormProps, useForm } from "antd/es/form/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdvantagesForm, FieldType } from "./common/_form";
import { AdvantagesService } from "@utils/services";
import { AxiosError, AxiosResponse } from "axios";
import { Card, message } from "antd";

export const AdvantagesCreate = () => {
  // hooks
  const [form] = useForm();
  const navigate = useNavigate();

  // state
  const [loading, setLoading] = useState(false);

  const handleFormFinish: FormProps<FieldType>["onFinish"] = (values) => {
    setLoading(true);
    AdvantagesService.create(values)
      .then((res: AxiosResponse) => {
        if (res.status === 200) {
          message.success("Process successfully created!");
          navigate("../", { replace: true });
        }
      })
      .catch((e: AxiosError) => {
        message.error("Can't create Process");
        console.log(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Card title="Create Advantage Item" loading={loading}>
      <AdvantagesForm form={form} onFinish={handleFormFinish} isEdit={false} />
    </Card>
  );
};
