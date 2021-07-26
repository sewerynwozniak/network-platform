import {Link} from "react-router-dom";
import ExpandedMenu from './ExpandedMenu'
import commentsIcon from '../../assets/media/icons/comments.png'
import bellIcon from '../../assets/media/icons/bell.png'
import logo from '../../assets/media/logo.png'
import homeIcon from '../../assets/media/icons/house.png'
import './topBar-style.css'







const Bar = ()=> {
  


    return (
        <header className="topBar">
            <div className='topBar__first'>
                <Link className="topBar__logoContainer"  to="/">
                    <img className="topBar__logo" src={logo} alt="logo"></img>
                </Link>
                <ExpandedMenu />
                <input className="topBar__input topBar__input--first"></input>
                <div className="topBar__rightContainer topBar__rightContainer--first">
                    <Link className="topBar__homeBtn" to="/">
                        <img className="topBar__homeIcon" src={homeIcon} alt=""/>
                    </Link>          
                    <button className="topBar__messagesBtn">
                        <img src={commentsIcon} alt=""/>
                        <div className="topBar__notifications">3</div>
                    </button>
                    <button className="topBar__messagesBtn">
                        <img src={bellIcon} alt=""/>
                        <div className="topBar__notifications">3</div>
                    </button>
                </div>
            </div>
            
            <div className='topBar__second'>
                <input className="topBar__input topBar__input--second"></input>
                <div className="topBar__rightContainer topBar__rightContainer--second">
                    <Link className="topBar__homeBtn" to="/">
                        <img className="topBar__homeIcon" src={homeIcon} alt=""/>
                    </Link>          
                    <button className="topBar__messagesBtn">
                        <img src={commentsIcon} alt=""/>
                        <div className="topBar__notifications">3</div>
                    </button>
                    <button className="topBar__messagesBtn">
                        <img src={bellIcon} alt=""/>
                        <div className="topBar__notifications">3</div>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Bar



