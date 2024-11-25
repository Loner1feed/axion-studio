import { ProjectTypesCreate } from "./create";
import { ProjectTypesEdit } from "./edit";
import { ProjectTypesList } from "./list";

const projectTypesRoute = {
  path: "project-types",
  children: [
    // project types list
    {
      index: true,
      element: <ProjectTypesList />,
    },

    // project types create
    {
      path: "create",
      element: <ProjectTypesCreate />,
    },

    // project types edit
    {
      path: "edit",
      element: <ProjectTypesEdit />,
    },
  ],
};

export default projectTypesRoute;
