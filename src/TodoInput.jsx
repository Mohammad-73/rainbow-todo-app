import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import { TodoContext } from "./context/TodoContext";

export default function TodoInput({ liColors }) {
  const [inputData, setInputData] = useState("");
  const { dispatchTodos } = useContext(TodoContext);

  // handle add todo to list
  function handleAddTodo() {
    if (inputData) {
      dispatchTodos({
        type: "add",
        payload: {
          id: uuid(),
          title: inputData,
          isCompleted: false,
          color: liColors[Math.floor(Math.random() * 10)],
        },
      });
      setInputData("");
    } else {
      alert("please fill the input field");
    }
  }

  return (
    <div className="add-items d-flex">
      <input
        value={inputData}
        onChange={(evt) => setInputData(evt.target.value)}
        type="text"
        className="form-control todo-list-input"
        placeholder="What do you need to do today?"
      />
      <button
        onClick={handleAddTodo}
        className="add btn btn-primary font-weight-bold todo-list-add-btn"
      >
        Add
      </button>
    </div>
  );
}

// set proptypes for props
