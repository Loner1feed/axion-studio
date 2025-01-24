import { PaginationResponse } from "./other.types";

export interface TechnologyTypes {
  id?: string;
  iconName: string;
  title: string;
  paragraph: string;
  backdropColor: string;
  href: string;
  showOnFront: boolean;
}

export type TechnologiesResponse = PaginationResponse<TechnologyTypes>;
