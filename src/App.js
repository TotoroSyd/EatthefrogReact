import React from "react";
import "./App.css";

import TasklistV from "./components/TasklistV";
import WelcomeV from "./components/WelcomeV";
import TaskContextProvider from "../src/contexts/TaskContext";
import FilterContextProvider from "../src/contexts/FilterContext";

export default function App() {
  return (
    <FilterContextProvider>
      <TaskContextProvider>
        <WelcomeV />
        <TasklistV />
      </TaskContextProvider>
    </FilterContextProvider>
  );
}
