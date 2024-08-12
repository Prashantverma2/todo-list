import { useState, useRef } from "react";
import { useContext } from "react";
import { TodoItemsContext } from "../store/Todo-items-store";

function AddTodo() {
  const contextObj = useContext(TodoItemsContext);
  const onNewItem = contextObj.addNewItem;
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();
  const noOfUpdates = useRef(0);

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
    noOfUpdates.current += 1;
    console.log(`noOfupdates are :${noOfUpdates.current}`);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
