import React, {useState} from 'react';
import './components-css.css';
import { useNavigate } from 'react-router-dom';
import './components-css.css';


export default function Header(props) {
    const navigation =  useNavigate();
    const ToFavorites =()=>{
        navigation(`/favorites`)
    }
  

    return (
        <div>
              <div><button onClick={ToFavorites}>To Favorites</button></div>
              <img alt="weather" className='icon-img' src={`icons/46023.jpg`}/>
        </div>
    )

}
