import { useEffect, useState } from "react";
import "./Dashboard.css";
import Post from "../../components/Post/Post";
const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/v1/toDos")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <Post setdata={setData} />
      {data.map((item, index) => (
        <div key={index}>
          <p>{item.id}</p>
          <p>{item.toDo_title}</p>
          <p>{item.toDo_type}</p>
          <p>{item.toDo_status}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
