import { FaqTypes, PaginationParams } from "@utils/types";
import $api from "./axios.service";

export class FaqService {
  static getAll() {
    return $api.get("/faq");
  }

  static getById(id: string) {
    return $api.get(`/faq/${id}`);
  }

  static getWithParams(params: PaginationParams) {
    return $api.post("/faq", params);
  }

  static create(data: FaqTypes) {
    return $api.post("/faq/create", data);
  }

  static update(id: string, data: FaqTypes) {
    return $api.put(`/faq/${id}`, data);
  }

  static deleteById(id: string) {
    return $api.delete(`/faq/${id}`);
  }
}
