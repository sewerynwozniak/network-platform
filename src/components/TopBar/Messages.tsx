import React from 'react';
import commentsIcon from '../../assets/media/icons/comments.png'
import './topBar-style.css'

function Messages() {
    return (
        <button className="topBar__messagesBtn">
            <img src={commentsIcon} alt=""/>
            <div className="topBar__notifications">3</div>
        </button>
    );
}

export default Messages;