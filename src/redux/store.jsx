import {createStore} from 'redux';
import commentsReducer from './reducers/comments'
import { composeWithDevTools } from 'redux-devtools-extension';






const fetchComments = async ()=>{

     const promise = await fetch('https://jsonplaceholder.typicode.com/comments?_start=0&_limit=10');    
     const data = await promise.json()
    return data
}

fetchComments()


const store = createStore(commentsReducer);


export default store;