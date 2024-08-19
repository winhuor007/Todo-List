import { CalendarPlus2, Filter, Search } from "lucide-react";
import React, { useContext } from "react";
import Logo from "../assets/logo.png";
import { TodoContext } from "./TodoContext";

const Header: React.FC = () => {
  const todoContext = useContext(TodoContext);

  if (!todoContext) {
    throw new Error("TodoContext must be used within a TodoProvider");
  }

  const { toggleFormVisibility } = todoContext;

  return (
    <header className="bg-[#425BB6] p-1 px-12 flex items-center justify-between">
      <div className="flex flex-row items-center">
        <img src={Logo} alt="logo" className="w-16 h-16" />
        <h1 className="text-white text-xl font-bold">TodoApp</h1>
      </div>
      <div className="flex items-center space-x-3 relative">
        <Search
          size={20}
          className="text-white absolute left-6 cursor-pointer"
        />
        <input
          type="text"
          placeholder="Search"
          className="md:w-[500px] bg-[#7A8CCC] border border-white-500 text-white text-base p-3 rounded placeholder:text-white placeholder:text-lg px-9"
        />
        <button className="bg-[#7A8CCC] text-white p-3 rounded">
          <Filter />
        </button>
      </div>
      <button
        className="bg-[#7A8CCC] text-white p-3 rounded"
        onClick={toggleFormVisibility}
      >
        <CalendarPlus2 />
      </button>
    </header>
  );
};

export default Header;
