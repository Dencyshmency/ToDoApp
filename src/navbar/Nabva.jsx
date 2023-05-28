import { IoMdDoneAll } from "react-icons/Io";
import { MdRemoveDone } from "react-icons/Md";
import { FaTasks } from "react-icons/Fa";
import { TbSettingsFilled, TbLogout, TbLogin } from "react-icons/tb";
import { Switch } from "antd";

const Navbar = ({
  myDonedTask,
  myNotDonedTask,
  myAllTask,
  filterOnDateTask,
  openBurger,
  position,
  openTheme,
  setOpenTheme,
  setOpenBurger,
}) => {
  const dateTasksHandler = (event) => {
    const taskDateFilter = event.target.value;
    console.log(taskDateFilter);
    filterOnDateTask(taskDateFilter);
  };

  const onChange = (checked) => {
    if (checked === true) {
      document.body.setAttribute("white", "");
      localStorage.setItem("theme", "white");
    }
    if (checked === false) {
      document.body.removeAttribute("white");
      localStorage.setItem("theme", "dark");
    }
  };

  const openSettingsInNavbar = () => {
    setOpenBurger(false);
    setOpenTheme(true);
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
            <input
              type="date"
              className="input-search-date"
              onChange={dateTasksHandler}
            />
          </div>
          <div className="task-list">
            <ul>
              <li
                className={`navbar-item ${
                  position.doned === true ? "active" : ""
                }`}
                onClick={() => myDonedTask()}
              >
                <IoMdDoneAll className="navbar-icon" />
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
                <FaTasks className="navbar-icon" />
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
              <Switch defaultChecked onChange={onChange} className="switch" />
            </div>
          </div>
          <div className="line-navbar" />
          <div className="login-logout">
            <button className="button-login">
              <TbLogin className="login-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
