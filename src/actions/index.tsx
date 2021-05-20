export const increment = (nr:number)=>{
    return{
        type:'INCREMENT',
        payload:nr
    }
}