import styles from "./ToDoItems.module.css";
import ToDoItem from "./ToDoItem";

const ToDoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <ToDoItem
          key={item.name}
          todoname={item.name}
          tododate={item.duedate}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};
export default ToDoItems;
