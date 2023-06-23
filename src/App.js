import React, { useState } from "react";
import Todo from "./components/Todo";
import Input from "./components/Input";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  return (
    <>
      <Layout>
        <Header />
        <Input
          title={title}
          contents={contents}
          onChangeTitle={onChangeTitle}
          onChangeContents={onChangeContents}
        />
        <Todo isDone={false} />
        <Todo isDone={true} />
        <Footer />
      </Layout>
    </>
  );
}

export default App;
