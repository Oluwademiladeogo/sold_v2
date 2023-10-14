import { useState } from "react";
import "./App.css";
import CardGrid from "./components/CardGrid/CardGrid";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import path from "path";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    {/* <Login/> */}
      <Navbar token="true" />
      <CardGrid />
    </>
  );
}
//use passport to do an isauth kind of thing. if so, do something
// pass the isauth as a function into any component youd be expecting it in props
export default App;
