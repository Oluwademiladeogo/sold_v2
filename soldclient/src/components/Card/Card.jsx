import "./Card.css";
const Card = (props) => {
  return (
    <>
      <div className="grid">
        <div className="card__body item">
          <img
            className="card__img"
            src={props.card_img}
            alt={props.card_img_alt}
          />
          <div className="card__text">
            <div className="card__name">{props.name}</div>
            <div className="card__description"> {props.description}</div>
            <div className="card__price">{props.price}</div>
          </div>
        </div>

        <div className="card__body item">
          <img
            className="card__img"
            src={props.card_img}
            alt={props.card_img_alt}
          />
          <div className="card__text">
            <div className="card__name">{props.name}</div>
            <div className="card__description"> {props.description}</div>
            <div className="card__price">{props.price}</div>
          </div>
        </div>

        <div className="card__body item">
          <img
            className="card__img"
            src={props.card_img}
            alt={props.card_img_alt}
          />
          <div className="card__text">
            <div className="card__name">{props.name}</div>
            <div className="card__description"> {props.description}</div>
            <div className="card__price">{props.price}</div>
          </div>
        </div>

        <div className="card__body item">
          <img
            className="card__img"
            src={props.card_img}
            alt={props.card_img_alt}
          />
          <div className="card__text">
            <div className="card__name">{props.name}</div>
            <div className="card__description"> {props.description}</div>
            <div className="card__price">{props.price}</div>
          </div>
        </div>

        <div className="card__body item">
          <img
            className="card__img"
            src={props.card_img}
            alt={props.card_img_alt}
          />
          <div className="card__text">
            <div className="card__name">{props.name}</div>
            <div className="card__description"> {props.description}</div>
            <div className="card__price">{props.price}</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
