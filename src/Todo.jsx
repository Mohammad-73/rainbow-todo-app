import React, { useContext } from "react";
import PropTypes from "prop-types";
import { TodoContext } from "./context/TodoContext";

export default function Todo({ todo, setShowModal }) {
  const { dispatchTodos } = useContext(TodoContext);

  // handle show modal
  function handleShowModal() {
    setShowModal((showModal) => {
      return todo.id;
    });
  }

  return (
    <li
      style={{ border: `2px solid ${todo.color}` }}
      className={todo.isCompleted ? "completed" : ""}
    >
      <div className="form-check">
        <label className="form-check-label">
          <input
            className="checkbox"
            type="checkbox"
            onClick={() =>
              dispatchTodos({ type: "changeStatus", payload: todo })
            }
            checked={todo.isCompleted}
          />
          {todo.title}
          <i className="input-helper"> </i>
        </label>
      </div>
      <i onClick={handleShowModal} className=" edit fa fa-edit"></i>
      <i
        onClick={() => dispatchTodos({ type: "delete", payload: todo })}
        className="remove mdi mdi-close-circle-outline"
      ></i>
    </li>
  );
}

// set proptypes for props
