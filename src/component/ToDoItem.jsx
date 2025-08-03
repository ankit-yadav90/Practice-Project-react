function ToDoItem({ todoname, tododate }) {
  return (
    <div className="row kg-row">
      <div className="col-6">{todoname}</div>
      <div className="col-4">{tododate}</div>
      <div className="col-2">
        <button type="button" className="btn btn-danger kg-Button">
          Delete
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
