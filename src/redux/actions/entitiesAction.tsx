import axios from 'axios';



export const setEntities = ()=>{
    return async (dispatch, getState)=>{
        dispatch({type:'FETCH_ENTITIES_REQUEST'})
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=100');
            dispatch({
                type:'FETCH_ENTITIES_SUCCESS',
                payload: response.data
            })
        }catch(error){
            dispatch({
                type:'FETCH_ENTITIES_FAILURE',
                error
            })
        }
    }
}


export default setEntities