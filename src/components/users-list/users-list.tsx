import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store/store";
import { IUser } from "../../interfaces";

export const UsersList = () => {
  const users = useSelector((state: RootState) => state.users);

  const usersList = users.map((user: IUser) => (
    <li key={user.id}>
      <h3>Name: {user.name}</h3>
      <h4>Company: {user.company}</h4>
      <p>Roles: {user.roles}</p>
    </li>
  ));

  return <ul>{usersList}</ul>;
};
