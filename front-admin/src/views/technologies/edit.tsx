import { TechnologyTypes } from "@utils/types";
import { FormProps, useForm } from "antd/es/form/Form";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FieldType, TechnologiesForm } from "./common/_form";
import { TechnologiesService } from "@utils/services";
import { AxiosError, AxiosResponse } from "axios";
import { Card, message } from "antd";

export const TechnologiesEdit: React.FC = () => {
  // hooks
  const { itemId } = useParams();
  const [form] = useForm<TechnologyTypes>();
  const navigate = useNavigate();

  // state
  const [loading, setLoading] = useState(false);

  const setDataToForm = (data: TechnologyTypes) => {
    form.setFieldsValue({
      title: data.title,
      paragraph: data.paragraph,
      iconName: data.iconName,
      showOnFront: data.showOnFront,

      href: data.href,
      backdropColor: data.backdropColor,
    });
  };

  const handleFormFinish: FormProps<FieldType>["onFinish"] = (values) => {
    if (itemId) {
      setLoading(true);
      TechnologiesService.update(itemId, values)
        .then((res: AxiosResponse) => {
          if (res.status === 200) {
            message.success("echnology successfully updated!");
            navigate("../", { replace: true });
          }
        })
        .catch((e: AxiosError) => {
          message.error("Can't update echnology");
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
      TechnologiesService.getById(itemId)
        .then((res: AxiosResponse<TechnologyTypes>) => {
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
    <Card title="Edit Technology" loading={loading}>
      <TechnologiesForm form={form} onFinish={handleFormFinish} isEdit={true} />
    </Card>
  );
};
