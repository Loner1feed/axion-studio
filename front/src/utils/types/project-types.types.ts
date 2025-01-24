import { ReactNode } from "react";

export interface ProjectType {
  id?: string;
  title: string;
  paragraph: string;
  iconName: string;
  showOnFront: boolean;
}

export interface ProjectTypeTypes {
  _id?: string;
  title: string;
  subtitle: string;
  paragraph: ReactNode;
  icon: string;
  background: string;
  order: number;
  showOnFront?: boolean;
}
