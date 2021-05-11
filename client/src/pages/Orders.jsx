import React from "react";
import useAxios from "axios-hooks"
import Nav from "../components/Nav";
import OrdersMap from "../components/OrdersMap";

function createLists(a) {
    return (
      <OrdersMap
        key={a._id}
        resName={a.restrauntName}
        quantity1={a.quantity[0]}
        quantity2={a.quantity[1]}
        quantity3={a.quantity[2]}
        quantity4={a.quantity[3]}
        quantity5={a.quantity[4]}
        item1={a.items[0]}
        item2={a.items[1]}
        item3={a.items[2]}
        item4={a.items[3]}
        item5={a.items[4]}
        total={a.total}
        address={a.address}     
        name={a.name}
      />
    );
  }


export default function Orders(){

    const [{ data, loading, error }] = useAxios('http://localhost:3001/orders')
    
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error!</p>

      console.log(data)

    return(
        <div>
            <Nav/>
            <div className="container">
            <h1>Orders</h1>
            <div className="left item row"> {data.map(createLists)}</div>
            


                
            </div>
            
        </div>
    )
}