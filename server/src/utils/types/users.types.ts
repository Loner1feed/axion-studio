import { ObjectId } from "mongodb";

export interface User {
  username: string;
  password: string;
  id?: ObjectId;
}
