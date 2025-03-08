import { FaqTypes } from "@utils/types";
import { FormProps, useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FieldType, FaqForm } from "./common/_form";
import { FaqService } from "@utils/services";
import { AxiosError, AxiosResponse } from "axios";
import { Card, message } from "antd";

export const FaqEdit = () => {
  // hooks
  const { itemId } = useParams();
  const [form] = useForm<FaqTypes>();
  const navigate = useNavigate();

  // state
  const [loading, setLoading] = useState(false);

  const setDataToForm = (data: FaqTypes) => {
    form.setFieldsValue({
      question: data.question,
      answer: data.answer,
      order: data.order,
      showOnFront: data.showOnFront,
    });
  };

  const handleFormFinish: FormProps<FieldType>["onFinish"] = (values) => {
    if (itemId) {
      setLoading(true);
      FaqService.update(itemId, values)
        .then((res: AxiosResponse) => {
          if (res.status === 200) {
            message.success("FAQ item successfully updated!");
            navigate("../", { replace: true });
          }
        })
        .catch((e: AxiosError) => {
          message.error("Can't update FAQ item");
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
      FaqService.getById(itemId)
        .then((res: AxiosResponse<FaqTypes>) => {
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
      <FaqForm form={form} onFinish={handleFormFinish} isEdit={true} />
    </Card>
  );
};
