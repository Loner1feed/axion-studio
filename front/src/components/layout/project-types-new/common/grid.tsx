"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ProjectTypeTypes } from "@/src/utils/types";
import { ProjectTypeOpen } from "./project-type-open";
import { ProjectType } from "./project-type";
import styles from "../project-types-new.module.scss";

interface ProjectTypesGridProps {
  data?: ProjectTypeTypes[];
}

export const ProjectTypesGrid: React.FC<ProjectTypesGridProps> = ({ data }) => {
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      if (index !== null) {
        html.className = "no-scroll";
      } else {
        html.className = "";
      }
    }
  }, [index]);

  return (
    <>
      <AnimatePresence>
        {index !== null && (
          <ProjectTypeOpen
            data={
              typeof index === "number" && mockedData ? mockedData[index] : null
            }
            setOpen={setIndex}
            index={index}
          />
        )}
      </AnimatePresence>
      <div className={styles.grid}>
        {mockedData
          ?.filter((el) => el.showOnFront)
          .sort((a, b) => a.order - b.order)
          .map((el, i) => (
            <ProjectType
              key={`project-type-${i}`}
              open={typeof index === "number" && index === i}
              setOpen={setIndex}
              index={i}
              background={el.background}
              icon={data?.[i]?.icon}
              subtitle={el.subtitle}
              title={el.title}
            />
          ))}
      </div>
    </>
  );
};

const mockedData: Omit<ProjectTypeTypes, "icon">[] = [
  {
    title: "Сайты",
    subtitle: "Превращай лиды в прибыль!",
    paragraph: (
      <ol>
        <li>
          Сайт привлекает целевую аудиторию через поисковые системы, социальные
          сети и другие каналы, увеличивая трафик и потенциальные продажи.
        </li>
        <li>
          Оптимизированная структура сайта помогает превращать посетителей в
          клиентов благодаря удобному интерфейсу и информативным решениям.
        </li>
        <li>
          Профессиональный и современный сайт укрепляет имидж компании, что
          способствует повышению доверия и клиентской лояльности.
        </li>
        <li>
          Сайт предоставляет круглосуточный доступ к информации и услугам,
          экономя время и ресурсы клиента.
        </li>
        <li>
          Разработка современного и функционального сайта выделяет ваш бизнес
          среди конкурентов, обеспечивая долгосрочный успех.
        </li>
      </ol>
    ),
    background:
      "linear-gradient(135deg, rgba(139,95,191,1) 0%, rgba(28,26,66,1) 100%)",
    order: 1,
    showOnFront: true,
  },
  {
    title: "Приложения",
    subtitle: "Создайте прибыльное приложение с подпиской!",
    paragraph: (
      <ol>
        <li>
          Основной инструмент для вашего стартапа – приложение помогает решить
          проблему вашей аудитории и предоставляет ваш продукт или услугу в
          удобной форме.
        </li>
        <li>
          Быстрое тестирование идей – приложение позволяет быстро проверить
          гипотезы и получить обратную связь от пользователей.
        </li>
        <li>
          Привлечение инвесторов – инвесторы доверяют стартапам с готовыми
          продуктами, и приложение демонстрирует вашу готовность к запуску и
          масштабированию.
        </li>
        <li>
          Скорость выхода на рынок – с приложением ваш стартап сможет быстрее
          запустить продукт и начать зарабатывать.
        </li>
      </ol>
    ),
    background: "linear-gradient(135deg, #F8A23E 0%, #671A1A 100%)",
    order: 1,
    showOnFront: true,
  },
  {
    title: "Чат-боты",
    subtitle: "Оптимизируй процессы!",
    paragraph: (
      <ol>
        <li>
          Автоматизация взаимодействия с клиентами: Чат-бот может круглосуточно
          отвечать на вопросы клиентов, предоставлять информацию, обрабатывать
          заявки и даже помогать с оплатой товаров и услуг. Это снижает нагрузку
          на сотрудников, позволяя им сосредоточиться на более сложных задачах.
        </li>
        <li>
          Увеличение конверсии: Чат-боты позволяют мгновенно реагировать на
          запросы клиентов, что повышает вероятность покупки или оформления
          заявки. Чем быстрее человек получит ответ, тем выше шанс, что он
          завершит покупку или воспользуется услугой.
        </li>
        <li>
          Привлечение инвесторов – инвесторы доверяют стартапам с готовыми
          продуктами, и приложение демонстрирует вашу готовность к запуску и
          масштабированию.
        </li>
        <li>
          Масштабируемость и гибкость: Чат-боты могут обслуживать одновременно
          тысячи клиентов, не теряя качества обслуживания. Их функциональность
          легко масштабируется под рост компании и изменения потребностей.
        </li>
      </ol>
    ),
    background: "linear-gradient(135deg, #2E8B57 0%, #0D1E26 100%)",
    order: 1,
    showOnFront: true,
  },
];
