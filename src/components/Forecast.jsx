import './components-css.css';
import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';



function Forecast(props) {
        const key = 'XxyAf9OWsykmBjtvQpOQI5Tala9beV5U   ';
        const city = props.username;
        const cityKey = props.cityKey;
        const [forecast, setForecast] = useState([]);
        const [description, setDescription] = useState("Cloudly");
        const [image, setImage] = useState("");
        const [fiveForecast, setFiveForecast] = useState([]);
        const [metric, setMetric] = useState("true");
        const [unit, setUnit] = useState('°C')
        // find forecast :

        useEffect(() => {
            fetch(`http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${key}&details=true&`)
            .then((response) => response.json()).then((response) => {
                setForecast(Math.round(response[0].Temperature.Metric.Value))
                setDescription(response[0].WeatherText)
                setImage(response[0].WeatherIcon)
            

            })
        }, [cityKey]);

        // //find forecast for the next 5 days:


        useEffect(()=>{
            fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${key}&metric=${metric}`)
            .then((response)=> response.json())
            .then((response)=>{
             setFiveForecast(response.DailyForecasts)
             
                }
            )
           },[cityKey]);
        const ChangeUnits = ()=>{
            if(metric == "true"){
                fiveForecast.forEach((t)=>{
                    const change = (t.Temperature.Maximum.Value)*9/5+32;
                    t.Temperature.Maximum.Value = change})
                setUnit('F')
                setMetric("false")  
            }
            else{
            setMetric("true") 
            setUnit('°C') 
            fiveForecast.forEach((t)=>{
            const change2 = (t.Temperature.Maximum.Value-32)*5/9;
            t.Temperature.Maximum.Value = change2})
            
            }
            
        }
        return (
        <div>
            <h2 className='title'>Forecast for the next 5 days:</h2> 
      
                {fiveForecast && fiveForecast.map((t) =>
                            <div className='daily-item'>
                                  <img alt="weather" className='icon-small' src={`icons/${t.Day.Icon}-s.png`}/>
                                <label className='day'>{t.Date.slice(0, 10)}</label>
                                <label className='description'>{t.Day.IconPhrase}</label>
                                <label className='max'>{Math.round(t.Temperature.Maximum.Value)}{unit}</label>
                            </div>
                )} 
                    <div>  <button onClick={ChangeUnits}>Change Units</button>
                    </div>
        </div>
    )
};

export default connect((state) => {
    return {username: state.reducerName.name, cityKey: state.reducerKey.key}
}, null)(Forecast);
