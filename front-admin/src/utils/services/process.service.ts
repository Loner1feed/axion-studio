import { PaginationParams, ProcessTypes } from "@utils/types";
import $api from "./axios.service";

export class ProcessService {
  static getAll() {
    return $api.get("/processes");
  }

  static getById(id: string) {
    return $api.get(`processes/${id}/`);
  }

  static getWithParams(params: PaginationParams) {
    return $api.post("processes/", params);
  }

  static deleteById(id: string) {
    return $api.delete(`processes/${id}/`);
  }

  static update(id: string, data: ProcessTypes) {
    return $api.put(`processes/${id}/`, data);
  }

  static create(data: ProcessTypes) {
    return $api.post("/processes/create", data);
  }
}
