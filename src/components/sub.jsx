import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { SubContainer, SubCard, MainPageButton } from "./Style";
import { useNavigate } from "react-router-dom";
function Sub() {
  const params = useParams();
  const navigate = useNavigate();
  const data = useSelector((storeState) => storeState.todoReducer.todos);
  const foundData = data.find(function (item) {
    return item.id === params.id;
  });
  return (
    <SubContainer>
      <SubCard>
        <h2>제목:{foundData.title}</h2>
        <p>내용:{foundData.contents}</p>
        <p>ID:{foundData.id.toString()}</p>
        <MainPageButton
          onClick={() => {
            navigate("/");
          }}
        >
          이전으로
        </MainPageButton>
      </SubCard>
    </SubContainer>
  );
}

export default Sub;
