import { UserData } from "../types";
import $api from "./axios.service";

export class UsersService {
  static login(creds: UserData) {
    return $api.post("/users/login", creds);
  }
}
