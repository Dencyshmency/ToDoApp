import { MdRemoveDone, MdDoneAll, MdArticle } from "react-icons/md";
import { TbSettingsFilled, TbLogin, TbLogout } from "react-icons/tb";
import { Switch, DatePicker } from "antd";

const Navbar = ({
  myDonedTask,
  myNotDonedTask,
  myAllTask,
  filterOnDateTask,
  openBurger,
  position,
  setOpenTheme,
  setOpenBurger,
  login,
  setLogin,
  setOpenNewTask,
  openNewTask,
  setOpenLogin,
  openLogin,
  openTheme,
  setUserName,
  themeStatus,
  setThemeStatus,
}) => {
  const dateTasksHandler = (date, dateString) => {
    const taskDateFilter = dateString;
    console.log(taskDateFilter);
    filterOnDateTask(taskDateFilter);
  };

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

  const openSettingsInNavbar = () => {
    setOpenBurger(false);
    setOpenTheme(true);
  };

  const logOutButtonNav = () => {
    localStorage.setItem("currentUser", "");
    setUserName("");
    setLogin(true);
  };

  const openLoginPanel = () => {
    setOpenLogin(!openLogin);
    setOpenBurger(false);
    if (openNewTask === true || openTheme === true) {
      setOpenNewTask(false);
      setOpenTheme(false);
    }
  };
  return (
    <div
      className={`navbar-wrapper ${
        openBurger === false ? "close-navbar-panel" : ""
      }`}
    >
      <div className="navbar-items">
        <div className="task-search-list">
          <div className="input-search">
            <DatePicker onChange={dateTasksHandler} />
          </div>
          <div className="task-list">
            <ul>
              <li
                className={`navbar-item ${
                  position.doned === true ? "active" : ""
                }`}
                onClick={() => myDonedTask()}
              >
                <MdDoneAll className="navbar-icon" />
                <p>Doned task</p>
              </li>
              <li
                className={`navbar-item ${
                  position.notDoned === true ? "active" : ""
                }`}
                onClick={() => myNotDonedTask()}
              >
                <MdRemoveDone className="navbar-icon" />
                <p>Not doned task</p>
              </li>

              <li
                className={`navbar-item ${
                  position.all === true ? "active" : ""
                }`}
                onClick={() => myAllTask()}
              >
                <MdArticle className="navbar-icon" />
                <p>All Tasks</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-menu">
          <div className="navbar-settings">
            <div className="buttons-settings">
              <button className="setting-button">
                <TbSettingsFilled
                  className="setting-icon"
                  onClick={openSettingsInNavbar}
                />
              </button>
              <Switch
                checked={themeStatus}
                onClick={onChange}
                className="switch"
              />
            </div>
          </div>
          <div className="line-navbar" />
          <div className="login-logout">
            {login ? (
              <button className="button-login" onClick={openLoginPanel}>
                <TbLogin className="login-icon" />
              </button>
            ) : (
              <button className="button-login" onClick={logOutButtonNav}>
                <TbLogout className="login-icon" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
