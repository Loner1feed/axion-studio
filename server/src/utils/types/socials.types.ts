import { PaginationResponse } from "./other.types";

export interface SocialTypes {
  id?: string;
  title: string;
  backdropColor: string;
  iconName: string;
  showOnFront: boolean;
}

export type SocialsResponse = PaginationResponse<SocialTypes>;
