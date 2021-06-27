import {useState, useEffect} from 'react'
import {RootStateOrAny, useSelector, useDispatch} from 'react-redux'
import {setEntities} from '../../redux/actions/entitiesAction'
import './entities-style.css'
import '../../assets/style/home.css'
import mosaicIcon from '../../assets/media/icons/mosaic.png'
import menuIcon from '../../assets/media/icons/menu.png'
import recordIcon from '../../assets/media/icons/record.png';
import arrowDownIcon from '../../assets/media/icons/arrow-down.png';
import moreIcon from '../../assets/media/icons/more.png';
import sortIcon from '../../assets/media/icons/sort.png';
import filterIcon from '../../assets/media/icons/filter.png';
import full_screenIcon from '../../assets/media/icons/full-screen.png';
import shareIcon from '../../assets/media/icons/share.png';
import broadcastIcon from '../../assets/media/icons/broadcast.png';
import xIcon from '../../assets/media/icons/x.png';
import plusIcon from '../../assets/media/icons/plus.png';


const Entities = () => {




    const [expanded, setExpanded] = useState(false)
    const [mosaicView, setMosaicView] = useState(true)
    const [filterWindow, setFilterWindow] = useState(false)
    const [fullscreen, setFullscreen] = useState(false)
    const [sorted, setSorted] = useState(false)
    const [refresh, setRefresh] = useState(false)



    const handleExpandedBtn = ()=>{
        setExpanded(!expanded)
    }


    let entities = useSelector((state:RootStateOrAny) => state.entitiesState.entities);


    const dispatch = useDispatch()


    useEffect(() => {
       dispatch(setEntities())   
    }, [])


    useEffect(() => {
        sortEntities()  
        return ()=>{
            
        }
     }, [sorted])




    const sortEntities =()=>{
       

        if(sorted){  
            entities.sort((a,b)=>a.title.localeCompare(b.title))
            console.log('sortedByTitle', entities)
        }else{
            entities.sort((a,b)=>a.id-b.id)
            console.log('sortedById', entities)
        }
        

    }







const displayEntities = (entities)=>{

  

    if(entities.loading){
        return <h1>Loading</h1>
     }

    return (
        entities.map(entity=>(
            
        <div className='entities__entityContainer'>
            <img className='entities__entityImg' src={entity.thumbnailUrl} alt="" />
            <div className='entities__entityTextContainer'>
                <h5 className='entities__entityTitle'>{entity.title}</h5>
                <span className='entities__entitySubTitle'>Carascas 1050, Distrito Capital Venezuela</span>
            </div>
        </div>
        ))
    )
}


const changeToHorizontal =()=>{
    setMosaicView(false)
}
const changeToMosaic =()=>{
    setMosaicView(true)
}
const toggleFilterWindow =()=>{
    setFilterWindow(!filterWindow)
}
const toggleFullscreen =()=>{
    setFullscreen(!fullscreen)
}
const copyURL =()=>{
    navigator.clipboard.writeText(window.location.href)
}




    return (
        <div className={fullscreen? 'entities__fullScreenWrapper':'entities__wrapper'}>



            <div className='entities__firstTopBar'>
                <h5 className='entities__h5'>Entities</h5>
                <div className='entities__iconsContainer'>
                    <img className={mosaicView? 'entities__clicked entities__firstTopBarIcons': 'entities__firstTopBarIcons'} src={mosaicIcon} alt="" onClick={changeToMosaic} />
                    <img className={!mosaicView? 'entities__clicked entities__firstTopBarIcons': 'entities__firstTopBarIcons'} src={menuIcon} alt="" onClick={changeToHorizontal} />
                </div>
            </div>


            <div className='entities__secondTopBar'>
                <div className='entities__secondTopBar__left'>
                    <button className='entities__allBtn'>
                        <img className='entities__allBtn__el' src={recordIcon} alt="" />
                        <span className='entities__allBtn__el'>All</span>
                        <img className='entities__allBtn__el' src={arrowDownIcon} alt="" />
                    </button>
                    <button className='entities__singleIBtn noBtnStyle'>
                        <img className='entities__singleIcon' src={moreIcon} alt="" />
                    </button>
                    <button className='entities__singleIBtn noBtnStyle' onClick={()=>setSorted(!sorted)}>
                        <img className='entities__singleIcon' src={sortIcon} alt="" />
                    </button>
                    <button className='entities__singleIBtn noBtnStyle'>
                        <img className='entities__singleIcon' src={filterIcon} onClick={toggleFilterWindow} alt="" />

                        <div className={filterWindow? 'entities__filterContainer': 'entities__noDisplay'}>
                            <span>Rows are filtered by the following conditions starting from the top</span>
                            <div className='entities__filterRow'>
                                <img className='entities__xIcon' src={xIcon} alt="" />
                                <span className='entities__filterSpan'>Where</span>
                                <button className='entities__filterBtn'>
                                    Company
                                    <img className='entities__arrowDownIcon' src={arrowDownIcon} alt="" />
                                </button>
                                <button className='entities__filterBtn'>
                                    Contains
                                    <img className='entities__arrowDownIcon' src={arrowDownIcon} alt="" />
                                </button>
                                <input className='entities__filterInput' placeholder='Type...' type="text" />
                            </div>
                            <div className='entities__filterRow'>
                                <img className='entities__xIcon' src={xIcon} alt="" />
                                <span className='entities__filterSpan'>Where</span>
                                <button className='entities__filterBtn'>
                                    Status
                                    <img className='entities__arrowDownIcon' src={arrowDownIcon} alt="" />
                                </button>
                                <button className='entities__filterBtn'>
                                    Is
                                    <img className='entities__arrowDownIcon' src={arrowDownIcon} alt="" />
                                </button>
                                <input className='entities__filterInput' placeholder='Type...' type="text" />
                                <button className='entities__filterBtn'>
                                    In
                                    <img className='entities__arrowDownIcon' src={arrowDownIcon} alt="" />
                                </button>
                                <input className='entities__filterInput' placeholder='Entity...' type="text" />
                            </div>
                            <div className='entities__filterRow'>
                                <img className='entities__xIcon' src={xIcon} alt="" />
                                <span className='entities__filterSpan'>And</span>
                                <button className='entities__filterBtn'>
                                    Status
                                    <img className='entities__arrowDownIcon' src={arrowDownIcon} alt="" />
                                </button>
                                <button className='entities__filterBtn'>
                                    Ends before
                                    <img className='entities__arrowDownIcon' src={arrowDownIcon} alt="" />
                                </button>
                                <input className='entities__filterInput' placeholder='Date' type="text" />
                                <button className='entities__filterBtn'>
                                    In
                                    <img className='entities__arrowDownIcon' src={arrowDownIcon} alt="" />
                                </button>
                                <input className='entities__filterInput' placeholder='Entity...' type="text" />
                            </div>
                            <div className='entities__filterRow'>
                                <img className='entities__xIcon' src={plusIcon} alt="" />
                                <span className='entities__filterSpan'>Add filter</span>
                                <button className='entities__filterBtn'>
                                    choose property
                                    <img className='entities__arrowDownIcon' src={arrowDownIcon} alt="" />
                                </button>
                            </div>
                        </div>

                    </button>
                    <button className='entities__singleIBtn noBtnStyle' onClick={toggleFullscreen}>
                        <img className='entities__singleIcon' src={full_screenIcon} alt="" />
                    </button>
                    <button className='entities__singleIBtn noBtnStyle' onClick={copyURL}>
                        <img className='entities__singleIcon' src={shareIcon} alt="" />
                    </button>
                </div>
                <div className='entities__secondTopBar__right'>
                    <input className='entities__input' placeholder='Filter by title' type="text"/>
                    <div className="entities__btnWrapper">
                        <button className='entities__followedBtn' onClick={handleExpandedBtn}>
                            <img className='entities__followeBtnIcon' src={broadcastIcon} alt="" /> 
                            Followed 
                            <img className='entities__followeBtnIcon' src={arrowDownIcon}  alt="" />
                        </button>                 
                        <ul className={expanded? 'entities__expandedFilter': 'entities__displayNone'}>
                            <li className='entities__expandedFilterLi'>my</li>
                            <li className='entities__expandedFilterLi'>all</li>
                        </ul>                 
                    </div>
                </div>
            </div>


            <div className= {mosaicView? 'entities__body  entities__mosaicView': 'entities__body  entities__horizontalView'}>  
       
                {displayEntities(entities)}

                    {/* {ent.map(e=>{
                        console.log(e)
                        
                    })}  */}


            </div>


        </div>
    )
}

export default Entities
