import {SET_NAME} from '../actions';

const initialState = {
    name: 'Tel Aviv'
}


export default function reducerName(state = initialState,action){
    switch (action.type) {
        case SET_NAME:
            return {...state, name: action.payload};
        default:
            return state;   
    }
}