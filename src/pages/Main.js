import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, delTask, doTask } from "../redux/modules/task";
import Todo from "./Todo";

function Main() {
  const dispatch = useDispatch();
  const onClickAddHandler = (title, body) => {
    dispatch(addTask(title, body));
  };
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const style = {
    padding: "100px",
    display: "flex",
    gap: "12px",
  };
  const todoStore = useSelector((state) => state.task.tasks);
  return (
    <div>
      <p>My TodoList</p>
      <div>
        제목
        <input
          type="text"
          onChange={(event) => setTitle(event.target.value)}
        ></input>
        내용
        <input
          type="text"
          onChange={(event) => setBody(event.target.value)}
        ></input>
        <button onClick={() => onClickAddHandler(title, body)}>추가하기</button>
      </div>
      Working..
      <div style={style}>
        {todoStore.map((task) => {
          if (task.isDone === true) return null;
          return <Todo task={task} key={task.id} />;
        })}
      </div>
      Done..
      <div style={style}>
        {todoStore.map((task) => {
          console.log(task);
          if (task.isDone !== true) return null;
          return <Todo task={task} key={task.id} />;
        })}
      </div>
    </div>
  );
}

export default Main;
