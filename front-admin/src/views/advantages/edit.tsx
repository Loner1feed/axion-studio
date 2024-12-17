import { AdvantageTypes } from "@utils/types";
import { FormProps, useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { AdvantagesForm, FieldType } from "./common/_form";
import { AdvantagesService } from "@utils/services";
import { AxiosError, AxiosResponse } from "axios";
import { Card, message } from "antd";

export const AdvantagesEdit = () => {
  // hooks
  const { itemId } = useParams();
  const [form] = useForm<AdvantageTypes>();
  const navigate = useNavigate();

  // state
  const [loading, setLoading] = useState(false);

  const setDataToForm = (data: AdvantageTypes) => {
    form.setFieldsValue({
      heading: data.heading,
      subheading: data.subheading,
      paragraph: data.paragraph,
      videoUrl: data.videoUrl,
      showOnFront: data.showOnFront,
    });
  };

  const handleFormFinish: FormProps<FieldType>["onFinish"] = (values) => {
    if (itemId) {
      setLoading(true);
      AdvantagesService.update(itemId, values)
        .then((res: AxiosResponse) => {
          if (res.status === 200) {
            message.success("Advantage item successfully updated!");
            navigate("../", { replace: true });
          }
        })
        .catch((e: AxiosError) => {
          message.error("Can't update Advantage item");
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
      AdvantagesService.getById(itemId)
        .then((res: AxiosResponse<AdvantageTypes>) => {
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
    <Card title="Edit Advantage Item" loading={loading}>
      <AdvantagesForm form={form} onFinish={handleFormFinish} isEdit={true} />
    </Card>
  );
};
