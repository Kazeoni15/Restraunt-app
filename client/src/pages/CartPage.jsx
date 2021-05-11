import React, { useState } from "react";
import { useParams } from "react-router";
import NavCart from "../components/NavCart";
import useAxios from "axios-hooks";
import axios from "axios";


export default function CartPage() {
  let para = useParams();

  let url = "http://localhost:3001/cart/cartnum/" + para.ID;

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const [{ data, loading, error }] = useAxios(url);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  if (data === null)
    return (
      <h1 className="containter padding-top text-align">
        This cart does not exist
      </h1>
    );

  let price = [];
  data.prices.forEach(function (string) {
    price.push(parseInt(string));
  });

  let a = price.reduce(myFunc);
  function myFunc(total, num) {
    return total + num;
  }
 

  function handleName(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleAddress(e) {
    e.preventDefault();
    setAddress(e.target.value);
  }

  function handleCheckout() {
    if(name===""  && address===""){
      alert("Please enter your Name and Address")
    } else{
    axios
      .post("http://localhost:3001/orders", {
        items: data.items,
        quantity: data.quantity,
        total: a,
        name: name,
        address: address,
        resName: data.restrauntName
      })
      .then(function (response) {
        
      })
      .catch(function (error) {
        console.log(error);
      });
      alert("Your order has been placed!")
      window.location= "/"
    }
  }

  return (
    <div>
      <NavCart />
      <div className="container">
        <h1>Your Cart</h1>
        <div className="card padding-top padding-left">
          <div className="row">
            <div className="col-4">
              <b>Items</b>
            </div>
            <div className="col-4">
              <b>Quantity</b>
            </div>
            <div className="col-4">
              <b>Prices (MYR)</b>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-4">{data.items[0]}</div>
            <div className="col-4">{data.quantity[0]}</div>
            <div className="col-4">{data.prices[0]}</div>
          </div>
          <br />
          <div className="row">
            <div className="col-4">{data.items[1]}</div>
            <div className="col-4">{data.quantity[1]}</div>
            <div className="col-4">{data.prices[1]}</div>
          </div>
          <br />

          <div className="row">
            <div className="col-4">{data.items[2]}</div>
            <div className="col-4">{data.quantity[2]}</div>
            <div className="col-4">{data.prices[2]}</div>
          </div>
          <br />

          <div className="row">
            <div className="col-4">{data.items[3]}</div>
            <div className="col-4">{data.quantity[3]}</div>
            <div className="col-4">{data.prices[3]}</div>
          </div>
          <br />

          <div className="row">
            <div className="col-4">{data.items[4]}</div>
            <div className="col-4">{data.quantity[4]}</div>
            <div className="col-4">{data.prices[4]}</div>
          </div>
          <br />
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4"></div>
            <div className="col-4">
              <b>Total: </b> MYR {a}
            </div>
          </div>

          <div>
            <input
              className="form"
              placeholder="Enter your name"
              type="text"
              onChange={handleName}
            />
            <br />
            <br />

            <input
              className="form"
              placeholder="Enter your Address"
              type="text"
              onChange={handleAddress}
            />
            <br />
            <br />

            <button
              onClick={handleCheckout}
              className="btn btn-outline-primary margin-bottom"
            >
              {" "}
              Checkout{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
