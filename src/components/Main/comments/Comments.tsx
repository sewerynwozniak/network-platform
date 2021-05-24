import React from 'react'
import './comments-style.css'
import {RootStateOrAny,useSelector} from 'react-redux';




const Comments = () => {


const comments = useSelector((state:RootStateOrAny) => state)


console.log('comments', comments)


    return (
        <div className='comments__container'>
            <div className='comments__header'>
                <h3 className='comments__title'>Resume your work</h3>
                <input className='comments__input' type="text"/>
                <button className='comments__btn'>Followed</button>
            </div>

            <div className='comments__wrapper'>

                {comments.map(comment=>(
                    <div className='comments__singleWork'>
                        <h3 className='comments__singleWorkTitle'>{comment.name}</h3>
                        <p className='comments__singleWorkContent'>{comment.body}</p>
                        <div className='comments__lower'>
                            <span className='comments__corp'>Subsid corp</span>
                            <span className='comments__detail'>Corporate</span>
                            <span className='comments__update'>Update 3 days ago by John Doe</span>
                        </div>
                    </div>
                ))}


            </div>
        </div>
            
    )
}

export default Comments
