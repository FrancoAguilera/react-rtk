import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store/store";
import { IUser } from "../../interfaces";
import { Link } from "react-router-dom";

import "./index.css";

export const UsersList = () => {
  const users = useSelector((state: RootState) => state.users);

  const usersCards = users.map((user: IUser) => (
    <div key={user.id} className="card card-item">
      <div className="profile-container">
        <img src={user.profile_pic} alt="Profile pic" className="profile-pic" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{`${user.first_name} ${user.last_name}`}</h5>
        <p className="card-text">{user.email}</p>
        <Link to={`/user-tasks/${user.id}`} className="btn btn-primary">
          View Tasks
        </Link>
      </div>
    </div>
  ));

  return <ul className="container cards-container">{usersCards}</ul>;
};
