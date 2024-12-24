import { FeedbackTypes } from "@utils/types";
import { FormProps, useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FeedbackForm, FieldType } from "./common/_form";
import { FeedbackService } from "@utils/services";
import { AxiosError, AxiosResponse } from "axios";
import { Card, message } from "antd";

export const FeedbackEdit = () => {
  // hooks
  const { itemId } = useParams();
  const [form] = useForm<FeedbackTypes>();
  const navigate = useNavigate();

  // state
  const [loading, setLoading] = useState(false);

  const setDataToForm = (data: FeedbackTypes) => {
    form.setFieldsValue({
      name: data.name,
      surname: data.surname,
      email: data.email,
      message: data.message,
      addInfo: data.addInfo,
      contacted: data.contacted,
    });
  };

  const handleFormFinish: FormProps<FieldType>["onFinish"] = (values) => {
    if (itemId) {
      setLoading(true);
      FeedbackService.update(itemId, values)
        .then((res: AxiosResponse) => {
          if (res.status === 200) {
            message.success("Feedback item successfully updated!");
            navigate("../", { replace: true });
          }
        })
        .catch((e: AxiosError) => {
          message.error("Can't update Feedback item");
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
      FeedbackService.getById(itemId)
        .then((res: AxiosResponse<FeedbackTypes>) => {
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
    <Card title="Edit Feedback entry" loading={loading}>
      <FeedbackForm form={form} onFinish={handleFormFinish} isEdit={true} />
    </Card>
  );
};
