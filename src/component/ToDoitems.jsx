import ToDoItem from "./ToDoItem";

const ToDoItems = ({ todoItems }) => {
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <ToDoItem todoname={item.name} tododate={item.duedate} />
      ))}
    </div>
  );
};
export default ToDoItems;
