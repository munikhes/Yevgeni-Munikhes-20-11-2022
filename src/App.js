import './App.css';
import React,{useState}  from 'react';
import {HashRouter as Router,Routes,Route} from 'react-router-dom';
import Main from './components/Main';
import Favorites from './components/Favorites';


function App() {

  const [favoriteCities, setFavoriteCities] = useState([])

  const addToFavorites = (e)=>{
    setFavoriteCities([e,...favoriteCities])
    };
  
console.log(favoriteCities)
 


  return (
    <div className="App">
       <Router> 
      <Routes>
      <Route path={'/'} element={<Main  addToFavorites={addToFavorites}/>}/>
      <Route path={'/favorites'} element={<Favorites favoriteCities={favoriteCities}/>}/>
      </Routes>
     </Router>
   
    </div>
  );
}

export default App;
