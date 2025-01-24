import { PaginationParams, ProjectType } from "@utils/types";
import $api from "./axios.service";

export class ProjectTypesService {
  static getAll() {
    return $api.get("/projectTypes");
  }

  static getById(id: string) {
    return $api.get(`projectTypes/${id}/`);
  }

  static getWithParams(params: PaginationParams) {
    return $api.post("projectTypes/", params);
  }

  static deleteById(id: string) {
    return $api.delete(`projectTypes/${id}/`);
  }

  static update(id: string, data: ProjectType) {
    return $api.put(`/projectTypes/${id}/`, data);
  }

  static create(data: ProjectType) {
    return $api.post("/projectTypes/create", data);
  }
}
