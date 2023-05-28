import React, { useState } from "react";

import { CgCloseR } from "react-icons/cg";

const Login = ({ openLogin, setOpenLogin, setLogin }) => {
  const [loginRegistration, setLoginRegistration] = useState(false);
  const [userName, setUserName] = useState({
    name: "",
    password: "",
  });

  const enterUSer = () => {
    if (
      loginRegistration === false &&
      userName.name !== "" &&
      userName.password !== ""
    ) {
      localStorage.setItem(
        `user-${userName.name}`,
        `${userName.name},${userName.password}`
      );
      setUserName({
        name: "",
        password: "",
      });
      lo();
    }

    let itemKey;
    let currentUser;
    let userNow;

    if (loginRegistration === true) {
      for (let i = 0; localStorage.length > i; i++) {
        if (localStorage.key(i) === `user-${userName.name}`) {
          itemKey = i;
        }
      }
      currentUser = localStorage.key(itemKey);
      userNow = localStorage.getItem(currentUser).split(",");

      let [user, password] = userNow;

      if (user === userName.name && password === userName.password) {
        localStorage.setItem("currentUser", userName.name);
        setLogin(false);
        setOpenLogin(false);
        setUserName({
          name: "",
          password: "",
        });
      } else null;
    }
  };

  const re = () => {
    setLoginRegistration(false);
    let line = document.querySelector(".line");
    line.classList.add("line-registration");
    line.classList.remove("line-login");
  };

  const lo = () => {
    setLoginRegistration(true);
    let line = document.querySelector(".line");
    line.classList.add("line-login");
    line.classList.remove("line-registration");
  };

  return (
    <div
      className={`wrapper-login ${openLogin ? "open-wrapper-login" : ""}`}
      onClick={() => setOpenLogin(false)}
    >
      <div
        className={`wrapper-login-panel ${openLogin ? "open-login-panel" : ""}`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="close-panel">
          <button>
            <CgCloseR
              className="close-icon"
              onClick={() => setOpenLogin(false)}
            />
          </button>
        </div>

        <div className="panel-login-registration">
          <div className="wrapper-log">
            <p className="registration" onClick={re}>
              Registration
            </p>
            <p className="login" onClick={lo}>
              Login
            </p>
          </div>
          <div className="line"></div>
        </div>
        <div className="wrapper-newtask-date">
          <div>
            <p>Enter your name</p>
            <input
              className="userNameInput"
              type="text"
              value={userName.name}
              onChange={(event) =>
                setUserName({ ...userName, name: event.target.value })
              }
            />
          </div>
          <div>
            <p>Enter your password</p>
            <input
              className="userPasswordInput"
              type="password"
              value={userName.password}
              onChange={(event) =>
                setUserName({ ...userName, password: event.target.value })
              }
            />
          </div>
        </div>
        <button className="button-login" onClick={enterUSer}>
          Enter
        </button>
      </div>
    </div>
  );
};

export default Login;
