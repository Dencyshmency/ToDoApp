import { Switch } from "antd";
import { TbSettingsFilled, TbLogout, TbLogin } from "react-icons/tb";
import { BsCalendarPlus } from "react-icons/bs";

import React, { useState, useEffect } from "react";

const Header = ({
  setOpenNewTask,
  openNewTask,
  openLogin,
  setOpenLogin,
  openTheme,
  setOpenTheme,
  openBurger,
  setOpenBurger,
  login,
  setLogin,
}) => {
  const [userName, setUserName] = useState("");

  const logOutButton = () => {
    localStorage.setItem("currentUser", "");
    setUserName("");
    setLogin(true);
  };

  useEffect(() => {
    if (localStorage.getItem("currentUser") === null) {
      setUserName("");
    }
    if (localStorage.getItem("currentUser") !== "") {
      setUserName(`Welcome, ${localStorage.getItem("currentUser")}`);
      setLogin(false);
    }
  });

  const [themeStatus, setThemeStatus] = useState(true);

  const onChange = (checked) => {
    console.log(checked);
    if (checked === true) {
      setThemeStatus(true);
      document.body.setAttribute("white", "");
      localStorage.setItem("theme", "white");
    }
    if (checked === false) {
      setThemeStatus(false);
      document.body.removeAttribute("white");
      localStorage.setItem("theme", "dark");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "white") {
      document.body.setAttribute("white", "");
    }
    if (localStorage.getItem("theme") === "dark") {
      document.body.removeAttribute("white");
    }

    if (localStorage.getItem("theme") === "dark") {
      setThemeStatus(false);
    }

    if (localStorage.getItem("theme") === "white") {
      setThemeStatus(true);
    }
  }, []);

  const openNewTaskPanel = () => {
    setOpenNewTask(!openNewTask);
    if (openLogin === true || openTheme === true) {
      setOpenLogin(false);
      setOpenTheme(false);
    }
  };

  const openThemePanel = () => {
    setOpenTheme(!openTheme);
    if (openLogin === true || openNewTask === true) {
      setOpenLogin(false);
      setOpenNewTask(false);
    }
  };

  const openLoginPanel = () => {
    setOpenLogin(!openLogin);
    if (openNewTask === true || openTheme === true) {
      setOpenNewTask(false);
      setOpenTheme(false);
    }
  };

  return (
    <div className="container">
      <div className="content-header">
        <div className="header-wrapper">
          <div className="button-add-task">
            <button
              className="burger-menu"
              onClick={() => setOpenBurger(!openBurger)}
            >
              <span className="burger-line"></span>
            </button>

            <button className="button-addtask" onClick={openNewTaskPanel}>
              Add Task
            </button>
            <button
              className="button-addtask-tablet"
              onClick={openNewTaskPanel}
            >
              <BsCalendarPlus className="tablet-icon" />
            </button>
          </div>
          <div className="user-name">
            <p className="user-name-style">{userName}</p>
          </div>
          <div className="buttons-settings">
            <button className="setting-button" onClick={openThemePanel}>
              <TbSettingsFilled className="setting-icon" />
            </button>
            <Switch
              checked={themeStatus}
              onClick={onChange}
              className="switch"
            />
            <div className="button-login-wrapper">
              {login ? (
                <button className="button-login" onClick={openLoginPanel}>
                  <TbLogin className="login-icon" />
                </button>
              ) : (
                <button className="button-login" onClick={logOutButton}>
                  <TbLogout className="login-icon" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
