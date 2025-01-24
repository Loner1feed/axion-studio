import { AdvantageTypes, PaginationParams } from "@utils/types";
import $api from "./axios.service";

export class AdvantagesService {
  static getAll() {
    return $api.get("/advantages");
  }

  static getById(id: string) {
    return $api.get(`/advantages/${id}/`);
  }

  static getWithParams(params: PaginationParams) {
    return $api.post("/advantages", params);
  }

  static create(data: AdvantageTypes) {
    return $api.post("/advantages/create", data);
  }

  static update(id: string, data: AdvantageTypes) {
    return $api.put(`/advantages/${id}/`, data);
  }

  static deleteById(id: string) {
    return $api.delete(`advantages/${id}/`);
  }
}
