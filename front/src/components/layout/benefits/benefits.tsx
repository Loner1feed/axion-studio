import React from "react";
import { Container } from "../container/contaner";
import { Heading } from "../../common";
import { useTranslations } from "@/src/utils/hooks";

export const Benefits = () => {
  const translations = useTranslations();
  return (
    <div>
      <Container>
        <Heading>{translations.benefits.heading}</Heading>
      </Container>
    </div>
  );
};
