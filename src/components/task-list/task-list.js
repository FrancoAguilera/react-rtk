import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../../features/tasks/taskSlice";

export const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const taskList = tasks.map((task) => (
    <li key={task.id} className="bg-neutral-800 rounded-md px-2 py-3">
      <header className="flex justify-between">
        <h3>{task.title}</h3>
        <div className="flex gap-x-2">
          <Link to={`/edit/${task.id}`}>
            <button className="bg-zinc-500 px-2 py-1 text-xs rounded-md self-center">Edit</button>
          </Link>
          <button className="bg-red-500 px-2 py-1 text-xs rounded-md self-center" onClick={() => handleDelete(task.id)}>
            Delete
          </button>
        </div>
      </header>
      <p>{task.description}</p>
    </li>
  ));

  return <ul className="grid grid-cols-3 gap-4">{taskList}</ul>;
};
