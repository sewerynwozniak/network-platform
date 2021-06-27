import {Link} from "react-router-dom";
import logo from '../../assets/media/logo.png'
import './topBar-style.css'


function Logo() {
    return (
        <Link className="topBar__logoContainer"  to="/">
            <img className="topBar__logo" src={logo} alt="logo"></img>
        </Link>
    );
}

export default Logo;