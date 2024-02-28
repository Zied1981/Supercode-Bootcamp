import "./MovieElements.css";
const MovieElements = (props) => {
  return (
    <div className="cont">
      <h3>{props.content.title}</h3>
      <p>{props.content.year}</p>
      <h2>{props.content.director}</h2>
      <p>{props.content.duration}</p>

      <p>{props.content.rate}</p>

      {props.content.genre.map((typegenre, index) => (
        <p key={index}>{typegenre}</p>
      ))}
    </div>
  );
};

export default MovieElements;

//1. movieelemente über props übergeben, {props.(content=unser map item ergebnis).title/descr/autor usw...}
