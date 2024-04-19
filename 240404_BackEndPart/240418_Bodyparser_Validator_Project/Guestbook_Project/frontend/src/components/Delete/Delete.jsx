const Delete = ({ item, setData }) => {
  console.log(item.id);
  const deleteEntry = () => {
    fetch(`http://localhost:4001/api/v1/entries/${item.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err, "fehler in der delete func"));
  };

  return (
    <section>
      <button onClick={deleteEntry}>X</button>
    </section>
  );
};

export default Delete;
