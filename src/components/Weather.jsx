import {React,useEffect,useState,useRef} from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import Clear_icon from '../assets/clear.png'
import Cloudy_icon from "../assets/cloudy.png"
import drizzle_icon from '../assets/drizzle.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'
import humidity_icon from '../assets/humidity.png'


const Weather=()=>{

    const inputRef=useRef()

    const [weatherData, setweatherData]= useState(null);

    const allIcons ={
        "01d":Clear_icon,
        "01n":Clear_icon,
        "02d":Cloudy_icon,
        "03d":Cloudy_icon,
        "03n":Cloudy_icon,
        "04d":drizzle_icon,
        "04n":drizzle_icon,
        "09d":rain_icon,
        "09n":rain_icon,
        "10d":rain_icon,
        "10n":rain_icon,
        "13d":snow_icon,
        "13n":snow_icon,
    }

    const search= async(city)=>{
        if(city ===""){
            alert("Enter City Name");
            return;
        }
        try{
            const url =`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
           
            const response =await fetch(url);
            const data=await response.json();
            console.log(data);
            const icon =allIcons[data.weather[0].icon] || Clear_icon
            setweatherData({
                humidity:data.main.humidity,
                windSpeed:data.wind.speed,
                temperature:Math.floor(data.main.temp),
                location:data.name,
                icon: icon

            })
        }catch (error){
            console.log(error)
        }
    }
    useEffect(() => {
        search(" ");
    },[])
    return( 
        <div className='weather'>
            <div className='search-bar'>
                <input  ref={inputRef} type='text' placeholder='Search'  />
                <img  src={search_icon}  onClick={()=>search(inputRef.current.value)}/>
            </div>
            <img src= {weatherData.icon}  alt="" className="weather-icon" />
            <p className='temperature'>{weatherData.temperature}°C</p>
             <p className='location'>{weatherData.location}</p>
             <div className="weather-data">
                <div className="col">
                    <img src={humidity_icon} alt="" />
                    <div>
                        <p>{weatherData.humidity}</p>
                        <span>Humidity</span>
                    </div>
                </div>
                <div className="col">
                    <img src={wind_icon} alt="" />
                    <div>
                        <p>{weatherData.windSpeed} km/h</p>
                        <span>Wind Speed</span>
                    </div>
                </div>
             </div>
            
        </div>
    )
}

export default Weather;