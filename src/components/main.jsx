import React, { useState } from "react";
import Todo from "./Todo";
import Input from "./Input";
import Layout from "./Layout";
import Header from "./Header";
import Footer from "./Footer";
function Main() {
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

export default Main;
