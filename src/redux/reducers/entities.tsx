const initState = {
    loading:false,
    entities:[],
    error:null,
    success:false
  };
  
  
 
  
  const entitiesReducer = (state=initState, action)=>{
      switch(action.type){
        case 'FETCH_ENTITIES_REQUEST':
          return {...state, loading:true, error:null}
        case 'FETCH_ENTITIES_SUCCESS':
          return {...state, loading:false, entities:action.payload, success:true}
        case 'FETCH_ENTITIES_FAILURE':
          return {...state, loading:false, error:action.error}
          default:
              return state
      }
  }
  
  export default entitiesReducer