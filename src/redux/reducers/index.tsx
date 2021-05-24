import counterReducer from './counter';
//import isLoggedReducer from './comments';
import {combineReducers} from 'redux';


const allReducers = combineReducers({
    counter:counterReducer,
  
})

export default allReducers;






























