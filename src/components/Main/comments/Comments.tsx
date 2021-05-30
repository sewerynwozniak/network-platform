import {useEffect} from 'react'
import './comments-style.css'
import {setComments} from '../../../redux/actions/commentsAction'
import {setUsers} from '../../../redux/actions/usersAction'
import {RootStateOrAny,useSelector, useDispatch} from 'react-redux';




const Comments = () => {


const comments = useSelector((state:RootStateOrAny) => state.commentsState);
const users = useSelector((state:RootStateOrAny)=>state.usersState);

const dispatch = useDispatch()

//filter user by their comments
const filterAuthor =(postId)=>{
    if(comments.success && users.success){
        return users.users.filter(user=>user.id==postId? user:'')[0].name
   }
   
}




useEffect(() => {
   dispatch(setComments())    
   dispatch(setUsers())    
}, [])





const renderPost = ()=>{
    if(comments.loading){
       return <h1>Loading</h1>
    }

    return (
        comments.comments.map(comment=>(
            <div className='comments__singleWork'>
                <h3 className='comments__singleWorkTitle'>{comment.name}</h3>
                <p className='comments__singleWorkContent'>{comment.body}</p>
                <div className='comments__lower'>
                    <span className='comments__corp'>{filterAuthor(comment.postId)}</span>
                    <span className='comments__detail'>Corporate</span>
                    <span className='comments__update'>Update 3 days ago by {filterAuthor(comment.postId)}</span>
                </div>
            </div>
        ))
    )

}

    return (
        <div className='comments__container'>
            <div className='comments__header'>
                <h3 className='comments__title'>Resume your work</h3>
                <input className='comments__input' type="text"/>
                <button className='comments__btn'>Followed</button>
            </div>

            <div className='comments__wrapper'>
                            
                {renderPost()}

            </div>
        </div>
            
    )
}

export default Comments
