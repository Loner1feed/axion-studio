import { FormProps, useForm } from "antd/es/form/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FieldType, SocialsForm } from "./common/_form";
import { SocialsService } from "@utils/services";
import { AxiosError, AxiosResponse } from "axios";
import { Card, message } from "antd";

export const SocialsCreate = () => {
  // hooks
  const [form] = useForm();
  const navigate = useNavigate();

  // state
  const [loading, setLoading] = useState(false);

  const handleFormFinish: FormProps<FieldType>["onFinish"] = (values) => {
    setLoading(true);
    SocialsService.create(values)
      .then((res: AxiosResponse) => {
        if (res.status === 200) {
          message.success("Project Type successfully created!");
          navigate("../", { replace: true });
        }
      })
      .catch((e: AxiosError) => {
        message.error("Can't create Project Type");
        console.log(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Card title="Create Project Type" loading={loading}>
      <SocialsForm form={form} onFinish={handleFormFinish} isEdit={false} />
    </Card>
  );
};
