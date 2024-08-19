import React, { createContext, useState, ReactNode, useEffect } from "react";

interface Task {
  id: number;
  level: string;
  title: string;
  status: string;
  description: string;
}

interface TodoContextProps {
  tasks: Task[];
  addTask: (task: Task) => void;
  deleteTask: (id: number) => void;
  toggleTaskStatus: (id: number) => void;
  isFormVisible: boolean;
  toggleFormVisibility: () => void;
  completedTasks: number;
  totalTasks: number;
  doingTasks: number;
}

export const TodoContext = createContext<TodoContextProps | undefined>(
  undefined
);

interface TodoProviderProps {
  children: ReactNode;
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task: Task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const toggleTaskStatus = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "Done" ? "Todo" : "Done",
            }
          : task
      )
    );
  };

  const toggleFormVisibility = () => {
    setIsFormVisible((prevState) => !prevState);
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.status === "Done").length;
  const doingTasks = tasks.filter((task) => task.status === "Doing").length;

  return (
    <TodoContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        toggleTaskStatus,
        isFormVisible,
        toggleFormVisibility,
        completedTasks,
        totalTasks,
        doingTasks,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
