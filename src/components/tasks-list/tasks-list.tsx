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
      <li key={task.id} className="shadow hover:shadow-lg">
        <div>
          <p>
            <b>Title: </b>
            {task.title}
          </p>
          <p className="py-2">
            <b>Description: </b> <br />
            {task.description}
          </p>
        </div>
        <div className="py-4 flex flex-row-reverse">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold mx-2 py-2 px-4 rounded">Delete</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</button>
        </div>
      </li>
    ))}
  </ul>
);

export const TaskList = () => {
  let { userId } = useParams();

  const users: Array<IUser> = useSelector((state: RootState) => state.users);
  const user: IUser = users.find((user) => user.id === userId)!;

  return (
    <div className="flex justify-center">
      <div className="p-6 w-1/3 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="pb-5 flex items-center justify-center">
          <img className="rounded-full border border-gray-100" src={user.picture.large} alt="" />
        </div>
        <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Name: {user.name}</h4>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Company: {user.company}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Roles: {user.roles}</p>
        <p className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">Current tasks: </p>
        <Tasks tasks={user.tasks} />
      </div>
    </div>
  );
};
