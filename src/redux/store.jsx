import {createStore, combineReducers, applyMiddleware } from 'redux';
import commentsReducer from './reducers/comments'
import usersReducer from './reducers/users'
import postsReducer from './reducers/posts'
import entitiesReducer from './reducers/entities'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';




const rootReducer = combineReducers({
    commentsState:commentsReducer,
    usersState:usersReducer,
    postsState:postsReducer,
    entitiesState:entitiesReducer
})




const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));



export default store;