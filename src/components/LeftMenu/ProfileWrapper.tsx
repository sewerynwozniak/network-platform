import React from 'react';
import './leftMenu-style.css';
import profileImage from '../../assets/media/profileImage.png';
import peopleIcon from '../../assets/media/icons/people.png';
import userPlusIcon from '../../assets/media/icons/user-plus.png';
import publicationsIcon from '../../assets/media/icons/publications.png';
import plusIcon from '../../assets/media/icons/plus.png';

function ProfileWrapper() {
    return (
        <div className="profileWrapper">
            <div className="profileWrapper__upper">
                <img className="profileWrapper__image" src={profileImage} alt="profile image"/>
                <h6 className="profileWrapper__name">Adam Sandler</h6>
                <h6 className="profileWrapper__job">Manager</h6>
            </div>
            <div className="profileWrapper__lower">
                <div className="profileWrapper__singleRow">
                    <img src={peopleIcon} alt=""/>
                    <h5 className="profileWrapper__network">Your network</h5>
                    <button className="profileWrapper__btn">
                        <img src={userPlusIcon} alt=""/>
                    </button>
                </div>
                <div className="profileWrapper__singleRow">
               
                    <img src={publicationsIcon} alt="publications icon"/>
                    <h5 className="profileWrapper__publications">Your Publications</h5>
                    <button className="profileWrapper__btn">
                        <img className="profileWrapper__embeddedIcon" src={plusIcon} alt=""/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProfileWrapper;