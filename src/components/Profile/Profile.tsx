import {RootStateOrAny, useSelector, useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {setEntities} from '../../redux/actions/entitiesAction'
import setUsers from '../../redux/actions/usersAction'
import '../../assets/style/home.css'
import './profile-style.css'
import messageIcon from '../../assets/media/icons/message.png'
import requestIcon from '../../assets/media/icons/request.png'
import briefcaseIcon from '../../assets/media/icons/briefcase.png'
import pencilIcon from '../../assets/media/icons/pencil.png'
import xIcon from '../../assets/media/icons/x.png'
import profileImage from '../../assets/media/profileImage.png';
import peopleIcon from '../../assets/media/icons/people.png';


const Profile = () => {




    const users = useSelector((state:RootStateOrAny)=>state.usersState.users);
    const photos = useSelector((state:RootStateOrAny) => state.entitiesState.entities);
 

    const dispatch = useDispatch()

    useEffect(() => { 
        dispatch(setUsers())    
        dispatch(setEntities())  
     }, [])



     console.log(photos[0]?.thumbnailUrl)



    return (
        <div className='profile'>

            <div className='profile__topBar'>
                <button className='noBtnStyle profile__btn'>
                    <img className='profile__icon' src={messageIcon} alt="" />
                    Message
                </button>
                <button className='noBtnStyle profile__btn'>
                    <img className='profile__icon' src={requestIcon} alt="" />
                    Create a request
                </button>
                <button className='noBtnStyle profile__btn'>
                    <img className='profile__icon' src={briefcaseIcon} alt="" />
                    Add to a cluster
                </button>
                <button className='noBtnStyle profile__btn'>
                    <img className='profile__icon' src={xIcon} alt="" />
                </button>
            </div>

            <div className='profile__mainSection'>
                <div className='profile__mainSectionLeft'>
                    <img src={photos[0]?.thumbnailUrl} alt="" />
                    See profile
                </div>
                <div className='profile__mainSectionMiddle'>
                    <p className="profile__details profile__details--bold" contentEditable='true'>{users[0]?.name}</p>
                    <p className="profile__details profile__details--bold" contentEditable='true'>{users[0]?.company.name}</p>
                    <p className="profile__details" contentEditable='true'>{users[0]?.address.city}</p>
                    <p className="profile__details" contentEditable='true'>{users[0]?.address.street}</p>
                </div>
                <div className='profile__mainSectionRight'>
                    <p className="profile__details" contentEditable='true'>{users[0]?.email}</p>
                    <p className="profile__details" contentEditable='true'>{users[0]?.phone}</p>
                </div>
                <div className='profile__mainSectionEdit'>
                    <button className='noBtnStyle'>
                        <img  src={pencilIcon} alt="" />
                    </button>
                </div>
            </div>

            <div className='profile__expertiseSection'>
                <div className='profile__expertiseSectionMain'>

                    <p className='profile__expertiseHeader'>Expertise</p>
                    <div className='profile__expertiseLabelWrapper'>
                        <span className='profile__expertiseLabel'>Mergers and aqusition</span>
                    </div>

                    <p className='profile__expertiseHeader'>Specialtes</p>
                    <div className='profile__expertiseLabelWrapper'>
                        <span className='profile__expertiseLabel'>Cross border operation</span>
                        <span className='profile__expertiseLabel'>Transation over 500M$</span>
                    </div>

                    <p className='profile__expertiseHeader'>Admission to practice law</p>
                    <div className='profile__expertiseLabelWrapper'>
                        <span className='profile__expertiseLabel'>Paris bar association</span>
                        <span className='profile__expertiseLabel'>Tunisian bar association</span>
                    </div>

                    <p className='profile__expertiseHeader'>Countries</p>
                    <div className='profile__expertiseLabelWrapper'>
                        <span className='profile__expertiseLabel'>Tunisia</span>
                    </div>
                    
                </div>
                <div className='profile__expertiseSectionEdit'>
                    <button className='noBtnStyle'>
                        <img  src={pencilIcon} alt="" />
                    </button>
                </div>
            </div>

            <div className='profile__section'>
                <h5 className='profile__sectionHeader'>Panel informations</h5>
                <p className='profile__sectionHeader'>Hourly fee</p>
                <p className='profile__sectionParagraph'contentEditable='true'>610$/hour</p>
                <p className='profile__sectionHeader'>Terms and conditions</p>
                <p className='profile__sectionParagraph'contentEditable='true'>Monthly 10k$ retainer</p>
            </div>

            <div className='profile__section'>
                <h5 className='profile__sectionHeader'>Services and projects</h5>
                <p className='profile__sectionParagraph'contentEditable='true'>Corporate MA and international acquisitions</p>         
            </div>
                <h5 className='profile__sectionHeader'>Internal correspondants</h5>
            <div className='profile__correspondantsContainer'>

                <div className='profile__correspondant'>
                    <img className='profile__correspondantImg' src={profileImage} alt="" />
                    <span className='profile__correspondantName'> Firstname Lastname</span>
                    <button className='noBtnStyle profile__btn'>
                        <img className='profile__icon' src={messageIcon} alt="" />
                        Message
                    </button>
                    <button className='noBtnStyle profile__btn'>
                        <img className='profile__icon' src={peopleIcon} alt="" />
                        Message
                    </button>
                </div>
                
                <div className='profile__correspondant'>
                    <img className='profile__correspondantImg' src={profileImage} alt="" />
                    <span className='profile__correspondantName'> Firstname Lastname</span>
                    <button className='noBtnStyle profile__btn'>
                        <img className='profile__icon' src={messageIcon} alt="" />
                        Message
                    </button>
                    <button className='noBtnStyle profile__btn'>
                        <img className='profile__icon' src={peopleIcon} alt="" />
                        Message
                    </button>
                </div>

            </div>

                <div className='profile__section'>
                    <h5 className='profile__sectionHeader'>Proposals</h5>
                    <div className='profile__sectionColumnWrapper'>
                        <div className='profile__sectionColumn'>
                            <h5 className='profile__sectionHeader profile__tableHeader'>Name</h5>
                            <p className='profile__sectionParagraph'contentEditable='true'>Op. Tileman</p>
                            <p className='profile__sectionParagraph'contentEditable='true'>Op. Prometheus</p>
                            <p className='profile__sectionParagraph'contentEditable='true'>Op. Latandre</p>
                        </div>
                        <div className='profile__sectionColumn'>
                            <h5 className='profile__sectionHeader profile__tableHeader'>Entity</h5>
                            <p className='profile__sectionParagraph'contentEditable='true'>Renault</p>
                            <p className='profile__sectionParagraph'contentEditable='true'>Renault</p>
                            <p className='profile__sectionParagraph'contentEditable='true'>Renault</p>
                        </div>
                        <div className='profile__sectionColumn'>
                            <h5 className='profile__sectionHeader profile__tableHeader'>Location</h5>
                            <p className='profile__sectionParagraph'contentEditable='true'>France</p>
                            <p className='profile__sectionParagraph'contentEditable='true'>USA</p>
                            <p className='profile__sectionParagraph'contentEditable='true'>Italy</p>
                        </div>
                        <div className='profile__sectionColumn'>
                            <h5 className='profile__sectionHeader profile__tableHeader'>Expertise</h5>
                            <p className='profile__sectionParagraph'contentEditable='true'>#Tax</p>
                            <p className='profile__sectionParagraph'contentEditable='true'>#MA</p>
                            <p className='profile__sectionParagraph'contentEditable='true'>#Social</p>
                        </div>
                        <div className='profile__sectionColumn'>
                            <h5 className='profile__sectionHeader profile__tableHeader'>Date</h5>
                            <p className='profile__sectionParagraph'contentEditable='true'>20/01/2018</p>
                            <p className='profile__sectionParagraph'contentEditable='true'>20/01/2018</p>
                            <p className='profile__sectionParagraph'contentEditable='true'>20/01/2018</p>
                        </div>
                    </div>
       
                 </div>

                <div className='profile__section'>
                    <h5 className='profile__sectionHeader'>Internal reviews</h5>
                    <div className='profile__sectionColumnWrapper'>
                        <div className='profile__sectionColumn'>
                            <h5 className='profile__sectionHeader profile__tableHeader'>Name</h5>
                            <p className='profile__sectionParagraph'contentEditable='true'>Op. Tileman</p>
                            <p className='profile__sectionParagraph'contentEditable='true'>Op. Prometheus</p>
                            <p className='profile__sectionParagraph'contentEditable='true'>Op. Latandre</p>
                        </div>
                        <div className='profile__sectionColumn'>
                            <h5 className='profile__sectionHeader profile__tableHeader'>Entity</h5>
                            <p className='profile__sectionParagraph'contentEditable='true'>Renault</p>
                            <p className='profile__sectionParagraph'contentEditable='true'>Renault</p>
                            <p className='profile__sectionParagraph'contentEditable='true'>Renault</p>
                        </div>
                        <div className='profile__sectionColumn'>
                            <h5 className='profile__sectionHeader profile__tableHeader'>Location</h5>
                            <p className='profile__sectionParagraph'contentEditable='true'>France</p>
                            <p className='profile__sectionParagraph'contentEditable='true'>USA</p>
                            <p className='profile__sectionParagraph'contentEditable='true'>Italy</p>
                        </div>
                        <div className='profile__sectionColumn'>
                            <h5 className='profile__sectionHeader profile__tableHeader'>Expertise</h5>
                            <p className='profile__sectionParagraph'contentEditable='true'>#Tax</p>
                            <p className='profile__sectionParagraph'contentEditable='true'>#MA</p>
                            <p className='profile__sectionParagraph'contentEditable='true'>#Social</p>
                        </div>
                        <div className='profile__sectionColumn'>
                            <h5 className='profile__sectionHeader profile__tableHeader'>Date</h5>
                            <p className='profile__sectionParagraph'contentEditable='true'>20/01/2018</p>
                            <p className='profile__sectionParagraph'contentEditable='true'>20/01/2018</p>
                            <p className='profile__sectionParagraph'contentEditable='true'>20/01/2018</p>
                        </div>
                    </div>
       
                 </div>

                <div className='profile__section'>
                    <h5 className='profile__sectionHeader'>Amount of fees</h5>
                    <div className='profile__sectionColumnWrapper'>
                        <div className='profile__sectionColumn'>
                            <h5 className='profile__sectionHeader profile__tableHeader'>Years</h5>
                            <p className='profile__sectionParagraph'contentEditable='true'>2019</p>
                            <p className='profile__sectionParagraph'contentEditable='true'>2018</p>
                            <p className='profile__sectionParagraph'contentEditable='true'>2017</p>
                        </div>
                        <div className='profile__sectionColumn'>
                            <h5 className='profile__sectionHeader profile__tableHeader'>Cost center</h5>
                            <p className='profile__sectionParagraph'contentEditable='true'>CS 153</p>
                            <p className='profile__sectionParagraph'contentEditable='true'>CS 153</p>
                            <p className='profile__sectionParagraph'contentEditable='true'>CS 153</p>
                        </div>
                        <div className='profile__sectionColumn'>
                            <h5 className='profile__sectionHeader profile__tableHeader'>Total amount</h5>
                            <p className='profile__sectionParagraph'contentEditable='true'>3 500$</p>
                            <p className='profile__sectionParagraph'contentEditable='true'>3 500$</p>
                            <p className='profile__sectionParagraph'contentEditable='true'>3 500$</p>
                        </div>
                        <div className='profile__sectionColumn'>
                            <h5 className='profile__sectionHeader profile__tableHeader'>Law firm</h5>
                            <p className='profile__sectionParagraph'contentEditable='true'>Clifford</p>
                            <p className='profile__sectionParagraph'contentEditable='true'>Clifford</p>
                            <p className='profile__sectionParagraph'contentEditable='true'>Clifford</p>
                        </div>
                    </div>
       
                 </div>

            
        </div>
    )
}

export default Profile
