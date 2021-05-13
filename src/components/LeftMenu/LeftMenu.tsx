import React from 'react';
import ProfileWrapper from './ProfileWrapper';
import ButtonWrapper from './ButtonWrapper';
import './leftMenu-style.css'

function LeftMenu() {
    return (
        <aside className="leftMenu">
            <ProfileWrapper />
            <ButtonWrapper />
        </aside>
    );
}

export default LeftMenu;