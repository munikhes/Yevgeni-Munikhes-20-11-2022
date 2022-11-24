import './components-css.css';
import React  from 'react';
import  Forecast from './Forecast';
import Search  from './Search';
import Header from './Header';
import Footer from './Footer';



 export default function Main(props) {


            return (
                <div>
            <Header/>
           <Search/>
           <Forecast/>
           <Footer/>    
                </div>
            )       
}

