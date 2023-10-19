import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Loading from "../Loading/Loading";
import "./CardGrid.css";
const CardGrid = (props) => {
  const [items, setItems] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        setisLoading(true);
        setError("")
        const response = await fetch("http://localhost:3000");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        } 
        const data = await response.json();
        if(data.Response === 'False') throw new Error("Data not found")
        setItems(data.items);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setError(error.message);
      } finally {
        setisLoading(false);
      }
    };

    fetchData();
  }, []);
  const ErrorMessage = ({ message }) => {
    return <div className="error">{message}</div>;
  };


  return (
    <>
      <div className="grid">
        {isLoading && <Loading />}
        {!isLoading &&
          !error &&
          items.map((item) => (
            <Card
              key={item.product_id}
              card_img={item.product_img_url}
              card_img_alt={item.product_card_img_alt}
              name={item.product_name}
              description={item.product_description}
              price={item.product_price}
            ></Card>
          ))}
        {error && <ErrorMessage message={error} />}
      </div>
    </>
  );
};
export default CardGrid;
