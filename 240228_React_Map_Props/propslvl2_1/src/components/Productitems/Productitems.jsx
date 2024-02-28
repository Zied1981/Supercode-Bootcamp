import "./Productitems.css";

const Productitems = (props) => {
  return (
    <div className="cont">
      <img src={props.element.img} alt="bild" />
      <p>{props.element.product}</p>
      <p>{props.element.price}</p>
    </div>
  );
};

export default Productitems;
