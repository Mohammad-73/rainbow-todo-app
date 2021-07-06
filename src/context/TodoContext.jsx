import React, { useReducer, createContext } from "react";
import { v4 as uuid } from "uuid";

const initialTodos = [
  { id: uuid(), title: "task one", isCompleted: false, color: "aqua" },
  { id: uuid(), title: "task two", isCompleted: true, color: "tomato" },
  { id: uuid(), title: "task three", isCompleted: false, color: "gold" },
];

function TodosReducer(state, action) {
  let todo = action.payload;
  switch (action.type) {
    case "add": {
      return [action.payload, ...state];
    }
    case "changeStatus": {
      return state.map((t) => {
        if (todo.id === t.id) {
          return { ...t, isCompleted: !todo.isCompleted };
        } else {
          return t;
        }
      });
    }
    case "delete": {
      return state.filter((t) => t.id !== todo.id);
    }
    case "edit": {
      return state.map((t) => {
        if (action.payload.todoId === t.id) {
          return { ...t, title: action.payload.mValue };
        } else {
          return t;
        }
      });
    }
    default:
      return state;
  }
}

export const TodoContext = createContext();

export default function TodoProvider({ children }) {
  const [todos, dispatchTodos] = useReducer(TodosReducer, initialTodos);

  return (
    <TodoContext.Provider value={{ todos, dispatchTodos }}>
      {children}
    </TodoContext.Provider>
  );
}
