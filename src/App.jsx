import { useState } from 'react'
import Search from './component/Search'
import "./component/styel.scss"
import Current from './component/Current'
import logo from "./assets/weather.png"
import Forecast from './component/ForecastW'
function App() {
  return (
    <>
    <div className='wrapper'>
      <div className='jano'>
    <img src={logo} alt="" />
    Weather jaano
      </div>
    <Search></Search>
    </div>
    
    </>
  )
}

export default App
