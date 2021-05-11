import React, { useState } from "react";
import Nav from "../components/Nav";


export default function SearchRes() {
  const week = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23]
  const offDaysSet = ["mon", "sat,sun", "sun", "sun,mon", "tue,thu", "wed,sun"];
  const operationSet = [
    "10am - 9pm",
    "8am - 6am",
    "8am - 6pm",
    "9am - 10pm",
    "9am - 9am",
  ];
  let dayReq = "";
  let timeReq = 0;
  const [day, setDay] = useState();
  const [time, setTime] = useState();

  function handleDay(e){
      e.preventDefault();
      
      setDay(e.target.value)

  }

  function handleTime(e){
      e.preventDefault();
      setTime(e.target.value)
      
  }

  
 
  console.log("timeis" +time);
  switch (day) {
    case "mon":
      dayReq =
        offDaysSet[1] +
        ", " +
        offDaysSet[2] +
        ", " +
        offDaysSet[4] +
        ", " +
        offDaysSet[5];
      break;
    case "tue":
      dayReq =
        offDaysSet[0] +
        ", " +
        offDaysSet[1] +
        ", " +
        offDaysSet[2] +
        ", " +
        offDaysSet[3] +
        ", " +
        offDaysSet[5];
      break;
    case "wed":
      dayReq =
        offDaysSet[0] +
        ", " +
        offDaysSet[1] +
        ", " +
        offDaysSet[2] +
        ", " +
        offDaysSet[3] +
        ", " +
        offDaysSet[4];
      break;
    case "thu":
      dayReq =
        offDaysSet[0] +
        ", " +
        offDaysSet[1] +
        ", " +
        offDaysSet[2] +
        ", " +
        offDaysSet[3] +
        ", " +
        offDaysSet[5];
      break;
    case "fri":
      dayReq =
        offDaysSet[0] +
        ", " +
        offDaysSet[1] +
        ", " +
        offDaysSet[2] +
        ", " +
        offDaysSet[3] +
        ", " +
        offDaysSet[4] +
        ", " +
        offDaysSet[5];
      break;
    case "sat":
      dayReq =
        offDaysSet[0] +
        ", " +
        offDaysSet[2] +
        ", " +
        offDaysSet[3] +
        ", " +
        offDaysSet[4] +
        ", " +
        offDaysSet[5];
      break;
    case "sun":
      dayReq = offDaysSet[0] + ", " + offDaysSet[4];
      break;
    default:
      dayReq = "";
      break;
  };

