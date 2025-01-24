import { PaginationResponse } from "./other.types";

export interface AdvantageTypes {
  id?: string;
  heading: string;
  subheading: string;
  paragraph: string;
  videoUrl: string;
  showOnFront: boolean;
}

export type AdvantagesResponse = PaginationResponse<AdvantageTypes>;
