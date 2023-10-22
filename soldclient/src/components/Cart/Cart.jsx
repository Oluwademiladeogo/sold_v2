import { useEffect } from "react";

const Cart = () => {
  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const response = await fetch("http://localhost/3000", {
          method: "GET"
        })
        console.log(response)
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        } 
        const data = await response.json();
        if(data.Response === 'False') throw new Error("Data not found")
      }
    catch(error){
  console.log(error)
    }
    }
    fetchData()
  }, [])
  return (
    <>
      <div>Cart page</div>
    </>
  );
};
export default Cart;
