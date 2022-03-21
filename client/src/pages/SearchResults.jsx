import React from "react";
import Nav from "../components/Nav";
import { useParams } from 'react-router';
import useAxios from 'axios-hooks';
import ListMap from "../components/ListMap";




export default function SearchResult(){

let url = useParams();


    
let URL = url.req
console.log(URL)

function createLists(rests) {
    return (
      <ListMap
        key={rests._id}
        resID={rests._id}
        resName={rests.name}
        openDay={rests.offDays}
        openHours={rests.operationHours}
      />
    );
  }



const [{ data, loading, error }] = useAxios("http://localhost:3001/search-days/"+URL)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>
  
    let restrauntObjects = [...data.docs]
  
    console.log(data);

    return(
        <div className="container">
            <Nav/>
            <h4 className="text-align">Your results</h4>
            <a href='/Search' className="btn btn-outline-success text-align item"> Search again </a>
            <div className="left item row"> {restrauntObjects.map(createLists)}</div>
        </div>
    )
}