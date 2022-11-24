import reducerName  from './reducerName';
import reducerKey  from './reducerKey';
import reducerAddCancel from './reducerAdd';


import { combineReducers } from 'redux';

const allReducers = combineReducers({
    reducerName,
    reducerKey,
    reducerAddCancel
});

export default allReducers;