import { ObjectId } from "mongodb";
import { PaginationResponse } from "./other.types";

export interface FeedbackTypes extends FeedbackShort {
  addInfo?: string;
  contacted?: boolean;
  dateCreated: string;
}

export interface FeedbackShort {
  _id?: ObjectId;
  name: string;
  surname: string;
  email: string;
  message?: string;
}

export type FeedbackResponse = PaginationResponse<FeedbackTypes>;
