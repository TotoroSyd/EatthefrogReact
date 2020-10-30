import React, { useContext } from "react";
// import "./App.css";
import TasklistV from "./components/TasklistV";
import WelcomeV from "./components/WelcomeV";
import TaskContextProvider, { TaskContext } from "../src/contexts/TaskContext";
import FilterContextProvider from "../src/contexts/FilterContext";
import ModalContextProvider from "../src/contexts/ModalContext";

export default function App() {
  return (
    <FilterContextProvider>
      <ModalContextProvider>
        <TaskContextProvider>
          <Body />
        </TaskContextProvider>
      </ModalContextProvider>
    </FilterContextProvider>
  );
}

function Body() {
  const { taskListVisible } = useContext(TaskContext);
  // Initial taskListVisible = false, is taskListVisible = false then show Welcome,
  // when Frogbutton in WelcomeV is clicked, taskListVisible = true => show TasklistV
  return <>{taskListVisible ? <TasklistV /> : <WelcomeV />}</>;
}
// Can't do this. Because we can't useContext before declaring ContextProvider.

// export default function App() {
// const { taskListVisible } = useContext(TaskContext);
//   return (
//     <FilterContextProvider>
//       <ModalContextProvider>
//         <TaskContextProvider>
//           {taskListVisible ? <TasklistV /> : <WelcomeV />}
//         </TaskContextProvider>
//       </ModalContextProvider>
//     </FilterContextProvider>
//   );
// }
