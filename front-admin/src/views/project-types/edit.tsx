import { ProjectTypesService } from "@utils/services";
import { ProjectType } from "@utils/types";
import { Card, message } from "antd";
import { FormProps, useForm } from "antd/es/form/Form";
import { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FieldType, ProjectTypesForm } from "./common/_form";

export const ProjectTypesEdit: React.FC = () => {
  // hooks
  const { itemId } = useParams();
  const [form] = useForm<ProjectType>();
  const navigate = useNavigate();

  // state
  const [loading, setLoading] = useState(false);

  const setDataToForm = (data: ProjectType) => {
    form.setFieldsValue({
      title: data.title,
      subtitle: data.subtitle,
      order: data.order,
      paragraph: data.paragraph,
      icon: data.icon,
      showOnFront: data.showOnFront,
    });
  };

  const handleFormFinish: FormProps<FieldType>["onFinish"] = (values) => {
    if (itemId) {
      setLoading(true);
      ProjectTypesService.update(itemId, values)
        .then((res: AxiosResponse) => {
          if (res.status === 200) {
            message.success("Project Type successfully updated!");
            navigate("../", { replace: true });
          }
        })
        .catch((e: AxiosError) => {
          message.error("Can't update Project Type");
          console.log(e.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  // fetch data
  useEffect(() => {
    if (itemId) {
      setLoading(true);
      ProjectTypesService.getById(itemId)
        .then((res: AxiosResponse<ProjectType>) => {
          if (res.status === 200) {
            setDataToForm(res.data);
          }
        })
        .catch((e: AxiosError) => {
          message.error("Server error. Can't receive data");
          console.log(e.message);
        })
        .finally(() => setLoading(false));
    }
  }, [itemId]);

  return (
    <Card title="Edit Project Type" loading={loading}>
      <ProjectTypesForm form={form} onFinish={handleFormFinish} isEdit={true} />
    </Card>
  );
};
