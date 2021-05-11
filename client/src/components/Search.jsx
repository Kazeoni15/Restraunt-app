import React from "react";
import useAxios from "axios-hooks"
import ListMap from "./ListMap"


export default function Search() {
  const date = new Date();
  const week = ["sun","mon", "tue", "wed", "thu", "fri", "sat"];
  const offDaysSet = ["mon", "sat,sun", "sun", "sun,mon", "tue,thu", "wed,sun"];
  const operationSet = ["10am - 9pm", "8am - 6am", "8am - 6pm", "9am - 10pm", "9am - 9am"];

  let dayObject = date.getDay();
  let time = date.getHours();
  let day = week[dayObject]
  let dayReq = "";
  let timeReq = "";

 

  switch(day){
    case "mon": 
      dayReq = offDaysSet[1]+ ", " + offDaysSet[2]+ ", " + offDaysSet[4]+ ", " + offDaysSet[5];
      break;
    case "tue":
      dayReq = offDaysSet[0] + ", " + offDaysSet[1] + ", " + offDaysSet[2] + ", " + offDaysSet[3] + ", " + offDaysSet[5];
      break;
   case "wed":
      dayReq = offDaysSet[0] + ", " + offDaysSet[1] + ", " + offDaysSet[2] + ", " + offDaysSet[3] + ", " + offDaysSet[4];
      break;
    case 'thu':
      dayReq = offDaysSet[0] + ", " + offDaysSet[1] + ", " + offDaysSet[2] + ", " + offDaysSet[3] + ", " + offDaysSet[4];
      break;
    case "fri":
      dayReq = offDaysSet[0] + ", " + offDaysSet[1] + ", " + offDaysSet[2] + ", " + offDaysSet[3] + ", " + offDaysSet[4] + ", " + offDaysSet[5];
      break;
    case "sat":
      dayReq = offDaysSet[0] + ", " + offDaysSet[2] + ", " + offDaysSet[3] + ", " + offDaysSet[4] + ", " + offDaysSet[5];
      break;
    case "sun": 
      dayReq = offDaysSet[0] + ", " + offDaysSet[4];
      break;
    default:
      dayReq = ""
      break;
     


  }


  switch(time){
    case 0: 
      timeReq = operationSet[1] + ", " + operationSet[4]
      break;
    case 1:
      timeReq = operationSet[1] + ", " + operationSet[4]
      break;
    case 2:
      timeReq = operationSet[1] + ", " + operationSet[4]
      break;
    case 3:
      timeReq = operationSet[1] + ", " + operationSet[4]
      break;
    case 4:
      timeReq = operationSet[1] + ", " + operationSet[4]
      break;
    case 5:
      timeReq = operationSet[1] + ", " + operationSet[4]
      break;
    case 6:
      timeReq = operationSet[4]
      break;
    case 7:
      timeReq = operationSet[4]
      break;
    case 8:
      timeReq = operationSet[1] + ", " + operationSet[2] + ", " + operationSet[4]
      break;
    case 9:
      timeReq = operationSet[1] + ", " + operationSet[2] + ", " + operationSet[3] + ", " + operationSet[4]
      break;
    case 10:
      timeReq = operationSet[0] + ", " + operationSet[1] + ", " + operationSet[2] + ", " + operationSet[3]+ ", " + operationSet[4]
      break;
    case 11:
      timeReq = operationSet[0] + ", " + operationSet[1] + ", " + operationSet[2] + ", " + operationSet[3]+ ", " + operationSet[4]
      break;
    case 12:
      timeReq = operationSet[0] + ", " + operationSet[1] + ", " + operationSet[2] + ", " + operationSet[3]+ ", " + operationSet[4]
      break;
    case 13:
      timeReq = operationSet[0] + ", " + operationSet[1] + ", " + operationSet[2] + ", " + operationSet[3]+ ", " + operationSet[4]
      break;
    case 14:
      timeReq = operationSet[0] + ", " + operationSet[1] + ", " + operationSet[2] + ", " + operationSet[3]+ ", " + operationSet[4]
      break;
    case 15:
      timeReq = operationSet[0] + ", " + operationSet[1] + ", " + operationSet[2] + ", " + operationSet[3]+ ", " + operationSet[4]
      break;
    case 16:
      timeReq = operationSet[0] + ", " + operationSet[1] + ", " + operationSet[2] + ", " + operationSet[3]+ ", " + operationSet[4]
      break;
    case 17:
      timeReq = operationSet[0] + ", " + operationSet[1] + ", " + operationSet[2] + ", " + operationSet[3]+ ", " + operationSet[4]
      break;
    case 18:
      timeReq = operationSet[0] + ", " + operationSet[1] + ", " + operationSet[3]+ ", " + operationSet[4]
      break;
    case 19:
      timeReq = operationSet[0] + ", " + operationSet[1] + ", " + operationSet[3]+ ", " + operationSet[4]
      break;
    case 20:
      timeReq = operationSet[0] + ", " + operationSet[1] + ", " + operationSet[3]+ ", " + operationSet[4]
      break;
    case 21:
      timeReq = operationSet[1] +  ", " + operationSet[3]+ ", " + operationSet[4]
      break;
    case 22:
      timeReq = operationSet[1] + ", " + operationSet[4]
      break;
    case 23:
      timeReq = operationSet[1] + ", " + operationSet[4]
      break;
    
    default: 
      timeReq = ""
      break;

    
  }

  

  console.log(timeReq);

  let url = dayReq + "  " + timeReq;

  

  
      
   
    const [{ data, loading, error }] = useAxios("http://localhost:3001/search-days/"+url)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>
  
    let restrauntObjects = [...data.docs]
  
    console.log(data);

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

 

  return (
    <div className="container">
      <h1 className="search-title">Restraunts open now</h1>

      <div>
        
        <div className="left item row"> {restrauntObjects.map(createLists)}</div>
      </div>
    </div>
  );
}
