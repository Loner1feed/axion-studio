import { FeedbackShort } from "../types";
import { $api } from "./axios.service";

export class ApiService {
  static getProjectTypes() {
    return $api.get("/projectTypes");
  }

  static getTechnologies() {
    return $api.get("/technologies");
  }

  static getProcesses() {
    return $api.get("/processes");
  }

  static sendFeedback(data: FeedbackShort) {
    return $api.post("/feedback/create", data);
  }
}
