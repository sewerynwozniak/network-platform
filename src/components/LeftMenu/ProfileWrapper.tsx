import {RootStateOrAny, useSelector, useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {setEntities} from '../../redux/actions/entitiesAction'
import setUsers from '../../redux/actions/usersAction'
import './leftMenu-style.css';
import peopleIcon from '../../assets/media/icons/people.png';
import userPlusIcon from '../../assets/media/icons/user-plus.png';
import publicationsIcon from '../../assets/media/icons/publications.png';
import plusIcon from '../../assets/media/icons/plus.png';

function ProfileWrapper() {



    const users = useSelector((state:RootStateOrAny)=>state.usersState.users);
    const photos = useSelector((state:RootStateOrAny) => state.entitiesState.entities);
 

    const dispatch = useDispatch()

    useEffect(() => { 
        dispatch(setUsers())    
        dispatch(setEntities())  
     }, [])



    


    return (
        <div className="profileWrapper">
            <div className="profileWrapper__upper">
                <img className="profileWrapper__image" src={photos[0]?.thumbnailUrl} alt="profile image"/>
                <h6 className="profileWrapper__name">{users[0]?.name}</h6>
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