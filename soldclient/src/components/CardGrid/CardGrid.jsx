import Card from "../Card/Card";
import "./CardGrid.css";
const CardGrid = (props) => {
  return (
    <>
      <div className="grid">
        <Card
          card_img={props.card_img}
          card_img_alt={props.card_img_alt}
          name={props.name}
          description={props.description}
          price={props.price}
        ></Card>
      </div>
    </>
  );
};
export default CardGrid;