import { Card, message } from "antd";
import { FieldType, ProjectTypesForm } from "./common/_form";
import { FormProps, useForm } from "antd/es/form/Form";
import { useNavigate } from "react-router";
import { useState } from "react";
import { ProjectTypesService } from "@utils/services";
import { AxiosError, AxiosResponse } from "axios";

export const ProjectTypesCreate: React.FC = () => {
  // hooks
  const [form] = useForm();
  const navigate = useNavigate();

  // state
  const [loading, setLoading] = useState(false);

  const handleFormFinish: FormProps<FieldType>["onFinish"] = (values) => {
    setLoading(true);
    ProjectTypesService.create(values)
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
      <ProjectTypesForm
        form={form}
        onFinish={handleFormFinish}
        isEdit={false}
      />
    </Card>
  );
};
