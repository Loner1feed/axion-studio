import { PaginationResponse } from ".";

export interface ProjectType {
  id?: string;
  title: string;
  paragraph: string;
  iconName: string;
  showOnFront: boolean;
}

export type ProjectTypeResponse = PaginationResponse<ProjectType>;
