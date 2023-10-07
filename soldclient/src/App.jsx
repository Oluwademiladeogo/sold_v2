import { useState } from "react";
import "./App.css";
import CardGrid from "./components/CardGrid/CardGrid";
import Navbar from "./components/Navbar/Navbar";
function App() {
  const [count, setCount] = useState(0);
  const name = "Airpods pro";
  const description = "Description is very short";
  const price = "$99.99";
  return (
    <>
    <Navbar token="true"/>
      <CardGrid
        card_img="/card.jpg"
        card_img_alt="bible"
        name={name}
        description={description}
        price={price}
      ></CardGrid>
    </>
  );
}
//use passport to do an isauth kind of thing. if so, do something
// pass the isauth as a function into any component youd be expecting it in props
export default App;
