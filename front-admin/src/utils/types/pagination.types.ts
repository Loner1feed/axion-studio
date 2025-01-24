import { Key } from "react";

export interface PaginationParams {
  page: number;
  pageSize: number;
  paramName: string;
  paramValue: string | number | boolean | Key | bigint;
}

export interface PaginationResponse {
  page: number;
  totalCount: number;
  data: any[];
}
