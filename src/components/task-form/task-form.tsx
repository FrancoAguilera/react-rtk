import React, { FormEventHandler } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../app/store/store";
import { ITask } from "../../interfaces";
import { createUserTask, editUserTask } from "../../features/tasks/usersSlice";
import { v4 as uuidv4 } from "uuid";
/*
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
*/
//import { addTask, editTask } from "../../features/tasks/taskSlice";

export const TaskForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userId, taskId } = useParams();
  const users = useSelector((state: RootState) => state.users);

  useEffect(() => {
    if (!taskId) return;
    const user = users.find((user) => user.id === userId);

    if (!user) return;
    const task = user.tasks.find((task) => task.id === taskId);

    if (!task) return;
    setTask(task);
  }, [taskId, users]);

  const [task, setTask] = useState<ITask>({
    id: uuidv4(),
    title: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTask({
      ...task,
      [e.target.name]: [e.target.value],
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userTask = {
      ...task,
      userId,
    };

    const actionType = taskId ? editUserTask : createUserTask;

    dispatch(actionType(userTask));
    navigate(`/user-tasks/${userId}`);
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="bg-zinc-800 w-1/3 p-4">
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
        />
        <div className="py-3 flex flex-row-reverse">
          <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            {taskId ? "Save Edit" : "Save Task"}
          </button>
        </div>
      </form>
    </div>
  );
};
