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
            <a href='/Search' className="btn btn-outline-success text-align item"> Search again <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
  <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
  <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
</svg></a>
            <div className="left item row"> {restrauntObjects.map(createLists)}</div>
        </div>
    )
}