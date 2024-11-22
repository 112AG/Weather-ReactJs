import React, { useEffect, useState } from 'react';
import MyLocationIcon from '@mui/icons-material/MyLocation';

function Location({setYourCity}) {
    
    
    let getLocationAPI = async (lat, long) => {
        const Location_URL = "https://api.openweathermap.org/data/2.5/weather";
        const API_KEY = "7d88b436f0d35d241ab5217c2093a0e0";
    
        let response = await fetch(`${Location_URL}?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`);
        let locationData = await response.json();
        let city = locationData.name;
        let result = {
            cityName: city.name,
            temp: city.main.temp,
            tempMin: city.main.temp_min,
            tempMax: city.main.temp_max,
            humidity: city.main.humidity,
            feelsLike: city.main.feels_like,
            weather: city.weather[0].description,
        }
        console.log(result);
        setYourCity(result);
    }

// GET YOUR CURRENT LOCATION.
    async function gotLocation(position) {
        const result =  await getLocationAPI(position.coords.latitude, position.coords.longitude);
        // console.log(position.coords.latitude, position.coords.longitude);
        console.log(result);
    }

    function failedToGet() {
        console.log("some error occur");
    }

    let getLocation = async () => {
        navigator.geolocation.getCurrentPosition(gotLocation, failedToGet);
    }

    return (
        <div className='text-black flex items-center gap-3'>
            <span className='text-blue-600 cursor-pointer' onClick={getLocation}>
                <MyLocationIcon />
            </span>
            Check Your City
        </div>
    );
}

export default Location;
