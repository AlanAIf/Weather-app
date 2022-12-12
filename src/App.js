import React, { useState } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=fc0bf223e978b88de9bf74c01a6fb2ce&lang=sp`;

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
        <div className='segundo-container'>
          <div className={`background-image ${data.weather ? data.weather[0].main : null}`}>
            <div className={`top ${data.weather ? data.weather[0].main : null}a`}>
              <div className='location'>
                <p>{data.name}</p>
              </div>
              <div className={`description`}>
                {data.weather ? <p>{data.weather[0].main}</p> : null}
              </div>
            </div>
          </div>

          {data.name != undefined &&
            <div className='bottom'>
              <div className='temperature'>
                <p>Temperature: </p>
                {data.main ? <h2>{data.main.temp} °C</h2> : null}
              </div>
              <div className='feels'>
                <p>Feels like:</p>
                {data.main ? <p>{data.main.feels_like} °C</p> : null}
              </div>
              <div className='humidity'>
                <p>Humidity:</p>
                {data.main ? <p>{data.main.humidity} %</p> : null}
              </div>
              <div className='wind'>
                <p>Wind speed:</p>
                {data.wind ? <p>{data.wind.speed} MPH</p> : null}
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
