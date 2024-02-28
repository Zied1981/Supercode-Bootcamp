import "./Todoitems.css";
const Todoitems = (props) => {
  return (
    <ul>
      <li>{props.singleitem}</li>
    </ul>
  );
};

export default Todoitems;
