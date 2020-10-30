import React from "react";
import "./App.css";

import TasklistV from "./components/TasklistV";
import WelcomeV from "./components/WelcomeV";
import TaskContextProvider from "../src/contexts/TaskContext";
import FilterContextProvider from "../src/contexts/FilterContext";
import ModalContextProvider from "../src/contexts/ModalContext";

export default function App() {
  return (
    <FilterContextProvider>
      <ModalContextProvider>
        <TaskContextProvider>
          <WelcomeV />
          <TasklistV />
        </TaskContextProvider>
      </ModalContextProvider>
    </FilterContextProvider>
  );
}
