import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { delTask, doTask } from "../redux/modules/task";

const SquareDiv = styled.div`
  width: 300px;
  height: 150px;
  border: 1px solid green;
  borderradius: 10px;
  align-items: center;
  justify-content: center;
`;
const ButtonStyle = styled.button`
  width: 25%;
  background-color: white;
`;

function Todo(props) {
  const dispatch = useDispatch();
  const onClickDelHandler = (id) => {
    dispatch(delTask(id));
  };
  const onClickDoHandler = (id) => {
    dispatch(doTask(id));
  };
  const contentStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <SquareDiv>
      <h2 style={contentStyle}>{props.task.title}</h2>
      <p style={contentStyle}>{props.task.content}</p>
      <div style={contentStyle}>
        <ButtonStyle onClick={() => onClickDelHandler(props.task.id)}>
          삭제하기
        </ButtonStyle>
        <ButtonStyle onClick={() => onClickDoHandler(props.task.id)}>
          {props.task.isDone ? "취소" : "완료"}
        </ButtonStyle>
        <ButtonStyle
          onClick={() => (window.location.href = "/detail/" + props.task.id)}
        >
          상세보기
        </ButtonStyle>
      </div>
    </SquareDiv>
  );
}
export default Todo;
