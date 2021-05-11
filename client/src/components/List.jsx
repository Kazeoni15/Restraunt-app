import React from "react";
import useAxios from "axios-hooks";
import ListMap from "./ListMap";

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

export default function List() {
  const [{ data, loading, error }] = useAxios("http://localhost:3001/");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  const restrauntObjects = [...data.docs];

  return (
    <div className="container">
      <div className="text-align">
        <h5 className="section-heading"> Restraunts in your area.. </h5>

        <div className="left item row"> {restrauntObjects.map(createLists)}</div>
      </div>
    </div>
  );
}
