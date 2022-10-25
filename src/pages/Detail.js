import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = () => {
  const todoStore = useSelector((state) => state.task.tasks);
  const param = useParams();
  console.log(param.id);
  const task = todoStore.filter((task) => task.id == param.id)[0];
  console.log(task);
  return (
    <div>
      <p>id:{task.id}</p>
      <p>title:{task.title}</p>
      <p>body:{task.body}</p>
      <button onClick={() => (window.location.href = "/")}>이전으로</button>
    </div>
  );
};

export default Detail;
