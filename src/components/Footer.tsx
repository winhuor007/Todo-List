import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";

const Footer: React.FC = () => {
  const todoContext = useContext(TodoContext);

  if (!todoContext) {
    throw new Error("TodoContext must be used within a TodoProvider");
  }
  const { totalTasks, completedTasks, doingTasks } = todoContext;
  return (
    <footer className="bg-[#425BB6] px-12 py-4 flex justify-between text-white">
      <span className="font-medium text-lg">Doing: xx/{doingTasks}</span>
      <span className="font-medium text-lg">
        Total: {completedTasks} /{totalTasks}
      </span>
    </footer>
  );
};

export default Footer;
