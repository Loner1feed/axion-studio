export interface FeedbackTypes extends FeedbackShort {
  addInfo?: string;
  contacted?: boolean;
}

export interface FeedbackShort {
  name: string;
  surname: string;
  email: string;
  message?: string;
}
