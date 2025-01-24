import { PaginationResponse } from ".";

export interface ProjectType {
  id?: string;
  title: string;
  subtitle: string;
  paragraph: string;
  icon: string;
  order: number;
  showOnFront: boolean;
}

export type ProjectTypeResponse = PaginationResponse<ProjectType>;
