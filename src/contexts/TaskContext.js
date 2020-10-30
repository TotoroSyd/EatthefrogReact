import React, {
  useState,
  createContext,
  useMemo,
  useEffect,
  useContext,
} from "react";
import { FilterContext } from "../contexts/FilterContext";

import {
  format,
  isToday,
  isTomorrow,
  addDays,
  isWithinInterval,
} from "date-fns";

// exporting context object
export const TaskContext = createContext();

// COntext wrapper component - to store state
export default function TaskContextProvider({ children }) {
  const todayDisplay = format(Date.now(), "EEEE, do MMM yyyy");

  // localStorage.setItem(
  //   "tasks",
  //   JSON.stringify([
  //     {
  //       id: 1,
  //       taskname: "default",
  //       taskdescription: "default",
  //       taskowner: "Phoebe",
  //       taskdate: Date.now(),
  //       taskstatus: "To Do",
  //     },
  //     {
  //       id: 2,
  //       taskname: "In Progress",
  //       taskdescription: "In Progress",
  //       taskowner: "Phoebe",
  //       taskdate: Date.now(),
  //       taskstatus: "In Progress",
  //     },
  //     {
  //       id: 3,
  //       taskname: "review",
  //       taskdescription: "review",
  //       taskowner: "Phoebe",
  //       taskdate: Date.now(),
  //       taskstatus: "Review",
  //     },
  //     {
  //       id: 4,
  //       taskname: "done",
  //       taskdescription: "done",
  //       taskowner: "Phoebe",
  //       taskdate: Date.now(),
  //       taskstatus: "Done",
  //     },
  //   ])
  // );
  const [tasks, setTasks] = useState([]);
  const [taskListVisible, setTaskListVisible] = useState(false);

  // Get tasks from localstorage when page loads/reloads
  useEffect(() => {
    const taskList = localStorage.getItem("tasks");
    setTasks(JSON.parse(taskList));
  }, []);

  // any time tasks state changes (edit/ delete), localstorage will save the updated version of tasks
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // create a seperated state to store filtered task list
  // if using state 'tasks', it will affect the badge
  const [tasksFiltered, setTasksFiltered] = useState("");
  const [idTaskToEdit, setIdTaskToEdit] = useState("");

  // Filter to show tasks with criteria
  const { filter } = useContext(FilterContext);
  useEffect(() => {
    switch (filter) {
      default:
        // all
        setTasksFiltered(tasks);
        break;
      case "todo":
        // to filter, it depends on the real taskList
        const todoArray = tasks.filter((task) => task.taskstatus === "To Do");
        setTasksFiltered(todoArray);
        break;
      case "todoToday":
        const todoTodayArray = tasks.filter(
          (task) => task.taskstatus === "To Do" && isToday(task.taskdate)
        );
        setTasksFiltered(todoTodayArray);
        break;
      case "inProgress":
        const inProgressArray = tasks.filter(
          (task) => task.taskstatus === "In Progress"
        );
        setTasksFiltered(inProgressArray);
        break;
      case "review":
        const reviewArray = tasks.filter(
          (task) => task.taskstatus === "Review"
        );
        setTasksFiltered(reviewArray);
        break;
      case "done":
        const doneArray = tasks.filter((task) => task.taskstatus === "Done");
        setTasksFiltered(doneArray);
        break;
      case "tmr":
        const tmrArray = tasks.filter(
          (task) => task.taskstatus !== "Done" && isTomorrow(task.taskdate)
        );
        setTasksFiltered(tmrArray);
        break;
      case "soon":
        const start_date = Date.now();
        const period = 3;
        const end = findDate(start_date, period);
        const soonArray = tasks.filter((task) => {
          return (
            task.taskstatus !== "Done" &&
            dateIsWithinInterval(task.taskdate, start_date, end)
          );
        });
        setTasksFiltered(soonArray);
        break;
    }
  }, [filter]);

  // Count number of tasks with criteria and link to badge
  const all = tasks.length;

  // Count tasks with "To do" Status
  // Option 1: useState + useEffect
  // const [todo, setTodo] = useState(0);

  // useEffect(() => {
  //   const todoArray = tasks.filter((task) => task.taskstatus === "To Do");
  //   setTodo(todoArray.length);
  //   console.log("useEffect counts todo");
  // }, [tasks]);
  // console.log("hey");

  // Option 2: useMemo
  const todo = useMemo(() => {
    // to filter, it depends on the real taskList
    const todoArray = tasks.filter((task) => task.taskstatus === "To Do");
    return todoArray.length;
    // Effect only triggers when the real taskList changes, not the state tasks changes.
    // state tasks will constantly chnages because of the filter feature
  }, [tasks]);
  // console.log("hey");

  // Count tasks with "In Progress" Status
  const inProgress = useMemo(() => {
    // console.log(tasks);
    const inProgressArray = tasks.filter(
      (task) => task.taskstatus === "In Progress"
    );
    return inProgressArray.length;
  }, [tasks]);

  // Count tasks with "Review" Status
  const review = useMemo(() => {
    const reviewArray = tasks.filter((task) => task.taskstatus === "Review");
    return reviewArray.length;
  }, [tasks]);

  // Count tasks with "Done" Status
  const done = useMemo(() => {
    const doneArray = tasks.filter((task) => task.taskstatus === "Done");
    return doneArray.length;
  }, [tasks]);

  // Count tasks with "To do Today" Status
  const todoToday = useMemo(() => {
    const todoTodayArray = tasks.filter(
      (task) => task.taskstatus === "To Do" && isToday(task.taskdate)
    );
    return todoTodayArray.length;
  }, [tasks]);

  // Count Tomorrow tasks (!Done)
  const tmr = useMemo(() => {
    const tmrArray = tasks.filter(
      (task) => task.taskstatus !== "Done" && isTomorrow(task.taskdate)
    );
    return tmrArray.length;
  }, [tasks]);

  // Count Soon tasks (!Done) - within 3 days from today
  function findDate(start_date, period) {
    let result = Date.parse(addDays(start_date, period));
    return result;
  }

  function dateIsWithinInterval(dateToCheck, start, end) {
    let withinInterval = isWithinInterval(dateToCheck, {
      start: start,
      end: end,
    });
    return withinInterval;
  }

  const soon = useMemo(() => {
    const start_date = Date.now();
    const period = 3;
    const end = findDate(start_date, period);
    const soonArray = tasks.filter((task) => {
      return (
        task.taskstatus !== "Done" &&
        dateIsWithinInterval(task.taskdate, start_date, end)
      );
    });
    return soonArray.length;
  }, [tasks]);

  // Delete function
  const deleteTask = (id) => {
    const tasksAfterDeleted = tasks.filter((task) => task.id !== id);
    console.log(tasksAfterDeleted);
    setTasks(tasksAfterDeleted);
  };

  // Share tasks state
  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        tasksFiltered,
        all,
        todo,
        inProgress,
        review,
        done,
        tmr,
        soon,
        todoToday,
        todayDisplay,
        idTaskToEdit,
        setIdTaskToEdit,
        deleteTask,
        taskListVisible,
        setTaskListVisible,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
