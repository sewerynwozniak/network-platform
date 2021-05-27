import {createStore, combineReducers, applyMiddleware } from 'redux';
import commentsReducer from './reducers/comments'
import usersReducer from './reducers/users'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';





const rootReducer = combineReducers({
    commentsState:commentsReducer,
    userState:usersReducer
})




const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));



export default store;