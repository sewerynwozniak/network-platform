import axios from 'axios';



export const setPosts= ()=>{
    return async (dispatch, getState)=>{
        dispatch({type:'FETCH_POSTS_REQUEST'})
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=3');
            dispatch({
                type:'FETCH_POSTS_SUCCESS',
                payload: response.data
            })
        }catch(error){
            dispatch({
                type:'FETCH_POSTS_FAILURE',
                error
            })
        }
    }
}


export default setPosts












































































































































































