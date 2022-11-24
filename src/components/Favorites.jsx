import './components-css.css';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {connect} from 'react-redux';


function Favorites(props) {

    const [myFavoriters, setMyFavoriters] = useState(props.newcity);
    const navigation = useNavigate();
    const ToMain = () => {
        navigation(`/`)
    }

    return (
        <div>
            <h2 className='title'>My Favorites</h2>
            { myFavoriters.map((c, idx) => 
            <div className='daily-item'>
                 <label className='icon-small'> {idx + 1}.</label>
                <label className='day'>{c.city}</label>
                <img alt="weather" className='icon-small' src={`icons/${c.icon}-s.png`}/>
                <label className='description'>{c.description}</label>
                <label className='max'>{c.forecast}</label>
               </div>
               )}
            <button onClick={ToMain}>back to main</button>
        </div>
    )
}
export default connect((state) => {
    return {newcity: state.reducerAddCancel}
}, null)(Favorites);
