const initState = {
  loading:false,
  comments:[],
  error:null,
  success:false
};




const commentsReducer = (state=initState, action)=>{
    switch(action.type){
      case 'FETCH_COMMENTS_REQUEST':
        return {...state, loading:true, error:null}
      case 'FETCH_COMMENTS_SUCCESS':
        return {...state, loading:false, comments:action.payload, success:true}
      case 'FETCH_COMMENTS_FAILURE':
        return {...state, loading:false, error:action.error}
        default:
            return state
    }
}

export default commentsReducer































