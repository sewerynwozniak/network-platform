import React from 'react';
import logo from '../../assets/media/logo.png'
import './topBar-style.css'


function Logo() {
    return (
        <img className="topBar__logo" src={logo} alt="logo">
            
        </img>
    );
}

export default Logo;