import React from 'react';
import './topBar-style.css'
import searchIcon from '../../assets/media/icons/search.png'

function SearchBar() {
    return (
        <input className="topBar__input">
            {/* <img src={searchIcon} alt=""/> */}
        </input>
    );
}

export default SearchBar;