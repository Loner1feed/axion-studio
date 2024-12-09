import { PaginationResponse } from "./other.types";

export interface ProcessTypes {
  _id?: any;
  title: string;
  paragraph: string;
  number: string;
}

export type ProcessResponse = PaginationResponse<ProcessTypes>;
