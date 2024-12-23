import { $api } from "./axios.service";

export class ApiService {
  static getProjectTypes() {
    return $api.get("/projectTypes");
  }
}
