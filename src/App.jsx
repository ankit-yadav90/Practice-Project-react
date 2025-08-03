import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./component/AppName";
import Addtodo from "./component/Addtodo";
import "./App.css";
import ToDoItem from "./component/ToDoItem";
import ToDoItems from "./component/ToDoitems";

function App() {
  const todoItems = [
    {
      name: "Buy milk",
      duedate: "4/10/2023",
    },
    {
      name: "go to collage",
      duedate: "4/10/2023",
    },
    {
      name: "like this video",
      duedate: "4/10/2023",
    },
  ];
  return (
    <>
      <center className="to-do-container">
        <AppName></AppName>
        <Addtodo></Addtodo>
        <ToDoItems todoItems={todoItems} />
      </center>
    </>
  );
}

export default App;
