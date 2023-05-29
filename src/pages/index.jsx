import Head from "next/head";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import Header from "@/header/Header";
import Navbar from "@/navbar/Nabva";
import Newtask from "@/newtask/Newtask";
import Login from "@/login/Login";
import Theme from "@/theme/Theme";
import Task from "@/task/Task";
import Footer from "@/footer/footer";

import bg from "public/background.jpg";
import bg2 from "public/background2.jpg";
import bg3 from "public/background3.jpg";
import bg4 from "public/background4.jpg";
import bg5 from "public/background5.jpg";
import bg6 from "public/background6.jpg";
import bg7 from "public/background7.jpg";
import bg9 from "public/background9.jpg";

export default function Home() {
  const [openNewTask, setOpenNewTask] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openTheme, setOpenTheme] = useState(false);
  const [openBurger, setOpenBurger] = useState(false);
  const [login, setLogin] = useState(true);

  const ImageArray = [
    { image: bg, idImage: uuidv4() },
    { image: bg2, idImage: uuidv4() },
    { image: bg3, idImage: uuidv4() },
    { image: bg4, idImage: uuidv4() },
    { image: bg5, idImage: uuidv4() },
    { image: bg6, idImage: uuidv4() },
    { image: bg7, idImage: uuidv4() },
    { image: bg9, idImage: uuidv4() },
  ];

  const [bgImage, setBgImage] = useState(bg);
  const [position, setPosition] = useState({
    doned: false,
    notDoned: false,
    all: false,
  });

  const [arrayTasks, setArrayTasks] = useState([]);

  const [allTask, setAllTasks] = useState([]);
  const [okTask, setOkTask] = useState([]);
  const [noTask, setNoTask] = useState([]);
  const [filterDate, setFilterDate] = useState([]);

  useEffect(() => {
    setArrayTasks(okTask);
  }, [okTask]);

  useEffect(() => {
    setArrayTasks(noTask);
  }, [noTask]);

  useEffect(() => {
    setArrayTasks(filterDate);
  }, [filterDate]);

  const deleteTask = (id) => {
    setArrayTasks(arrayTasks.filter((item) => item.taskId !== id));
    setAllTasks(arrayTasks.filter((item) => item.taskId !== id));
  };

  const changeTask = (id, changedTask) => {
    const find = [...arrayTasks];
    const current = find.find((item) => item.taskId === id);
    current.taskText = changedTask.taskText;
    current.taskDate = changedTask.taskDate;
    setArrayTasks(find);
    setAllTasks(find);
  };

  const donedTask = (id) => {
    const donedTask = [...allTask];
    const current = donedTask.find((item) => item.taskId === id);
    current.taskStatus = !current.taskStatus;
    // setArrayTasks(donedTask);
    setAllTasks(donedTask);
  };

  const myDonedTask = () => {
    const filtered = allTask.filter((item) => item.taskStatus === true);
    setOkTask(filtered);
    setArrayTasks(okTask);
    setPosition({ doned: true });
  };

  const myNotDonedTask = () => {
    const filtereds = allTask.filter((item) => item.taskStatus === false);
    setNoTask(filtereds);
    setArrayTasks(noTask);
    setPosition({ notDoned: true });
  };

  const myAllTask = () => {
    setArrayTasks(allTask);
    setPosition({ all: true });
  };

  const filterOnDateTask = (taskDateFilter) => {
    const filtereds = allTask.filter(
      (item) => item.taskDate === taskDateFilter
    );
    setFilterDate(filtereds);
    setArrayTasks(filterDate);
  };

  return (
    <>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        setOpenNewTask={setOpenNewTask}
        openNewTask={openNewTask}
        openLogin={openLogin}
        setOpenLogin={setOpenLogin}
        openTheme={openTheme}
        setOpenTheme={setOpenTheme}
        openBurger={openBurger}
        setOpenBurger={setOpenBurger}
        login={login}
        setLogin={setLogin}
      />
      <main>
        <Image src={bgImage} className="bg-image" alt="" />
        <div className="content">
          <div
            className={`navbar-panel ${
              openBurger === false ? "close-navbar" : ""
            }`}
          >
            <Navbar
              myDonedTask={myDonedTask}
              myNotDonedTask={myNotDonedTask}
              myAllTask={myAllTask}
              filterOnDateTask={filterOnDateTask}
              openBurger={openBurger}
              position={position}
              openTheme={openTheme}
              setOpenTheme={setOpenTheme}
              setOpenBurger={setOpenBurger}
            />
          </div>
          <div className="task-panel">
            <Newtask
              setOpenNewTask={setOpenNewTask}
              openNewTask={openNewTask}
              setArrayTasks={setArrayTasks}
              arrayTasks={arrayTasks}
              setAllTasks={setAllTasks}
              allTask={allTask}
              setOpenTheme={setOpenTheme}
              setOpenLogin={setOpenLogin}
            />
            <Login
              openLogin={openLogin}
              setOpenLogin={setOpenLogin}
              login={login}
              setLogin={setLogin}
            />
            <Theme
              openTheme={openTheme}
              setOpenTheme={setOpenTheme}
              ImageArray={ImageArray}
              setBgImage={setBgImage}
            />
            <div className="tasks-list">
              {arrayTasks.map((item) => (
                <Task
                  key={item.taskId}
                  text={item.taskText}
                  date={item.taskDate}
                  id={item.taskId}
                  taskStatus={item.taskStatus}
                  deleteTask={deleteTask}
                  changeTask={changeTask}
                  donedTask={donedTask}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
