"use client";

import React from "react";

import styles from "./project-types.module.scss";
import { Heading } from "../../common";
import { useTranslations } from "@/src/utils/hooks";
import { Container } from "../container/contaner";
import { FadeInOnView } from "../../common";
import { ProjectGrid } from "./common/project-grid";
import { ProjectType } from "@/src/utils/types";

interface ProjectTypesProps {
  data: ProjectType[];
}
// import { MainPageContext } from "@/src/app/[[...language]]/page.context";

export const ProjectTypes: React.FC<ProjectTypesProps> = ({ data }) => {
  const t = useTranslations();
  // const { revealHeaderOnScrollToElementRef } = useContext(MainPageContext);

  return (
    <FadeInOnView>
      <div
        // ref={revealHeaderOnScrollToElementRef}
        className={styles.projectTypes}
      >
        <Container>
          <Heading className={styles.heading}>{t.projectTypes.heading}</Heading>
          <ProjectGrid data={data} />
        </Container>
      </div>
    </FadeInOnView>
  );
};

// export const ProjectTypes: React.FC = () => {
//   return (
//     <FadeInOnView>
//       <div className={styles.projectTypes}>
//         <Container>
//           <h1></h1>
//           <ProjectGrid data={mockProjectsData} />
//         </Container>
//       </div>
//     </FadeInOnView>
//   );
// };
