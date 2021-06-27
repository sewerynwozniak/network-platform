import {Link} from "react-router-dom";
import './leftMenu-style.css';
import publicationsIcon from '../../assets/media/icons/publications.png'
import ecosystemIcon from '../../assets/media/icons/ecosystem.png'
import entitiesIcon from '../../assets/media/icons/entities2.png'



function ButtonWrapper() {
    return (
        <div className="leftMenu__buttonWrapper">
                <Link className="buttonWrapper__singleRow" to="/test"> 
                    <img className="buttonWrapper__icon" src={publicationsIcon} alt=""/>
                    <h5 className="buttonWrapper__text">Publications</h5>
                </Link>
                <Link className="buttonWrapper__singleRow" to="/test"> 
                    <img className="buttonWrapper__icon" src={ecosystemIcon} alt=""/>
                    <h5 className="buttonWrapper__text">Ecosystem</h5>
                </Link>
    
                <Link className="buttonWrapper__singleRow" to="/entities">    
                    <img className="buttonWrapper__icon" src={entitiesIcon} alt=""/>
                    <h5 className="buttonWrapper__text">Entities</h5>
                </Link>

        </div>
    );
}

export default ButtonWrapper;