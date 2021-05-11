import React from "react";


export default function OrdersMap(props){
    return(
        <div className="card">
        <div className="card-body">
        <div className="card-title">
        {props.resName}
        </div>
        <div className="card-text">
        <div className="row">
        <div className="col-6"><b>Items</b></div>
        <div className="col-6"><b>Quantity</b></div>
        </div><br/>
        <div className="row">
        <div className="col-6">{props.item1}</div>
        <div className="col-6">{props.quantity1}</div>
        </div>
        <div className="row">
        <div className="col-6">{props.item2}</div>
        <div className="col-6">{props.quantity2}</div>
        </div>
        <div className="row">
        <div className="col-6">{props.item3}</div>
        <div className="col-6">{props.quantity3}</div>
        </div>
        <div className="row">
        <div className="col-6">{props.item4}</div>
        <div className="col-6">{props.quantity4}</div>
        </div>
        <div className="row">
        <div className="col-6">{props.item5}</div>
        <div className="col-6">{props.quantity5}</div>
        </div><br/>
        <div className="row">
        <div className="col-6"><b>Total:</b></div>
        <div className="col-6">MYR {props.total}</div>
        </div><br/>
        <div className="row">
        <div className="col-6"><b>Name:</b></div>
        <div className="col-6">{props.name}</div>
        </div><br/>
        <div className="row">
        <div className="col-6"><b>Address:</b></div>
        <div className="col-6">{props.address}</div>
        </div><br/>
        

        </div>
        
        </div>
        </div>
    )
}
