import React, { useContext, useState } from "react";
import { TodoContext } from "./context/TodoContext";

export default function EditModal({
  showModal,
  setShowModal,
  handleCloseModal,
}) {
  const [modalValue, setModalValue] = useState("");
  const { dispatchTodos } = useContext(TodoContext);

  function handleEdit() {
    if (modalValue) {
      dispatchTodos({
        type: "edit",
        payload: { todoId: showModal, mValue: modalValue },
      });
      setModalValue("");
      setShowModal("");
    } else {
      alert("please fill the input field");
    }
  }

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <form>
          <input
            value={modalValue}
            onChange={(evt) => setModalValue(evt.target.value)}
            type="text"
            placeholder="Please enter new todo"
          />
          <button
            onClick={handleEdit}
            type="button"
            className="btn btn-primary font-weight-bold float-right m-2"
          >
            Ok
          </button>
          <button
            onClick={handleCloseModal}
            type="button"
            className="btn btn-danger font-weight-bold float-right m-2"
          >
            Close
          </button>
        </form>
      </div>
    </div>
  );
}
