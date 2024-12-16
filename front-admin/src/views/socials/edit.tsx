import { Card, message } from "antd";
import { useEffect, useState } from "react";
import { FieldType, SocialsForm } from "./common/_form";
import { FormProps, useForm } from "antd/es/form/Form";
import { SocialTypes } from "@utils/types";
import { useNavigate, useParams } from "react-router-dom";
import { SocialsService } from "@utils/services";
import { AxiosError, AxiosResponse } from "axios";

export const SocialsEdit = () => {
  const { itemId } = useParams();
  const [form] = useForm<SocialTypes>();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const setDataToForm = (data: SocialTypes) => {
    form.setFieldsValue({
      title: data.title,
      backdropColor: data.backdropColor,
      iconName: data.iconName,
      showOnFront: data.showOnFront,
    });
  };

  const handleFormFinish: FormProps<FieldType>["onFinish"] = (values) => {
    if (itemId) {
      setLoading(true);
      SocialsService.update(itemId, values)
        .then((res: AxiosResponse) => {
          if (res.status === 200) {
            message.success("Social successfully updated!");
            navigate("../", { replace: true });
          }
        })
        .catch((e: AxiosError) => {
          message.error("Can't update Social");
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
      SocialsService.getById(itemId)
        .then((res: AxiosResponse<SocialTypes>) => {
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
    <Card title="Edit Social" loading={loading}>
      <SocialsForm form={form} onFinish={handleFormFinish} isEdit={true} />
    </Card>
  );
};
