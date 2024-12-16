import { PaginationParams } from "@utils/types";
import $api from "./axios.service";
import { SocialTypes } from "@utils/types/socials.types";

export class SocialsService {
  static getAll() {
    return $api.get("/socials");
  }

  static getById(id: string) {
    return $api.get(`socials/${id}/`);
  }

  static getWithParams(data: PaginationParams) {
    return $api.post("socials/", data);
  }

  static deleteById(id: string) {
    return $api.delete(`socials/${id}/`);
  }

  static create(data: SocialTypes) {
    return $api.post("socials/create/", data);
  }

  static update(id: string, data: SocialTypes) {
    return $api.put(`socials/${id}/`, data);
  }
}
