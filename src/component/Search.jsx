import React, { useEffect } from 'react'
import { useState } from 'react'
import "./styel.scss"
import Current from './Current';
import Forecast from './ForecastW';
const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
const urlWeather = "https://api.openweathermap.org/data/2.5/weather"
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'ea3c3012e5msh28dfde550edc060p1d656ejsn780dfb08a32f',
    'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
  }
};
const Search = () => {
  const [city, setCity] = useState("")
  const [Result, setResult] = useState("")
  const [data, setData] = useState({})
  const [foreData, setFore] = useState({})
  const [current, setCurrent] = useState(false)
  const [Fore, setForecast] = useState(false)
  const getCW = async () => {
    try {
      const ressponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Result}&appid=faaabea199aced8368e75493afd97971&units=metric`)
      const result = await ressponse.json();
      if (ressponse.status === 200) {
        setData(result);
        console.log(200);
        setCurrent(true);
      }
    }
    catch (e) {
    }
  }
  const getFW = async () => {
    try {
      const ressponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${Result}&appid=faaabea199aced8368e75493afd97971&units=metric`)
      const result = await ressponse.json();
      if (ressponse.status === 200) {
        setFore(result);
        setForecast(true);
      }
    }
    catch (e) {
    }
  }
  const handlechange = (e) => {
    e.preventDefault();
    setResult(city);
    try {
      getFW();
      getCW();

    }
    catch (e) {
    }
  }
  return (
    <>
      <div className='FormContainer'>
        <form onSubmit={handlechange}>
          <input type="text" placeholder='hit the city' className='Input' value={city} onChange={(e) => { setCity(e.target.value) }} />
          <button >Search</button>
        </form>
        <div>
        </div>
      </div>
      <div className='data'>
        <div>
      {current ? <Current data={data}></Current> : <div className='data'></div>}
      </div>
      <div>
      {Fore ? <Forecast data = {foreData}></Forecast>:<div className='data'></div>}
      </div>
      </div>
    </>

  )
}

export default Search
