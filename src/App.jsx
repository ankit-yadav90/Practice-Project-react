import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./component/AppName";
import Addtodo from "./component/Addtodo";
import "./App.css";
import ToDoItem from "./component/ToDoItem";
import ToDoItems from "./component/ToDoitems";
import { useState } from "react";
import WelcomeMessage from "./component/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemduedate) => {
    const newtodoItem = [
      ...todoItems,
      { name: itemName, duedate: itemduedate },
    ];
    setTodoItems(newtodoItem);
  };

  const handleDeleteButtonClicked = (todoItemName) => {
    const newTodoItem = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItem);
  };

  return (
    <>
      <center className="to-do-container">
        <AppName></AppName>
        <Addtodo onNewItem={handleNewItem}></Addtodo>
        {todoItems.length === 0 && <WelcomeMessage />}
        <ToDoItems
          todoItems={todoItems}
          onDeleteClick={handleDeleteButtonClicked}
        />
      </center>
    </>
  );
}

export default App;
