import { ITask } from "./tasks.interface";

export interface IUser {
  id: string;
  name: string;
  company: string;
  dob: string;
  address: string;
  tasks: Array<ITask>;
  roles: Array<string>;
}
