import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import styles from "./form.module.scss";
import { TextInput } from "../text-input/text-input";
import { FormBackdrop } from "./common/form-backdrop";
import { Button } from "../button/button";
import { ApiService } from "@/src/utils/services";
import { FeedbackShort } from "@/src/utils/types";
import { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";
import { EndScreen } from "./common/end-screen";
import { useTranslations } from "@/src/utils/hooks";

interface FormValues {
  name: string;
  surname: string;
  email: string;
  message: string;
}

export const formContentVariants = {
  visible: { opacity: 1, pointerEvents: "all" },
  hidden: { opacity: 0, pointerEvents: "none" },
};

export const Form: React.FC = () => {
  const t = useTranslations();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(t.form.errors.name.required),
    surname: Yup.string().required(t.form.errors.surname.required),
    email: Yup.string()
      .email(t.form.errors.email.invalid)
      .required(t.form.errors.email.required),
    message: Yup.string().required(t.form.errors.message.required),
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const initialValues: FormValues = {
    email: "",
    message: "",
    name: "",
    surname: "",
  };

  const submitHandler = (
    values: FeedbackShort,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    setLoading(true);
    ApiService.sendFeedback(values)
      .then((res: AxiosResponse) => {
        if (res.status === 200) {
          console.log(res.data);
          setSubmitted(true);
          resetForm();
        }
      })
      .catch((e: AxiosError) => {
        console.log(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={submitHandler}
    >
      {({ values, errors, touched, handleChange, handleSubmit }) => (
        <form className={styles.form} onSubmit={handleSubmit}>
          <FormBackdrop />
          <EndScreen visible={submitted} />
          <motion.div
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            variants={formContentVariants}
            initial="visible"
            animate={submitted ? "hidden" : "visible"}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.row}>
              <TextInput
                placeholder={t.form.placeholders.name}
                className={styles.input}
                name="name"
                value={values.name}
                onChange={handleChange}
                error={errors.name && touched.name ? errors.name : ""}
              />
              <TextInput
                placeholder={t.form.placeholders.surname}
                className={styles.input}
                name="surname"
                value={values.surname}
                onChange={handleChange}
                error={errors.surname && touched.surname ? errors.surname : ""}
              />
            </div>
            <TextInput
              placeholder={t.form.placeholders.email}
              className={styles.input}
              name="email"
              value={values.email}
              onChange={handleChange}
              error={errors.email && touched.email ? errors.email : ""}
            />
            <TextInput
              placeholder={t.form.placeholders.message}
              className={styles.textarea}
              textarea
              name="message"
              value={values.message}
              onChange={handleChange}
              error={errors.message && touched.message ? errors.message : ""}
            />

            <Button
              type="submit"
              className={styles.btn}
              disabled={loading}
              label={t.form.submit}
            />
          </motion.div>
        </form>
      )}
    </Formik>
  );
};
