
const initState = {
  loading:false,
  posts:[],
  error:null,
  success:false
}


const postsReducer = (state=initState, action)=>{

   switch(action.type){
     case 'FETCH_POSTS_REQUEST':
       return {...state, loading:true, error:null}
     case 'FETCH_POSTS_SUCCESS':
       return {...state, posts:action.payload, loading:false, error:null, success:true}
     case 'FETCH_POSTS_FAILURE':
       return {...state, loading:false, error:action.error}
       default:
        return state
   }

}


export default postsReducer