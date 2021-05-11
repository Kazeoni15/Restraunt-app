import React, { useState } from "react";
import useAxios from "axios-hooks";
import { useParams } from "react-router";
import Nav from "../components/Nav";
import axios from "axios";

export default function RestrauntPage() {
  let { RestrauntID } = useParams();

  let apiUrl = "http://localhost:3001/searchid/" + RestrauntID;

  const [Count1, setCount1] = useState(0);
  const [Count2, setCount2] = useState(0);
  const [Count3, setCount3] = useState(0);
  const [Count4, setCount4] = useState(0);
  const [Count5, setCount5] = useState(0);

  let count = [Count1, Count2, Count3, Count4, Count5]

  const [{ data, loading, error }] = useAxios(apiUrl);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  let restrauntObject = data[0];

  

  let a = restrauntObject.setOne.split(" - M");
  let b = restrauntObject.setTwo.split(" - M");
  let c = restrauntObject.setThree.split(" - M");
  let d = restrauntObject.setFour.split(" - M");
  let e = restrauntObject.setFive.split(" - M");


  let item1 = a[0];
  let item2 = b[0];
  let item3 = c[0];
  let item4 = d[0];
  let item5 = e[0];

  let item = [item1, item2, item3, item4, item5]

  let price1 = a[1].split("R")[1];
  let price2 = b[1].split("R")[1];
  let price3 = c[1].split("R")[1];
  let price4 = d[1].split("R")[1];
  let price5 = e[1].split("R")[1];

  
  let price = [parseInt(price1), parseInt(price2), parseInt(price3), parseInt(price4), parseInt(price5)];




  function onAdd1() {
    setCount1(Count1 + 1);
  }

  function onSub1() {
    setCount1(Count1 - 1);

    if(Count1 <= 0){
        setCount1(0)
    }
  }

  function onAdd2() {
    setCount2(Count2 + 1);
  }

  function onSub2() {
    setCount2(Count2 - 1);

    if(Count2 <= 0){
        setCount2(0)
    }
  }
  function onAdd3() {
    setCount3(Count3 + 1);
  }

  function onSub3() {
    setCount3(Count3 - 1);

    if(Count3 <= 0){
        setCount3(0)
    }
  }
  function onAdd4() {
    setCount4(Count4 + 1);
  }

  function onSub4() {
    setCount4(Count4 - 1);

    if(Count4 <= 0){
        setCount4(0)
    }
  }
  function onAdd5() {
    setCount5(Count5 + 1);
  }

  function onSub5() {
    setCount5(Count5 - 1);

    if(Count5 <= 0){
        setCount5(0)
    }
  }

  let cart= {
      restrauntName: restrauntObject.name,
      items: [],
      quantity: [],
      price: []

  }
  
  function handleCart(){

    if(Count1===0&&Count2===0&&Count3===0&&Count4===0&&Count5===0 ){
      alert("Please add items to proceed")
    } else {
     

     for(let i=0; i<count.length; i++){
         if(count[i] > 0){
             cart.items.push(item[i]);
             cart.quantity.push([count[i]]);
             cart.price.push([price[i]*count[i]])

         }
     }



      

     axios.post('http://localhost:3001/cart',{

     
         resName: cart.restrauntName,
         items: cart.items,
         quantity: cart.quantity,
         price: cart.price
     })
     .then(function (response) {
        alert("Added to cart! Your Cart ID is "+response.data + ". You will be asked to enter this when you checkout.")
        window.location="/cart/cartID/"+response.data

      })
      .catch(function (error) {
        console.log(error);
      });

    }


     
  }

  

  return (
    <div className="container">
      <Nav />
      <h4>{restrauntObject.name}</h4>
      <p>
        Open {restrauntObject.operationHours}, Closed {restrauntObject.offDays}
      </p>
      <div className="row text-align">
      <h5 className="col-4">Menu</h5>
      <div className="col-4"></div>
      <div className="margin-bottom col-4">
            <button  onClick={handleCart} className="btn btn-success" >Add to Cart</button>
        </div>

      </div>


      

      <div className="text-align card padding-top padding-left margin-bottom">
        <div className="row">
          <div className="col-4">
            <b>Item</b>
          </div>
          <div className="col-4">
            <b>Price</b>
          </div>
          <div className="col-4">
            <b>Quantity</b>
          </div>
        </div>
        <br />

        <div className="row">
          <div className="col-4">{item1}</div>
          <div className="col-4">MYR {price1} </div>
          <div className="col-4">
            <button onClick={onSub1} className="btn btn-outline-danger">
              <i className="bi bi-dash-circle"></i>
            </button>
            <button onClick={onAdd1} className="btn btn-outline-success">
              <i className="bi bi-plus-circle"></i>
            </button>
            <p>{Count1}</p>
          </div>
        </div>

        <br />
        <div className="row">
          <div className="col-4">{item2}</div>
          <div className="col-4">MYR {price2} </div>
          <div className="col-4">
            <button onClick={onSub2} className="btn btn-outline-danger">
              <i className="bi bi-dash-circle"></i>
            </button>
            <button onClick={onAdd2} className="btn btn-outline-success">
              <i className="bi bi-plus-circle"></i>
            </button>
            <p>{Count2}</p>
          </div>
        </div>

        <br />
        <div className="row">
          <div className="col-4">{item3}</div>
          <div className="col-4">MYR {price3} </div>
          <div className="col-4">
            <button onClick={onSub3} className="btn btn-outline-danger">
              <i className="bi bi-dash-circle"></i>
            </button>
            <button onClick={onAdd3} className="btn btn-outline-success">
              <i className="bi bi-plus-circle"></i>
            </button>
            <p>{Count3}</p>
          </div>
        </div>

        <br />
        <div className="row">
          <div className="col-4">{item4}</div>
          <div className="col-4">MYR {price4} </div>
          <div className="col-4">
            <button onClick={onSub4} className="btn btn-outline-danger">
              <i className="bi bi-dash-circle"></i>
            </button>
            <button onClick={onAdd4} className="btn btn-outline-success">
              <i className="bi bi-plus-circle"></i>
            </button>
            <p>{Count4}</p>
          </div>
        </div>

        <br />
        <div className="row">
          <div className="col-4">{item5}</div>
          <div className="col-4">MYR {price5} </div>
          <div className="col-4">
            <button onClick={onSub5} className="btn btn-outline-danger">
              <i className="bi bi-dash-circle"></i>
            </button>
            <button onClick={onAdd5} className="btn btn-outline-success">
              <i className="bi bi-plus-circle"></i>
            </button>
            <p>{Count5}</p>
          </div>
        </div>

        <br />

        
      </div>
    </div>
  );
}
