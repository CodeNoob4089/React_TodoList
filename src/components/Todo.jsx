import React from "react";

function Todo({ todos, setTodos, isDone }) {
  return (
    <div>
      <h2>{isDone ? "Done" : "Working"}</h2>
      {todos
        .filter(function (t) {
          return t.isDone === isDone;
        })
        .map(function (todo) {
          return (
            <div
              style={{
                border: "1px solid black",
                margin: "10px",
                padding: "10px",
              }}
            >
              <p>{todo.title}</p>
              <p>{todo.contents}</p>
              <p>{todo.id}</p>
              <p>{todo.isDone.toString()}</p>
              <button
                onClick={() => {
                  const newTodos = todos.filter((Ft) => Ft.id !== todo.id);
                  setTodos(newTodos);
                }}
              >
                삭제하기
              </button>
              <button
                onClick={function () {
                  const newTodos = todos.map(function (item) {
                    if (item.id === todo.id) {
                      return { ...item, isDone: !item.isDone };
                    } else {
                      return item;
                    }
                  });
                  setTodos(newTodos);
                }}
              >
                {isDone ? "취소" : "완료"}
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default Todo;
