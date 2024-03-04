import "./Todolist.css";
import Todoitems from "../Todoitems/Todoitems";

const todoArray = [
  { todo1: "Buy Grocery " },
  { todo2: "Send Email" },
  { todo3: "Buy Finish Assuigenment" },
  { todo4: " Write blog " },
  { todo5: "Bake cake " },
];

const Todolist = () => {
  return (
    <div>
      <h2>My Todos</h2>
      <ul>
        <Todoitems singleitem={todoArray[0].todo1} />
        <Todoitems singleitem={todoArray[1].todo2} />
        <Todoitems singleitem={todoArray[2].todo3} />
        <Todoitems singleitem={todoArray[3].todo4} />
        <Todoitems singleitem={todoArray[4].todo5} />
      </ul>
    </div>
  );
};

export default Todolist;
