
const initState = {
  loading:false,
  users:[],
  error:null,
  success:false
}


const usersReducer = (state=initState, action)=>{

   switch(action.type){
     case 'FETCH_USERS_REQUEST':
       return {...state, loading:true, error:null}
     case 'FETCH_USERS_SUCCESS':
       return {...state, users:action.payload, loading:false, error:null, success:true}
     case 'FETCH_USERS_FAILURE':
       return {...state, loading:false, error:action.error}
       default:
        return state
   }

}


export default usersReducer