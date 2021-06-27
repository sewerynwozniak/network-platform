import React, {useState, useEffect} from 'react';
import {RootStateOrAny, useSelector, useDispatch} from 'react-redux'
import {setEntities} from '../../redux/actions/entitiesAction'
import setUsers from '../../redux/actions/usersAction'
import arrowDownIcon from '../../assets/media/icons/arrow-down.png';
import homeIcon from '../../assets/media/icons/house2.png';
import publicationsIcon from '../../assets/media/icons/publications.png';
import peopleIcon from '../../assets/media/icons/people.png';
import entitiesIcon from '../../assets/media/icons/entities.png';
import entitiesIcon2 from '../../assets/media/icons/entities2.png';
import administrationIcon from '../../assets/media/icons/administration.png';
import documentIcon from '../../assets/media/icons/document.png';
import privacyIcon from '../../assets/media/icons/privacy.png';
import settingsIcon from '../../assets/media/icons/settings.png';
import logoutIcon from '../../assets/media/icons/logout.png';
import {Link} from "react-router-dom";






function ExpandedMenu() {



    const users = useSelector((state:RootStateOrAny)=>state.usersState.users);
    const photos = useSelector((state:RootStateOrAny) => state.entitiesState.entities);
 

    const dispatch = useDispatch()

    useEffect(() => { 
        dispatch(setUsers())    
        dispatch(setEntities())  
     }, [])


     



const [click, setClick] = useState(false);

const [search, setSearch] = useState('');



const menuList = [
    {
        key:1,
        name:'Home',
        path:'/',
        srcIcon:homeIcon,
        category:'platform'
    },
    {
        key:2,
        name:'Publications',
        path:'/test',
        srcIcon:publicationsIcon,
        category:'platform'
    },
    {
        key:3,
        name:'People',
        path:'/test',
        srcIcon:peopleIcon,
        category:'platform'
    },
    {
        key:4,
        name:'Entities',
        path:'/entities',
        srcIcon:entitiesIcon,
        category:'platform'
    },
    {
        key:5,
        name:'Administration',
        path:'/test',
        srcIcon:administrationIcon,
        category:'platform'
    },
    {
        key:6,
        name:'Client Contract',
        path:'/test',
        srcIcon:publicationsIcon,
        category:'workspaces'
    },
    {
        key:7,
        name:'Supplier Contract',
        path:'/test',
        srcIcon:publicationsIcon,
        category:'workspaces'
    },
    {
        key:8,
        name:'Corporate',
        path:'/test',
        srcIcon:entitiesIcon2,
        category:'workspaces'
    },
    {
        key:9,
        name:'Group Norms',
        path:'/test',
        srcIcon:documentIcon,
        category:'workspaces'
    },
    {
        key:10,
        name:'Real Estate Contract',
        path:'/test',
        srcIcon:publicationsIcon,
        category:'workspaces'
    },
    {
        key:11,
        name:'Leanne Graham',
        path:'/profile',
        srcIcon:photos[0]?.thumbnailUrl,
        category:'account'
    },
    {
        key:12,
        name:'Privacy',
        path:'/test',
        srcIcon:privacyIcon,
        category:'account'
    },
    {
        key:13,
        name:'Settings',
        path:'/test',
        srcIcon:settingsIcon,
        category:'account'
    },
]




const [menu, setMenu] = useState(menuList);


const handleExpandedMenu =()=>{
    setClick(!click)
     
};

const filter = (e)=>{
    setSearch(e.target.value); 
}


useEffect(() => {
    
}, [])


useEffect(() => {
    setMenu(menuList.filter(m=>m.name.toLowerCase().indexOf(search.toLowerCase())!==-1))
}, [search])


const handleClick = (e)=>{

    if(click && !myRef.current?.contains(e.target)){
        setClick(false)    
    }

}

useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
        document.removeEventListener('click', handleClick)
    }
}, [click])



const myRef = React.useRef<HTMLDivElement>(null);



    return (
        <div ref={myRef}>
        <button 
            onClick={handleExpandedMenu} 
            className="expMenu__arrowDown">
            <img className="expMenu__homeIcon" src={homeIcon} alt=""/>
             <span className="expMenu__currentMenu">Home</span>
            <img src={arrowDownIcon} alt=""/>
        </button>
            <ul className={click? 'expMenu__ul--visible' : 'expMenu__ul--novisible'}>
                <input className='expMenu__input' onChange={filter} type="text" placeholder='Filter'/>

                {menu.some(e=>e.category=='platform')&&<span className="expMenu__linkCategory">Platform</span>}
                {menu.filter(e=>e.category=='platform').map(({name, srcIcon, path})=>(
                    <li className="expMenu__li">
                    <div className="expMenu__iconContainer"><img className="expMenu__liIcon" src={srcIcon} alt=""/></div> <Link className="expMenu__link" to={path}>{name}</Link>
                    </li>
                ))}

                {menu.some(e=>e.category=='workspaces')&&<span className="expMenu__linkCategory">Workspaces</span>}
                {menu.filter(e=>e.category=='workspaces').map(({name, srcIcon, path})=>(
                    <li className="expMenu__li">
                    <div className="expMenu__iconContainer"><img className="expMenu__liIcon" src={srcIcon} alt=""/></div> <Link className="expMenu__link" to={path}>{name}</Link>
                    </li>
                ))}
                 {menu.some(e=>e.category=='account')&&<span className="expMenu__linkCategory">Account</span>}
                 {menu.filter(e=>e.category=='account').map(({name, srcIcon, path})=>(
                    <li className="expMenu__li">
                    <div className="expMenu__iconContainer"><img className="expMenu__liIcon" src={srcIcon} alt=""/></div> <Link className="expMenu__link" to={path}>{name}</Link>
                    </li>
                ))}
                <button className='expMenu__logout'>
                    <img className='expMenu__logOutIcon' src={logoutIcon}></img>
                    <Link className="expMenu__link" to='/test'>Logout</Link>                  
                </button>
             </ul>
        </div>
    );
}

export default ExpandedMenu;