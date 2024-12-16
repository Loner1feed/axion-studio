import { PaginationResponse } from "./other.types";

export interface AdvantageTypes {
  id?: string;
  heading: string;
  subheading: string;
  paragraph: string;
  videoUrl: string;
}

export type AdvantagesResponse = PaginationResponse<AdvantageTypes>;
