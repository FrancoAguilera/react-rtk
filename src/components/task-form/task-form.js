import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addTask, editTask } from "../../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";

export const TaskForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const params = useParams();
  const tasks = useSelector((state) => state.tasks);

  const [task, setTask] = useState({
    id: uuid(),
    title: "",
    description: "",
  });

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id));
    }
  }, [params.id, tasks]);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: [e.target.value],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const actionTask = params.id ? editTask : addTask;
    dispatch(actionTask(task));
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-zinc-800 mx-w-sm p-4">
      <label htmlFor="title" className="block text-sm font-bold">
        Task:
      </label>
      <input
        name="title"
        type="text"
        placeholder="Tile"
        value={task.title}
        onChange={handleChange}
        className="w-full p-2 rounded-md bg-zinc-600"
      />
      <label htmlFor="description" className="block text-sm font-bold">
        Description:
      </label>
      <textarea
        name="description"
        placeholder="description"
        value={task.description}
        onChange={handleChange}
        className="w-full p-2 rounded-md bg-zinc-600"
      ></textarea>
      <button className="bg-indigo-500 px-2 py-1 text-xs rounded-md self-center">Save</button>
    </form>
  );
};
