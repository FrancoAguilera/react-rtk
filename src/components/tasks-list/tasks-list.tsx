import React from "react";
import type { RootState } from "../../app/store/store";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { ITask, IUser } from "../../interfaces";
import { deleteTask } from "../../features/tasks/tasksSlice";

import "./index.css";

export const TaskList = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const { tasks, users } = useSelector((state: RootState) => state);

  const userTasks = tasks.filter((task: ITask) => task.user_id.toString() === userId);
  const user: IUser = users.find((user: IUser) => user.id.toString() === userId)!;

  const handleDeleteTask = (taskId: number) => {
    dispatch(deleteTask(taskId));
  };

  const userProfile = (
    <>
      <img src={user?.profile_pic} className="profile-pic" alt="Profile user pic" />
      <div className="profile-data">
        <p className="profile-name">Name: {`${user.first_name} ${user.last_name}`}</p>
        <p className="profile-email">Email: {user.email}</p>
      </div>
    </>
  );

  const userTasksList = userTasks.map((userTask) => (
    <div key={userTask.id} className="card text-dark bg-light card-item">
      <div className="card-header">
        <h4>{userTask.title}</h4>
      </div>

      <div className="card-body">
        <p className="card-text">{userTask.description}</p>
      </div>

      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <Link to={`/task-form/${userTask.id}`}>
          <button className="btn btn-outline-primary">Edit</button>
        </Link>
        <button
          onClick={() => {
            handleDeleteTask(userTask.id);
          }}
          className="btn btn-outline-danger"
        >
          Delete
        </button>
      </div>
    </div>
  ));

  return (
    <div className="container">
      <div className="profile-container">{userProfile}</div>
      <ul className="container cards-container">{userTasksList}</ul>
    </div>
  );
};
