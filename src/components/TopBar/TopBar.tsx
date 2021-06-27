import {Link} from "react-router-dom";
import SearchBar from './SearchBar'
import ExpandedMenu from './ExpandedMenu'
import Messages from './Messages'
import Notifications from './Notifications'
import Logo from './Logo'
import homeIcon from '../../assets/media/icons/house.png'
import './topBar-style.css'







const Bar = ()=> {
  


    return (
        <header className="topBar">
            <Logo />
            <ExpandedMenu />
            <SearchBar />
            <div className="topBar__rightContainer">
                <Link className="topBar__homeBtn" to="/">
                    <img className="topBar__homeIcon" src={homeIcon} alt=""/>
                </Link>          
                <Messages />
                <Notifications />
            </div>
        </header>
    )
}

export default Bar



