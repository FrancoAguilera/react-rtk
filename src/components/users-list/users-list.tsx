import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store/store";
import { IUser } from "../../interfaces";

export const UsersList = () => {
  const users = useSelector((state: RootState) => state.users);

  const usersList = users.map((user: IUser) => (
    <div
      key={user.id}
      className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Name: {user.name}</h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Company: {user.company}</p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Roles: {user.roles}</p>

      <a
        href="#"
        className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        View Tasks
      </a>
    </div>
  ));

  return <ul className="grid grid-cols-4 gap-4 mx-5">{usersList}</ul>;
};
