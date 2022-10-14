import React, { useEffect, useState } from "react";
import type { RootState } from "../../app/store/store";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router";
// import { v4 as uuidv4 } from "uuid";
import { ITask } from "../../interfaces";
import { editTask } from "../../features/tasks/tasksSlice";

import "./index.css";

export const TaskForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks);

  const { taskId } = useParams();
  const [task, setTask] = useState({
    id: 0,
    title: "",
    description: "",
    user_id: 0,
  });

  useEffect(() => {
    if (!taskId) return;

    const currentTask: ITask = tasks.find((task) => task.id.toString() === taskId)!;

    setTask(currentTask);
  }, [taskId, tasks]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTask({
      ...task,
      [e.target.name]: [e.target.value],
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (taskId) {
      dispatch(editTask(task));
      navigate(`/user-tasks/${task.user_id}`);
    }
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
            Save Task
          </button>
        </form>
      </div>
    </div>
  );
};
