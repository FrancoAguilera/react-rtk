import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import type { RootState } from "../../app/store/store";
import { IUser, ITask } from "../../interfaces";

type ITasksProps = {
  tasks: ITask[];
  userId?: string;
};

const Tasks = ({ tasks, userId }: ITasksProps) => <ul></ul>;

export const TaskList = () => {
  return (
    <div className="flex justify-center">
      {/* <div className="p-6 w-1/3 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="pb-5 flex items-center justify-center">
          <img className="rounded-full border border-gray-100" src={user.picture.large} alt="" />
        </div>
        <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Name: {user.name}</h4>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Company: {user.company}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Roles: {user.roles}</p>
        <div className="py-4 flex flex-row-reverse">
          <Link
            to={`/task-form/new/${user.id}`}
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Add Task
          </Link>
        </div>
        <p className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">Current tasks: </p>
        <Tasks tasks={user.tasks} userId={user.id} />
      </div> */}
    </div>
  );
};
