import React from 'react';
import bellIcon from '../../assets/media/icons/bell.png'
import './topBar-style.css'

function Notifications() {
    return (
        <button className="topBar__messagesBtn">
            <img src={bellIcon} alt=""/>
            <div className="topBar__notifications">3</div>
        </button>
    );
}

export default Notifications;