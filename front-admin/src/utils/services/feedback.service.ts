import { FeedbackTypes, PaginationParams } from "@utils/types";
import $api from "./axios.service";

export class FeedbackService {
  static getAll() {
    return $api.get("/feedback");
  }

  static getById(id: string) {
    return $api.get(`feedback/${id}/`);
  }

  static getWithParams(params: PaginationParams) {
    return $api.post("feedback/", params);
  }

  static create(data: FeedbackTypes) {
    return $api.post("/feedback/create", data);
  }

  static update(id: string, data: FeedbackTypes) {
    return $api.put(`feedback/${id}/`, data);
  }

  static deleteById(id: string) {
    return $api.delete(`feedback/${id}/`);
  }
}
