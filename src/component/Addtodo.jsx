import { useState, useRef } from "react";
function addTodo({ onNewItem }) {
  const [TodoName, setTodoName] = useState("");
  const [Duedate, setDueDate] = useState("");
  const noOfUpdates = useRef(0);

  const handleNameChang = (event) => {
    setTodoName(event.target.value);
    noOfUpdates.current += 1;
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
    console.log("No of updates: ", noOfUpdates.current);
  };

  const handleAddButtonClicked = () => {
    onNewItem(TodoName, Duedate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter to Hear"
            value={TodoName}
            onChange={handleNameChang}
          />
        </div>
        <div className="col-4">
          <input type="date" value={Duedate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-Button"
            onClick={handleAddButtonClicked}
          >
            add
          </button>
        </div>
      </div>
    </div>
  );
}
export default addTodo;
