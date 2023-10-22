import "./App.css";
import CardGrid from "./components/CardGrid/CardGrid";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import Dashboard from "./components/Dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar token="true" />
      <Routes>
        <Route path="/" element={<CardGrid/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </>
  );
}
//use passport to do an isauth kind of thing. if so, do something
// pass the isauth as a function into any component youd be expecting it in props
export default App;
//you can also export the routes you need from index.js file and import here
