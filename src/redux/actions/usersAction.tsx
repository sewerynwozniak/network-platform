import axios from 'axios';



export const setUsers= ()=>{
    return async (dispatch, getState)=>{
        dispatch({type:'FETCH_USERS_REQUEST'})
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/users?_start=0&_limit=10');
            dispatch({
                type:'FETCH_USERS_SUCCESS',
                payload: response.data
            })
        }catch(error){
            dispatch({
                type:'FETCH_USERS_FAILURE',
                error
            })
        }
    }
}


export default setUsers












































































































































































