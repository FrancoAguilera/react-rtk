import React, { useEffect, useState } from "react";
import type { RootState } from "../../app/store/store";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router";
import { ITask } from "../../interfaces";
import { createTask, editTask } from "../../features/tasks/tasksSlice";

import "./index.css";

export const TaskForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks);
  const { taskId, userId } = useParams();
  const [task, setTask] = useState({
    id: -1,
    title: "",
    description: "",
    user_id: -1,
  });

  useEffect(() => {
    let currentTask: ITask;
    if (taskId) {
      currentTask = tasks.find((task) => task.id.toString() === taskId)!;
    } else {
      currentTask = { title: "", description: "", id: Date.now(), user_id: parseInt(userId!) };
    }

    setTask(currentTask);
  }, [taskId, userId, tasks]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTask({
      ...task,
      [e.target.name]: [e.target.value],
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const actionType = taskId ? editTask : createTask;

    dispatch(actionType(task));
    navigate(`/user-tasks/${task.user_id}`);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <form className="col-md-5 task-form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input name="title" type="text" className="form-control" onChange={handleOnChange} value={task.title} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Description
            </label>
            <textarea
              name="description"
              className="form-control"
              rows={6}
              onChange={handleOnChange}
              value={task.description}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};
