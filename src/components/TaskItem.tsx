import React, { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";
import { Delete, ListCollapse } from "lucide-react";

interface TaskItemProps {
  id: number;
  level: string;
  title: string;
  status: string;
  description: string;
}

const TaskItem: React.FC<TaskItemProps> = ({
  id,
  level,
  title,
  status,
  description,
}) => {
  const todoContext = useContext(TodoContext);

  if (!todoContext) {
    throw new Error("TodoContext must be used within a TodoProvider");
  }

  const { deleteTask, toggleTaskStatus } = todoContext;

  const [isDescriptionVisible, setDescriptionVisible] = useState(false);

  const statusBgColor =
    status === "Done"
      ? "bg-green-500"
      : status === "Doing"
      ? "bg-blue-500"
      : "bg-orange-500";

  const levelBgColor =
    level === "high"
      ? "bg-[#ffb266]"
      : level === "medium"
      ? "bg-[#ffff00]"
      : "bg-[#008000]";

  return (
    <div className="bg-white p-5 pb-1 rounded shadow mb-4 border-l-4 border-green-500">
      <div className="flex items-center gap-x-1">
        <span
          className={`${statusBgColor} text-white rounded text-base font-medium px-5 py-[3px] mr-2`}
        >
          {status}
        </span>
        <p className="text-gray-600 text-lg">/</p>
        <span
          className={`${levelBgColor} text-white rounded text-base font-semibold px-2 py-[3px] ml-2`}
        >
          {level}
        </span>
      </div>
      <div className="flex flex-row items-center justify-between mt-1">
        <p
          className={`mt-2 text-lg font-medium cursor-pointer ${
            status === "Done" ? "line-through text-gray-400" : ""
          }`}
          onClick={() => toggleTaskStatus(id)}
        >
          {title}
        </p>
        <button
          onClick={() => deleteTask(id)}
          className="bg-red-500 text-white p-1 rounded"
        >
          <Delete size={18} />
        </button>
      </div>
      <button
        className="text-gray-500 pt-4 rounded"
        onClick={() => setDescriptionVisible(true)}
        onMouseLeave={() => setDescriptionVisible(false)}
      >
        <ListCollapse />
      </button>
      {isDescriptionVisible && (
        <div className="mt-2 text-gray-700 rounded">{description}</div>
      )}
    </div>
  );
};

export default TaskItem;
