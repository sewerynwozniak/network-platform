import axios from 'axios';



export const setComments = ()=>{
    return async (dispatch, getState)=>{
        dispatch({type:'FETCH_COMMENTS_REQUEST'})
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/comments?_start=0&_limit=10');
            dispatch({
                type:'FETCH_COMMENTS_SUCCESS',
                payload: response.data
            })
        }catch(error){
            dispatch({
                type:'FETCH_COMMENTS_FAILURE',
                error
            })
        }
    }
}


export default setComments












































































































































































