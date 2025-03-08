"use client";

import { Transition, Variants } from "framer-motion";
import { ProjectTypesGrid } from "./common/grid";
import styles from "./project-types-new.module.scss";
import { Container } from "../container/contaner";
import { FadeInOnView, Heading } from "../../common";
import { useTranslations } from "@/src/utils/hooks";
import { ActionBanner } from "../action-banner/action-banner";

export interface ProjectTypeTypes {
  _id?: string;
  title: string;
  subtitle: string;
  paragraph: string;
  icon: string;
  background: string;
  order: number;
  showOnFront?: boolean;
}

export const projectTypesMockData = [
  {
    _id: "asdasdasasdasd1231",
    title: "Websites",
    subtitle: "Some test subtitle for websites",
    paragraph: `
    <ol>
    <li>Сайт привлекает целевую аудиторию через поисковые системы, социальные сети и другие каналы, увеличивая трафик и потенциальные продажи.</li>
    <li>Оптимизированная структура сайта помогает превращать посетителей в клиентов благодаря удобному интерфейсу и информативным решениям.</li>
    <li>Профессиональный и современный сайт укрепляет имидж компании, что способствует повышению доверия и клиентской лояльности.</li>
    <li>Сайт предоставляет круглосуточный доступ к информации и услугам, экономя время и ресурсы клиента.</li>
    <li>Разработка современного и функционального сайта выделяет ваш бизнес среди конкурентов, обеспечивая долгосрочный успех.</li>
</ol>

    `,
    icon: "https://res.cloudinary.com/dxog3icww/image/upload/v1737397506/yxoile2ahcyyyyl1bunj.svg",
    background:
      "linear-gradient(90deg, rgba(139,95,191,1) 0%, rgba(28,26,66,1) 100%)",
    order: 1,
    showOnFront: true,
  },

  {
    _id: "asdasdasasdasd123sss1",
    title: "Websites",
    subtitle: "Some test subtitle for websites",
    paragraph: "Some test paragraph",
    icon: "https://res.cloudinary.com/dxog3icww/image/upload/v1737397506/yxoile2ahcyyyyl1bunj.svg",
    background:
      "linear-gradient(90deg, rgba(139,95,191,1) 0%, rgba(28,26,66,1) 100%)",
    order: 1,
    showOnFront: true,
  },
];

export const layoutTransition: Transition = {
  duration: 0.3,
  delay: 0.4,
  velocity: 1,
};

export const contentVariants: Variants = {
  hidden: {
    opacity: 0,
    visibility: "hidden",
    transition: {
      duration: 0.2,
      delay: 0,
    },
  },

  visible: {
    opacity: 1,
    visibility: "visible",
    transition: {
      duration: 0.2,
      delay: 0.6,
    },
  },
};

interface ProjectTypesNewProps {
  data: ProjectTypeTypes[];
}

export const ProjectTypesNew: React.FC<ProjectTypesNewProps> = ({ data }) => {
  const t = useTranslations();

  return (
    <div className={styles.projectTypes}>
      <Container>
        <FadeInOnView>
          <Heading className={styles.title}>{t.projectTypes.heading}</Heading>
        </FadeInOnView>
        <ProjectTypesGrid data={data} />
        <FadeInOnView>
          <ActionBanner className={styles.banner}>
            Didn’t find a service that suits your needs? <br />
            <span className={styles.highlight}>Contact us</span> to get a
            personal offer! adaasdsaasdasdasdadsdadad s da dad das dassdasdda
          </ActionBanner>
        </FadeInOnView>
      </Container>
    </div>
  );
};
