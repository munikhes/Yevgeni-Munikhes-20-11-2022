import {SET_KEY} from '../actions';

const initialState = {
    key: '215854'
}


export default function reducerKey(state = initialState,action){
    switch (action.type) {
        case SET_KEY:
            return {...state, key: action.payload};
        default:
            return state;   
    }
}