import React from "react";
import {
  TodoContainer,
  TodoItem,
  ButtonGroup,
  DeleteButton,
  CompleteButton,
  SubPageButton,
} from "./Style";
import { useDispatch, useSelector } from "react-redux";
import { deletetodo, swichtodo } from "../redux/modules/todo";
import { useNavigate } from "react-router-dom";

function Todo({ isDone }) {
  const data = useSelector((storeState) => storeState.todoReducer.todos);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <TodoContainer>
      <h2>{isDone ? "Done" : "Working"}</h2>
      <div style={{ display: "flex" }}>
        {data
          .filter(function (t) {
            return t.isDone === isDone;
          })
          .map(function (todo) {
            return (
              <TodoItem key={todo.id}>
                <SubPageButton
                  onClick={() => {
                    navigate(`sub/${todo.id}`);
                  }}
                >
                  상세페이지
                </SubPageButton>
                <h3>{todo.title}</h3>
                <p>{todo.contents}</p>
                <p>{todo.isDone.toString()}</p>
                <ButtonGroup>
                  <DeleteButton
                    onClick={() => {
                      const newTodos = data.filter((Ft) => Ft.id !== todo.id);
                      dispatch(deletetodo(newTodos));
                    }}
                  >
                    삭제하기
                  </DeleteButton>
                  <CompleteButton
                    onClick={function () {
                      const newTodo = data.map(function (item) {
                        if (item.id === todo.id) {
                          return { ...item, isDone: !item.isDone };
                        } else {
                          return item;
                        }
                      });
                      dispatch(swichtodo(newTodo));
                    }}
                  >
                    {isDone ? "취소" : "완료"}
                  </CompleteButton>
                </ButtonGroup>
              </TodoItem>
            );
          })}
      </div>
    </TodoContainer>
  );
}

export default Todo;
