import { ITask } from "./tasks.interface";

export interface IPictures {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface IUser {
  id: string;
  name: string;
  company: string;
  dob: string;
  address: string;
  tasks: ITask[];
  roles: string[];
  picture: IPictures;
}
