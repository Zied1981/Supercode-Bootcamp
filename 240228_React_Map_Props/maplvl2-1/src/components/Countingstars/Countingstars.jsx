import "./Countingstars.css";

const Countingstars = (props) => {
  let rateFinal = [];
  let ratingSingleItem = Math.floor(props.rate);

  for (let i = 0; i < ratingSingleItem; i++) {
    rateFinal.push("⭐️");
  }
  return <p>{rateFinal}</p>;
};

export default Countingstars;
