import React from "react";
import Sidebar from "./Sidebar";
import Tasklistboard from "./Tasklistboard";
import Footer from "./Footer";

export default function Taskcotainer() {
  return (
    <>
      <div className="task_container">
        <Sidebar />
        <Tasklistboard />
      </div>
      <Footer />
    </>
  );
}
