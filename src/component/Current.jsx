import React from 'react'
import cloudy from "../assets/cloudy.png"
import rainy from "../assets/rainy.png"
import clear from "../assets/clear.png"
import haze from "../assets/haze.png"
import sunrise from "../assets/sunrise.png"
import sunset from "../assets/sunset.png"
const Current = ({ data }) => {
    const date = new Date();
    const time = date.getHours() + ":" + date.getMinutes();
    console.log(time);
    let dir = "";
    let condi = "";
    if (data.wind.deg > 0 && data.wind.deg < 90) {
        dir = "NE"
    }
    if (data.wind.deg > 90 && data.wind.deg < 180) {
        dir = "SE"
    }
    if (data.wind.deg > 180 && data.wind.deg < 270) {
        dir = "SW"
    }
    if (data.wind.deg > 270 && data.wind.deg < 360) {
        dir = "NW"
    }
    const s = data.weather[0].description;
    if (s.includes("rain") || s.includes("mist")) {
        condi = rainy
    }
    if (s.includes("haze")) {
        condi = haze
    }
    if (s.includes("cloud")) {
        condi = cloudy
    }
    if (s.includes("clear")) {
        condi = clear
    }
console.log(data);
const ti= data.sys.sunset;
const dat = new Date(ti*1000);
const hours = dat.getHours();
const min = dat.getMinutes();
const setTime = hours + ":" + min
const dat2 = new Date(data.sys.sunrise*1000);
const h1 = dat2.getHours();
const m1 = dat2.getMinutes();
const ti2 = h1 + ":" + m1

    return (
        <>
        <p></p>
        <div className='current'>
            <p></p>
            <h1>Current Weather</h1>
            <div className='heading1'>
                <h3>{time}</h3>
                <h2>{data.name} ,{data.sys.country} </h2>
                <div className='heading2'>
                <img src={condi} alt="" />
                <h1>{data.main.temp}°C</h1>
                </div>
            </div>
            <div className="heading3">
                <p>weather : {data.weather[0].description}</p>
                <p></p>
                <p>WD : {data.wind.speed}m/s {dir}</p>
                <p>Humidity :{data.main.humidity}%</p>
                <p>Press : {data.main.pressure}hPa</p>
                <div className="sun">
                <div className="sunset">
                    <img src={sunset} alt="" />
                    <p>{setTime}</p>
                </div>
                <div className="sunrise">
                    <img src={sunrise} alt="" />
                    <p>{ti2}</p>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Current
