import React, { useContext } from "react";
import TaskItem from "./TaskItem";
import TodoForm from "./TodoForm";
import { TodoContext } from "./TodoContext";

const Main: React.FC = () => {
  const todoContext = useContext(TodoContext);

  if (!todoContext) {
    throw new Error("TodoContext must be used within a TodoProvider");
  }

  const { tasks, isFormVisible } = todoContext;

  return (
    <div className="flex flex-row gap-6 py-5 px-12">
      <div className="bg-[#CDD2E8] flex-1 rounded-lg md:p-2">
        {isFormVisible ? (
          <TodoForm />
        ) : (
          <p className="text-center font-medium text-lg sm:m-48">Make todos!</p>
        )}
      </div>
      <div className="overflow-y-auto h-[510px] bg-[#CDD2E8] p-4 flex-1 rounded-lg md:p-6">
        {tasks.map((task) => (
          <TaskItem key={task.id} {...task} />
        ))}
      </div>
    </div>
  );
};

export default Main;
