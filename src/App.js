import React, { useState } from "react";
import uuid from "react-uuid";
import Todo from "./components/Todo";
import Input from "./components/Input";

function App() {
  const initialState = [
    {
      id: uuid(),
      title: "제목1",
      contents: "내용1",
      isDone: false,
    },
    {
      id: uuid(),
      title: "제목2",
      contents: "내용2",
      isDone: true,
    },
    {
      id: uuid(),
      title: "제목3",
      contents: "내용3",
      isDone: false,
    },
  ];

  const [todos, setTodos] = useState(initialState);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  return (
    <>
      <header
        style={{
          backgroundColor: "#c4a4eb",
        }}
      >
        헤더
      </header>
      <main>
        <Input
          title={title}
          contents={contents}
          todos={todos}
          setTodos={setTodos}
          setTitle={setTitle}
          setContents={setContents}
        />
        <Todo todos={todos} setTodos={setTodos} isDone={false} />
        <Todo todos={todos} setTodos={setTodos} isDone={true} />
      </main>
      <footer
        style={{
          backgroundColor: "#a4e8eb",
        }}
      >
        푸터
      </footer>
    </>
  );
}

export default App;
