import React from 'react';
import './leftMenu-style.css';
import publicationsIcon from '../../assets/media/icons/publications.png'
import ecosystemIcon from '../../assets/media/icons/ecosystem.png'
import entitiesIcon from '../../assets/media/icons/entities2.png'


function ButtonWrapper() {
    return (
        <div className="leftMenu__buttonWrapper">
            <div className="buttonWrapper__singleRow">
                <img className="buttonWrapper__icon" src={publicationsIcon} alt=""/>
                <h5 className="buttonWrapper__text">Publications</h5>
            </div>
            <div className="buttonWrapper__singleRow">
                <img className="buttonWrapper__icon" src={ecosystemIcon} alt=""/>
                <h5 className="buttonWrapper__text">Ecosystem</h5>
            </div>
            <div className="buttonWrapper__singleRow">
                <img className="buttonWrapper__icon" src={entitiesIcon} alt=""/>
                <h5 className="buttonWrapper__text">Entities</h5>
            </div>
        </div>
    );
}

export default ButtonWrapper;