import "./Card.css";
const Card = (props) => {
  const cardClickHandler = () => {
    window.location = `/${props.link}`;
    console.log("clicked");
  };
  return (
    <>
      <div className="card__body item" onClick={cardClickHandler}>
        <img
          className="card__img"
          src={props.card_img}
          alt={props.card_img_alt}
        />
        <div className="card__text">
          <div className="card__name">{props.name}</div>
          <div className="card__description"> {props.description}</div>
          <a href="cardnum" className="card__price">
            {props.price}
          </a>
        </div>
      </div>
    </>
  );
};
export default Card;
