import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
function App() {
  const [count, setCount] = useState(0);
  const name = "Airpods pro";
  const description = "Description is very short";
  const price = "$99.99";
  return (
    <>
      <Card
        card_img="/card.jpg"
        card_img_alt="bible"
        name={name}
        description={description}
        price={price}
      ></Card>
    </>
  );
}

export default App;
