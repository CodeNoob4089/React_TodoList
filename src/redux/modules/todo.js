import uuid from "react-uuid";

export const AddTODO = "addTodo";
export const DeleteTODO = "deleteTODO";
export const SwitchTODO = "SwitchTODO";

export const addTodo = (payload) => {
  return {
    type: AddTODO,
    payload,
  };
};

export const deletetodo = (payload) => {
  return {
    type: DeleteTODO,
    payload,
  };
};

export const swichtodo = (payload) => {
  return {
    type: SwitchTODO,
    payload,
  };
};

const initialState = {
  todos: [
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
  ],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case AddTODO:
      return { todos: [...state.todos, action.payload] };
    case DeleteTODO:
      return { todos: action.payload };
    case SwitchTODO:
      return { todos: action.payload };

    default:
      return state;
  }
};

export default todoReducer;
