import React, {useState} from 'react';
import arrowDownIcon from '../../assets/media/icons/arrow-down.png';
import homeIcon from '../../assets/media/icons/house2.png';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";






function ExpandedMenu() {

const [click, setClick] = useState(false);

const handleExpandedMenu =()=>setClick(!click);

    return (
        <button 
            onClick={handleExpandedMenu} 
            className="topBar__arrowDown">
            <img className="topBar__homeIcon" src={homeIcon} alt=""/>
             <span className="topBar__currentMenu">Home</span>
            <img  src={arrowDownIcon} alt=""/>

            <ul className={click? 'topBar__ul--visible' : 'topBar__ul--novisible'}>
                <input type="text" name="" id=""/>
                <span className="topBar__linkCategory">Platform</span>
                <li className="topBar__li">
                    <Link className="topBar__link" to='/'>Home</Link>
                </li>
                <li className="topBar__link">
                    <Link className="topBar__link"  to='#'>Publications</Link>
                </li> 
                <li className="topBar__link"> 
                    <Link className="topBar__link"  to='#'>People</Link>
                </li> 
                <li className="topBar__link"> 
                    <Link className="topBar__link"  to='#'>Entities</Link>
                </li> 
                <li className="topBar__link"> 
                    <Link className="topBar__link"  to='#'>Administration</Link>
                </li>
             </ul>
        </button>
    );
}

export default ExpandedMenu;