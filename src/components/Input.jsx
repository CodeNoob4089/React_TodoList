import React from "react";
import uuid from "react-uuid";
import { InputArea, InputField, Button } from "./Style";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todo";

function Input({ title, contents, onChangeTitle, onChangeContents }) {
  const dispatch = useDispatch();
  return (
    <InputArea>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const newTodo = {
            id: uuid(),
            title,
            contents,
            isDone: false,
          };

          dispatch(addTodo(newTodo));
        }}
      >
        <div>
          <InputField type="text" value={title} onChange={onChangeTitle} />
          <InputField
            type="text"
            value={contents}
            onChange={onChangeContents}
          />
        </div>
        <Button>등록</Button>
      </form>
    </InputArea>
  );
}

export default Input;
