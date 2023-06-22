import React from "react";
import uuid from "react-uuid";
function Input({ title, contents, setTodos, todos, setTitle, setContents }) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const newTodo = {
          id: uuid(),
          title,
          contents,
          isDone: false,
        };

        setTodos([...todos, newTodo]);
      }}
    >
      <input
        type="text"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <input
        type="text"
        value={contents}
        onChange={(event) => {
          setContents(event.target.value);
        }}
      />
      <button>등록</button>
    </form>
  );
}

export default Input;
