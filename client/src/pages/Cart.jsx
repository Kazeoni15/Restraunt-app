import React, { useState } from "react";
import NavCart from "../components/NavCart";

export default function Cart() {
  
  const [cartID, setCartID] = useState(0);

  function handleChange(e){
      e.preventDefault()
      setCartID(e.target.value)
  }

  
  return (
    <div>
      <NavCart />


      <div className="container padding-top">
        <h3 className="margin-bottom">Enter your cartID</h3>
        <input className="form margin-bottom" onChange={handleChange} type="text"/><br />
        <a href={'/cart/cartID/'+cartID} className="btn btn-success">GO! </a>
      </div>
    </div>
  );
}
