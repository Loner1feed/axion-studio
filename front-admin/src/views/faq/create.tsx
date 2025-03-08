import { FormProps, useForm } from "antd/es/form/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FieldType, FaqForm } from "./common/_form";
import { FaqService } from "@utils/services";
import { AxiosError, AxiosResponse } from "axios";
import { Card, message } from "antd";

export const FaqCreate = () => {
  // hooks
  const [form] = useForm();
  const navigate = useNavigate();

  // state
  const [loading, setLoading] = useState(false);

  const handleFormFinish: FormProps<FieldType>["onFinish"] = (values) => {
    setLoading(true);
    FaqService.create(values)
      .then((res: AxiosResponse) => {
        if (res.status === 200) {
          message.success("FAQ item successfully created!");
          navigate("../", { replace: true });
        }
      })
      .catch((e: AxiosError) => {
        message.error("Can't create FAQ item");
        console.log(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Card title="Create FAQ item" loading={loading}>
      <FaqForm form={form} onFinish={handleFormFinish} isEdit={false} />
    </Card>
  );
};