switch(time){
    case '0': 
      timeReq = operationSet[1] + ", " + operationSet[4]
      break;
    case '1':
      timeReq = operationSet[1] + ", " + operationSet[4]
      break;
    case '2':
      timeReq = operationSet[1] + ", " + operationSet[4]
      break;
    case '3':
      timeReq = operationSet[1] + ", " + operationSet[4]
      break;
    case '4':
      timeReq = operationSet[1] + ", " + operationSet[4]
      break;
    case '5':
      timeReq = operationSet[1] + ", " + operationSet[4]
      break;
    case '6':
      timeReq = operationSet[4]
      break;
    case '7':
      timeReq = operationSet[4]
      break;
    case '8':
      timeReq = operationSet[1] + ", " + operationSet[2] + ", " + operationSet[4]
      break;
    case '9':
      timeReq = operationSet[1] + ", " + operationSet[2] + ", " + operationSet[3] + ", " + operationSet[4]
      break;
    case '10':
      timeReq = operationSet[0] + ", " + operationSet[1] + ", " + operationSet[2] + ", " + operationSet[3]+ ", " + operationSet[4]
      break;
    case '11':
      timeReq = operationSet[0] + ", " + operationSet[1] + ", " + operationSet[2] + ", " + operationSet[3]+ ", " + operationSet[4]
      break;
    case '12':
      timeReq = operationSet[0] + ", " + operationSet[1] + ", " + operationSet[2] + ", " + operationSet[3]+ ", " + operationSet[4]
      break;
    case '13':
      timeReq = operationSet[0] + ", " + operationSet[1] + ", " + operationSet[2] + ", " + operationSet[3]+ ", " + operationSet[4]
      break;
    case '14':
      timeReq = operationSet[0] + ", " + operationSet[1] + ", " + operationSet[2] + ", " + operationSet[3]+ ", " + operationSet[4]
      break;
    case '15':
      timeReq = operationSet[0] + ", " + operationSet[1] + ", " + operationSet[2] + ", " + operationSet[3]+ ", " + operationSet[4]
      break;
    case '16':
      timeReq = operationSet[0] + ", " + operationSet[1] + ", " + operationSet[2] + ", " + operationSet[3]+ ", " + operationSet[4]
      break;
    case '17':
      timeReq = operationSet[0] + ", " + operationSet[1] + ", " + operationSet[2] + ", " + operationSet[3]+ ", " + operationSet[4]
      break;
    case '18':
      timeReq = operationSet[0] + ", " + operationSet[1] + ", " + operationSet[3]+ ", " + operationSet[4]
      break;
    case '19':
      timeReq = operationSet[0] + ", " + operationSet[1] + ", " + operationSet[3]+ ", " + operationSet[4]
      break;
    case '20':
      timeReq = operationSet[0] + ", " + operationSet[1] + ", " + operationSet[3]+ ", " + operationSet[4]
      break;
    case '21':
      timeReq = operationSet[1] +  ", " + operationSet[3]+ ", " + operationSet[4]
      break;
    case '22':
      timeReq = operationSet[1] + ", " + operationSet[4]
      break;
    case '23':
      timeReq = operationSet[1] + ", " + operationSet[4]
      break;
    
    default: 
      timeReq = ""
      break;

    
  }


  let url = dayReq + "  " + timeReq;

  console.log(url)

  


  return (
    <div>
      <Nav />

      
      <div className="container">

      <h3>Search for Restraunts at a time convenient for you..</h3>

      <select onChange={handleDay} className="form-select" aria-label="Default select example">
        <option value=" ">Select a day of the Week</option>
        <option value={week[1]}>Monday</option>
        <option value={week[2]}>Tuesday</option>
        <option value={week[3]}>Wednesday</option>
        <option value={week[4]}>Thursday</option>
        <option value={week[5]}>Friday</option>
        <option value={week[6]}>Saturday</option>
        <option value={week[0]}>Sunday</option>
      </select>

      <select onChange={handleTime} className="form-select" aria-label="Default select example">
        <option value=" ">Select a time</option>
        <option value={hours[0]}>12 am</option>
        <option value={hours[1]}>1 am</option>
        <option value={hours[2]}>2 am</option>
        <option value={hours[3]}>3 am</option>
        <option value={hours[4]}>4 am</option>
        <option value={hours[5]}>5 am</option>
        <option value={hours[6]}>6 am</option>
        <option value={hours[7]}>7 am</option>
        <option value={hours[8]}>8 am</option>
        <option value={hours[9]}>9 am</option>
        <option value={hours[10]}>10 am</option>
        <option value={hours[11]}>11 am</option>
        <option value={hours[12]}>12 pm</option>
        <option value={hours[13]}>1 pm</option>
        <option value={hours[14]}>2 pm</option>
        <option value={hours[15]}>3 pm</option>
        <option value={hours[16]}>4 pm</option>
        <option value={hours[17]}>5 pm</option>
        <option value={hours[18]}>6 pm</option>
        <option value={hours[19]}>7 pm</option>
        <option value={hours[20]}>8 pm</option>
        <option value={hours[21]}>9 pm</option>
        <option value={hours[22]}>10 pm</option>
        <option value={hours[23]}>11 pm</option>
        
       
        
      </select>

      <a href={"/searchResults/"+ url} className="btn btn-success">Search </a>




   
      </div>

      
      
    </div>
  );
}
