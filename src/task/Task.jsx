import {
  MdDelete,
  MdDriveFileRenameOutline,
  MdRemoveDone,
  MdDoneAll,
} from "react-icons/md";

import { DatePicker } from "antd";

import React, { useState } from "react";

const Task = ({
  text,
  date,
  id,
  deleteTask,
  changeTask,

  donedTask,
  taskStatus,
}) => {
  const [openRedactMenu, setOpenRedactMenu] = useState(true);
  const [changedTask, setChangedTask] = useState({
    taskText: text,
    taskDate: date,
  });

  const changedTextTaskHandler = (event) => {
    setChangedTask({
      ...changedTask,
      taskText: event.target.value,
      taskStatus: false,
    });
  };

  const ChangedTaskHandler = () => {
    changeTask(id, changedTask);
    setOpenRedactMenu(true);
  };

  const changeStstus = () => {
    donedTask(id);
  };

  const DeleteTaskHandler = () => {
    deleteTask(id);
  };

  const onChange = (date, dateString) => {
    setChangedTask({
      ...changedTask,
      taskDate: dateString,
      taskId: id,
    });
  };

  return (
    <div className="wrapper-task">
      <div
        className={`wrapper-task-panel ${taskStatus ? "doned-wrapper" : ""}`}
      >
        <div className="wrapper-panel">
          <button className="task-status">
            {taskStatus ? (
              <MdRemoveDone
                className="task-icon task-status"
                onClick={changeStstus}
              />
            ) : (
              <MdDoneAll
                className="task-icon task-status"
                onClick={changeStstus}
              />
            )}
          </button>
          <button
            className={`task-change ${taskStatus ? "close-task-change" : ""}`}
          >
            <MdDriveFileRenameOutline
              className="task-icon task-change"
              onClick={() => setOpenRedactMenu(!openRedactMenu)}
            />
          </button>
          <button className="task-delete">
            <MdDelete
              className="task-icon task-delete"
              onClick={DeleteTaskHandler}
            />
          </button>
        </div>
        <div className="task-text">
          {openRedactMenu ? (
            <div className="wrapper-task-text">
              <div
                className={`wrapper-text ${taskStatus ? "doned-wrapper" : ""}`}
              >
                <p className="task-texts">{text}</p>
              </div>
              <div
                className={`wrapper-text ${taskStatus ? "doned-wrapper" : ""}`}
              >
                <p className="task-texts">
                  {date.split("-").reverse().join(".")}
                </p>
              </div>
            </div>
          ) : (
            <div className="wrapper-redact">
              <div className="input-text">
                <input
                  className="text-input"
                  type="text"
                  onChange={changedTextTaskHandler}
                  value={changedTask.taskText}
                />
              </div>
              <div className="input-text">
                <DatePicker className="text-input" onChange={onChange} />
              </div>
            </div>
          )}
        </div>
        <button
          type="submit"
          onClick={ChangedTaskHandler}
          className={`apply-change ${
            openRedactMenu === false ? "open-apply-change" : ""
          }`}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Task;
