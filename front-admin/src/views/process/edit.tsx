import { ProcessTypes } from "@utils/types";
import { FormProps, useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FieldType, ProcessForm } from "./common/_form";
import { ProcessService } from "@utils/services";
import { AxiosError, AxiosResponse } from "axios";
import { Card, message } from "antd";

export const ProcessEdit = () => {
  // hooks
  const { itemId } = useParams();
  const [form] = useForm<ProcessTypes>();
  const navigate = useNavigate();

  // state
  const [loading, setLoading] = useState(false);

  const setDataToForm = (data: ProcessTypes) => {
    form.setFieldsValue({
      title: data.title,
      paragraph: data.paragraph,
      number: data.number,
      showOnFront: data.showOnFront,
    });
  };

  const handleFormFinish: FormProps<FieldType>["onFinish"] = (values) => {
    if (itemId) {
      setLoading(true);
      ProcessService.update(itemId, values)
        .then((res: AxiosResponse) => {
          if (res.status === 200) {
            message.success("Process successfully updated!");
            navigate("../", { replace: true });
          }
        })
        .catch((e: AxiosError) => {
          message.error("Can't update Process");
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
      ProcessService.getById(itemId)
        .then((res: AxiosResponse<ProcessTypes>) => {
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
      <ProcessForm form={form} onFinish={handleFormFinish} isEdit={true} />
    </Card>
  );
};
