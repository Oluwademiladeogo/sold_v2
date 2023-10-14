import "./Card.css";
const Card = (props) => {
  return (
    <>
    
        <div className="card__body item">
          <img
            className="card__img"
            src={props.card_img}
            alt={props.card_img_alt}
          />
          <div className="card__text">
            <div className="card__name">{props.name}</div>
            <div className="card__description"> {props.description}</div>
            <a href="cardnum" className="card__price">{props.price}</a>
          </div>
        </div>
    </>
  );
};
export default Card;
