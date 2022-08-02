import './App.css';
import React, {useState} from 'react'
import axios from 'axios'
import { PrimerComponente } from './components/PrimerComponente';
function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=fc0bf223e978b88de9bf74c01a6fb2ce`;
  
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }
  

  return (
    <div className="App">
        <div className='container'>
        <div className='search'>
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type='text'
          />
        </div>
        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>
          </div>
          <div className='temp'>
          </div>
            {data.main ? <h2>{data.main.temp} °F</h2> : null} 
          <div className='description'>
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>


        {data.name != undefined && 
        <div className='bottom'>
        <div className='feels'>
         {data.main ? <p>{data.main.feels_like} °F</p> : null}
         <p>Feels like</p>
        </div>
        <div className='humidity'>
         {data.main ? <p>{data.main.humidity} %</p> : null}
         <p>Humidity</p>
        </div>
        <div className='wind'>
        {data.wind ? <p>{data.wind.speed} MPH</p> : null}
        <p>Wind speed</p>
        </div>
        </div>
        }
     </div>
    </div>
  );
}

export default App;
