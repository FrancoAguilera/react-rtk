import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import type { RootState } from "../../app/store/store";
import { IUser, ITask } from "../../interfaces";

type ITasksProps = {
  tasks: ITask[];
};

const Tasks = ({ tasks }: ITasksProps) => (
  <ul>
    {tasks.map((task) => (
      <li key={task.id}>
        <p>{task.title}</p>
        <p>{task.description}</p>
      </li>
    ))}
  </ul>
);

export const TaskList = () => {
  let { userId } = useParams();

  const users: Array<IUser> = useSelector((state: RootState) => state.users);
  const user: IUser = users.find((user) => user.id === userId)!;

  return (
    <div
      key={user.id}
      className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
      <div className="pb-5 flex items-center justify-center">
        <img className="rounded-full border border-gray-100" src={user.picture.large} alt="" />
      </div>
      <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Name: {user.name}</h4>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Company: {user.company}</p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Roles: {user.roles}</p>
      <p className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">Current tasks: </p>
      <Tasks tasks={user.tasks} />
    </div>
  );
};
