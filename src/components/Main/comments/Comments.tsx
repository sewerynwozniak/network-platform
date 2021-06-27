import {useState, useEffect} from 'react'
import './comments-style.css'
import {setComments} from '../../../redux/actions/commentsAction'
import {setUsers} from '../../../redux/actions/usersAction'
import arrowDownIcon from '../../../assets/media/icons/arrow-down.png';
import broadcastIcon from '../../../assets/media/icons/broadcast.png';
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


const [expanded, setExpanded] = useState(false)
const [filtered, setFiltered] = useState(false)



useEffect(() => {
   dispatch(setComments())    
   dispatch(setUsers())    
}, [])






const displayPosts = (comments)=>{


    if(comments.loading){
        return <h1>Loading</h1>
     }

    return (
        comments.map(comment=>(
            
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




const handleExpandedBtn = ()=>{
    setExpanded(!expanded)
}


const filterOwnComments = ()=>{
    setFiltered(true)
    setExpanded(false)
}

const filterNone = ()=>{
    setFiltered(false)
    setExpanded(false)
}




    return (
        <div className='comments__container'>
            <div className='comments__header'>
                <h3 className='comments__title'>Resume your work</h3>
                <input className='comments__input' placeholder='Filter by title' type="text"/>
                <div className="comments__btnWrapper">
                    <button className='comments__btn' onClick={handleExpandedBtn}>
                        <img className='comments__btnIcon' src={broadcastIcon} alt="" /> 
                        Followed 
                        <img className='comments__btnIcon' src={arrowDownIcon} alt="" />
                    </button>                 
                    <ul className={expanded? 'comments__expandedFilter': 'comments__displayNone'}>
                        <li onClick={filterOwnComments} className='comments__expandedFilterLi'>my</li>
                        <li onClick={filterNone} className='comments__expandedFilterLi'>all</li>
                    </ul>                 
                </div>
           
            </div>


            <div className='comments__wrapper'>
                            
                {filtered?displayPosts(comments.comments.filter(com=>com.postId==1)): displayPosts(comments.comments)}

            </div>
        </div>
            
    )
}

export default Comments
