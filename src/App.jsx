import React, { useState, useContext } from "react";
import Todo from "./Todo";
import TodoInput from "./TodoInput";
import EditModal from "./EditModal";
import { TodoContext } from "./context/TodoContext";

// random color for lis border
const colors = [
  "tomato",
  "chartreuse",
  "aqua",
  "coral",
  "cyan",
  "darkorange",
  "deeppink",
  "gold",
  "khaki",
  "orchid",
];

export default function App() {
  const [liColors, setLiColors] = useState(colors);
  const [showModal, setShowModal] = useState("");
  const { todos } = useContext(TodoContext);

  // handle close modal
  function handleCloseModal() {
    setShowModal(!showModal);
  }

  return (
    <div className="page-content page-container" id="page-content">
      <div className="row container d-flex justify-content-center">
        <div className="col-md-12">
          <div className="card px-3">
            <div className="card-body">
              <h2 className="card-title">Rainbow Todo list</h2>
              <TodoInput liColors={liColors} />
              <div className="list-wrapper">
                <ul className="d-flex flex-column todo-list">
                  {todos.map((todo) => (
                    <Todo
                      key={todo.id}
                      todo={todo}
                      setShowModal={setShowModal}
                    />
                  ))}
                </ul>
                {showModal && (
                  <EditModal
                    showModal={showModal}
                    setShowModal={setShowModal}
                    handleCloseModal={handleCloseModal}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
