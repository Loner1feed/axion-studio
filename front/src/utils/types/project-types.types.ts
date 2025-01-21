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
  paragraph: string;
  icon: string;
  background: string;
  order: number;
  showOnFront?: boolean;
}
