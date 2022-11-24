import './components-css.css';
import React,{useState,useEffect}  from 'react';
import { connect } from 'react-redux'
import {setName} from '../redux/actions'
import {setKey} from '../redux/actions'
import {addCity} from '../redux/actions'



function Search(props){


const [city, setCity] = useState('Tel Aviv'); 
const FavoriteCities = [];
const [cityKey, setCityKey] = useState("215854");
const [cities, setCities] = useState([]); 
const [description, setDescription] = useState("Mostly Cloudly");
const key = 'XxyAf9OWsykmBjtvQpOQI5Tala9beV5U '; 
const [forecast, setForecast] = useState();
const [icon, setIcon] = useState("");

const loadOptions = async(e) =>{
    setCity(e.target.value)
   
  };
  const getCity =(city_key,city_name)=>{
    setCity(city_name);
    FavoriteCities.push(city_name);
    console.log(FavoriteCities);
    setCityKey(city_key)
    const values = {name: city_name, key:city_key};
    props.changeName(values.name);
    props.changeKey(values.key);
    if(FavoriteCities.indexOf(city_name)!==-1){
      document.getElementById("div1").style.backgroundColor = "lightblue";
     
    };
   
    }

 useEffect(()=>{
    fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${key}&q=${city}`)
    .then((response)=> response.json())
    .then((response)=>{
         setCities(response)
        }
    )
   },[city]);
       useEffect(()=>{
                fetch( `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${key}&details=true&`)
                .then((response)=> response.json())
                .then((response)=>{
                setDescription(response[0].WeatherText)
                setIcon(response[0].WeatherIcon)
                setForecast(Math.round(response[0].Temperature.Metric.Value))
                    })
               },[cityKey]);

   const AddToFavorites = ()=>{
    alert("City Added/Removed")
    return props.addCityToFavorites(city,forecast,description,icon) 
  };


   return(
    <div>
           <input className='container' type="text" onChange={loadOptions} placeholder={"Search for City"} size="100"/>
           {cities  && cities.map((city)=>
          <div onClick={()=>{getCity(city.Key,city.LocalizedName)}}><h3 id="div1">{city.LocalizedName}</h3> </div>
          )}
          <div className='weather'>
            <div className='top'>
              <p className='city'>{city}</p>
              <p className='city'>{description}</p>
              <img alt="weather" className='icon-small' src={`icons/${icon}-s.png`}/>
             <p className='city-temp'>{forecast}°C</p>
            </div>
          </div>
         <br></br>
         <div>
         <button onClick={AddToFavorites}>Add City To Favorites</button>
         </div>
           
           
    </div>
   )
}


export default connect(
  undefined,
  {
    changeName:setName,
    changeKey:setKey,
    addCityToFavorites:addCity
  }

)(Search);

