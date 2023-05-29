import { CgCloseR } from "react-icons/cg";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import { DatePicker } from "antd";

const Newtask = ({
  openNewTask,
  setOpenNewTask,
  setArrayTasks,
  arrayTasks,
  setAllTasks,
  allTask,
}) => {
  const [createTask, setCreateTask] = useState({
    taskText: "",
    taskDate: "",
    taskStatus: "",
    taskId: "",
  });

  const TextTaskHandler = (event) => {
    setCreateTask({
      ...createTask,
      taskText: event.target.value,
      taskStatus: false,
    });
  };

  const onChange = (date, dateString) => {
    setCreateTask({
      ...createTask,
      taskDate: dateString,
      taskId: uuidv4(),
    });
  };

  const addTask = () => {
    if (createTask.taskText !== "" && createTask.taskDate !== "") {
      setArrayTasks([...arrayTasks, createTask]);
      setAllTasks([...allTask, createTask]);
      setCreateTask({ taskText: "", taskDate: "", taskStatus: "", taskId: "" });
    } else {
      return null;
    }
  };

  return (
    <div
      className={`wrapper-newtask ${openNewTask ? "open-wrapper-newtask" : ""}`}
      onClick={() => setOpenNewTask(false)}
    >
      <div
        className={`wrapper-panel-newtask ${
          openNewTask ? "open-task-panel" : ""
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="close-panel">
          <button>
            <CgCloseR
              className="close-icon"
              onClick={() => setOpenNewTask(false)}
            />
          </button>
        </div>
        <div className="wrapper-newtask-date">
          <textarea
            placeholder="Enter your task"
            value={createTask.taskText}
            onChange={TextTaskHandler}
          />
          <DatePicker onChange={onChange} />
        </div>
        <button className="button-newtask" onClick={addTask}>
          Create task
        </button>
      </div>
    </div>
  );
};

export default Newtask;
