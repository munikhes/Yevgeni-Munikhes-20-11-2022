
export const SET_NAME = 'SET_NAME';
export const SET_KEY = 'SET_KEY';
export const ADD_CITY = 'ADD_CITY';
export const DELETE_CITY = 'DELETE_CITY';


export function setName(newName){
    return {
        type: SET_NAME,
        payload: newName
    }
};
export function setKey(newKey){
    return {
        type: SET_KEY,
        payload: newKey
    }
};
export function addCity(newCity,newForecast,newDescription,icon){
    return {
        type: ADD_CITY,
        payload:{
          name : newCity , forecast: newForecast, description: newDescription, icon:icon
        }
    }
};
export function deleteCity(name){
    return {
        type: DELETE_CITY,
        payload: name
    }
};
