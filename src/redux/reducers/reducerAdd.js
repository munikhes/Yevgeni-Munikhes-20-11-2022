import {ADD_CITY} from '../actions';
import {DELETE_CITY} from '../actions';

const initialState = [];


export default function reducerAddCancel(state = initialState  ,action){
    switch (action.type) {
        case ADD_CITY:
            const i = state.findIndex(object => {
                return object.city === action.payload.name;
              });
        if(i===-1){
            return [...state, {city: action.payload.name, forecast: action.payload.forecast, description: action.payload.description, icon: action.payload.icon}];
        }
        if(i!==-1){
            return state.filter((c)=>{
                
                return c.city !== action.payload.name;
            });
        }
   
        case DELETE_CITY:
            return state.filter((c)=>{
                
                return c.city !== action.payload.name;
            });
        default:
            return state;   
    }
}
