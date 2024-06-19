import React, { useState } from 'react'
import cloudy from "../assets/cloudy.png"
import rainy from "../assets/rainy.png"
import clear from "../assets/clear.png"
import haze from "../assets/haze.png"
import drop from "../assets/drop-down-arrow.png"
const Forecast = ({ data }) => {
  const a = [];
  for (let i = 0; i < 40; i = i + 8) {
    console.log(data.list[i]);
    a.push(data.list[i]);
  }
  const[change , setChange] = useState(false);
  function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = date + ' ' + month;
    return time;
  }
  
  const get = (s) =>{
  if (s.includes("rain")) {
      return rainy
  }
  if (s.includes("haze")) {
      return haze
  }
  if (s.includes("cloud")) {
      return cloudy
  }
  if (s.includes("clear")) {
     return clear
  }
}
  return (
    <div className='sabka'>
      <h1>Forecast for next 5 days</h1>
      <div className="white"></div>
      {a.map((list) => {
        return (
          <>
          <div className="heading">
         {timeConverter(list.dt)}<p></p>
         <img src={get(list.weather[0].description)} alt="" />
          {list.main.temp}°C<p></p>
          {list.weather[0].description}
            </div>
            
          </>
        )
      })}
      <div className='white'></div>

    </div >
  )
}

export default Forecast
