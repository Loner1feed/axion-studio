/*
GET /technologies/ get all
GET /technologies/:id/ get by id
POST /technologies/ get with params
POST /technologies/create/ create
PUT /technologies/:id/ update by id
DELETE /technologies/:id/ delete by id
*/

import { PaginationParams, TechnologyTypes } from "@utils/types";
import $api from "./axios.service";

export class TechnologiesService {
  static getAll() {
    return $api.get("/technologies/");
  }

  static getById(id: string) {
    return $api.get(`/technologies/${id}/`);
  }

  static getWithParams(params: PaginationParams) {
    return $api.post("/technologies/", params);
  }

  static deleteById(id: string) {
    return $api.delete(`/technologies/${id}/`);
  }

  static update(id: string, data: TechnologyTypes) {
    return $api.put(`/technologies/${id}/`, data);
  }

  static create(data: TechnologyTypes) {
    return $api.post("technologies/create/", data);
  }
}
