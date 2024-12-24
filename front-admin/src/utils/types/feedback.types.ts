export interface FeedbackTypes extends FeedbackShort {
  addInfo?: string;
  contacted?: boolean;
  dateCreated: string;
}

export interface FeedbackShort {
  _id?: string;
  name: string;
  surname: string;
  email: string;
  message?: string;
}
