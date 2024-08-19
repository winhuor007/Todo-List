import React, { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";

const TodoForm: React.FC = () => {
  const todoContext = useContext(TodoContext);

  if (!todoContext) {
    throw new Error("TodoContext must be used within a TodoProvider");
  }

  const { addTask } = todoContext;

  const [task, setTask] = useState({
    id: Date.now(),
    level: "high",
    title: "",
    status: "Todo",
    description: "",
  });

  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.title.trim() === "" || task.description.trim() === "") {
      setError("Title and Description are required.");
      return;
    }
    addTask(task);
    setTask({
      id: Date.now(),
      level: "high",
      title: "",
      status: "Todo",
      description: "",
    });
    setError("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-auto flex flex-col items-center justify-center bg-white p-4 rounded shadow m-4"
    >
      <h1 className="font-bold text-xl">Your Todo</h1>
      <div className="w-full flex flex-col mx-6 mt-0 mb-0">
        <label className="text-gray-500 font-semibold mb-1">Level</label>
        <select
          name="level"
          value={task.level}
          onChange={handleChange}
          className="md:w-[500px] border border-blue-400 bg-[#c1cdf9] p-2 rounded text-white placeholder:text-white placeholder:font-light"
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
      <div className="w-full flex flex-col mx-2 mt-3 mb-0">
        <label className="text-gray-500 font-semibold mb-1">Title</label>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          placeholder="Add title"
          className="md:w-[500px] border border-blue-400 bg-[#c1cdf9] p-2 rounded text-white placeholder:text-white placeholder:font-light"
        />
      </div>
      <div className="w-full flex flex-col mx-6 mt-3 mb-0">
        <label className="text-gray-500 font-semibold mb-1">Status</label>
        <select
          name="status"
          value={task.status}
          onChange={handleChange}
          className="md:w-[500px] border border-blue-400 bg-[#c1cdf9] p-2 rounded text-white placeholder:text-white placeholder:font-light"
        >
          <option value="Todo">Todo</option>
          <option value="Doing">Doing</option>
        </select>
      </div>
      <div className="w-full flex flex-col mx-2 mt-3 mb-0">
        <label className="text-gray-500 font-semibold mb-1">Description</label>
        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
          placeholder="Add description"
          className="md:w-[500px] border border-blue-400 bg-[#c1cdf9] p-2 rounded text-white placeholder:text-white placeholder:font-light"
        />
      </div>
      {error && <p className="text-red-500 mt-2 text-sm italic">{error}</p>}
      <button
        type="submit"
        className="w-full bg-blue-500 border-none outline-none md:w-[91%] p-2 rounded mt-6 text-white font-semibold text-lg md:-ml-12"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
