function Card(props) {
  return (
    <div className="container">
      <div className="card">
        <img src={props.imgsrc} alt="Avatar"></img>
        <h2>{props.titel}</h2>
        <h3>{props.snma}</h3>
        <a href={props.link} target="_blank">
          <button>Watch Now</button>
        </a>
      </div>
    </div>
  );
}

export default Card;
