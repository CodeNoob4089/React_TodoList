import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;
export const HeaderContainer = styled.header`
  background-color: #c4a4eb;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;
export const FooterContainer = styled.header`
  background-color: #c4a4eb;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;
export const InputArea = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
  width: 96.6%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  display: inline-block;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const InputField = styled.input`
  width: 70%;
  padding: 8px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  background-color: #c4a4eb;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  border: 1px solid #a981e2;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #a981e2;
  }
`;
export const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TodoItem = styled.div`
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
  width: 200px;
  background-color: #c4a4eb;
  border-radius: 5px;
`;

export const ButtonGroup = styled.div`
  margin: 5px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
`;

export const DeleteButton = styled.button`
  background-color: #ff7070;
  color: white;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #fc4949;
  }
`;

export const CompleteButton = styled.button`
  background-color: #4caf50;
  color: white;
  border-radius: 4px;
  padding: 5px 10px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color: #26ad2c;
  }
`;
export const SubContainer = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 800px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SubCard = styled.div`
  width: 300px;
  height: 300px;
  background-color: #c6a6ed;
  border: 5px groove #c4a4eb;
  padding: 20px;
  font-size: 20px;
`;

export const SubPageButton = styled.button`
  background-color: #f0e784;
  color: white;
  border-radius: 4px;
  padding: 5px 10px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color: #c9c26b;
  }
`;

export const MainPageButton = styled.button`
  background-color: #f0e784;
  color: white;
  border-radius: 4px;
  padding: 5px 10px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color: #c9c26b;
  }
`;
