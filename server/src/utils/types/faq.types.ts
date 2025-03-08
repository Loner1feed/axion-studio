import { PaginationResponse } from "./other.types";

export interface FaqTypes {
  id?: string;
  question: string;
  answer: string;
  showOnFront: string;
  order: string;
}

export type FaqResponse = PaginationResponse<FaqTypes>;
