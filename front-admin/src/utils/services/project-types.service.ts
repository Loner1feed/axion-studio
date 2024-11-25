import $api from "./axios.service";

export class ProjectTypesService {
  static getAll() {
    return $api.get("/");
  }

  static getById(id: string) {
    return $api.get(`/${id}/`);
  }

  // static getWithParams(params: ) {

  // }
}
