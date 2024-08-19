import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { TodoProvider } from "./components/TodoContext";

const App: React.FC = () => {
  return (
    <TodoProvider>
      <main className="h-full">
        <div className="w-full h-auto bg-[#344FB1]">
          <Header />
          <Main />
          <Footer />
        </div>
      </main>
    </TodoProvider>
  );
};

export default App;
