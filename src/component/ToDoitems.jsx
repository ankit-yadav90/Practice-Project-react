import styles from "./ToDoItems.module.css";
import ToDoItem from "./ToDoItem";

const ToDoItems = ({ todoItems }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <ToDoItem todoname={item.name} tododate={item.duedate} />
      ))}
    </div>
  );
};
export default ToDoItems;
