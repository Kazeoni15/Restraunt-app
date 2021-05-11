import React from 'react';


export default function ListMap(props){

    let RestrauntID = props.resID;
    

    return(
        <a className="col-md-3 text-decoration btn btn-outline-success" href = {"/restraunts/" + RestrauntID}>

        <div className="">
            <div className="">
                <h5 className="">{props.resName}</h5>
                <p>Closed on: {props.openDay}</p>
                <p>open: {props.openHours}</p>
            </div>
        </div>



        </a>
    )

}




