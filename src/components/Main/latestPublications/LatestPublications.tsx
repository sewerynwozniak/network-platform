import {useEffect} from 'react'
import {RootStateOrAny, useSelector, useDispatch} from 'react-redux'
import './latestPublications-style.css';
import postImg from '../../../assets/media/profileImage.png'
import setPosts from '../../../redux/actions/postsAction'
import setUsers from '../../../redux/actions/usersAction'
import {setEntities} from '../../../redux/actions/entitiesAction'

const LatestPublications = () => {


    const posts = useSelector((state:RootStateOrAny)=>state.postsState);
    const users = useSelector((state:RootStateOrAny)=>state.usersState);
    const photos = useSelector((state:RootStateOrAny) => state.entitiesState);


    const dispatch = useDispatch();


    const filterAuthor =(postId)=>{
        if(posts.success && users.success){
            return users.users.filter(user=>user.id==postId? user:'')[0].name
       }
    }

    const filterPhotos =(postId)=>{             
        if(posts.success && photos.success){    
            return photos.entities.filter(p=>p.albumId==postId? p:'')[0].thumbnailUrl        
       }
    }


    useEffect(() => {
        dispatch(setPosts())
        dispatch(setUsers())    
        dispatch(setEntities())  
        
    }, [])


 


    return (
        <div className='latestPublications__container'>
            <div className='latestPublications__mainContainer'>
                <img className='latestPublications__mainImg' src={photos.entities[0]?.url} alt="" />
            </div>
            <div className='latestPublications__rest'>
                <h3 className='latestPublications__header'>Latest Publications</h3>


                {posts.posts.map(post=>(
                                <div className='latestPublications__singleContainer'>
                                    <div className='latestPublications__singleImgContainer'>
                                        <img className='latestPublications__singleImg' src={filterPhotos(post.userId)} alt="" />
                                    </div>
                                    <div className='latestPublications__singlePreview'>
                                        <h3 className='latestPublications__postTitle'>{post.title}</h3>
                                        <div className='latestPublications__postDetails'>
                                            <span className='latestPublications__postDate'>7 Jan 2020</span>
                                            <img className='latestPublications__authorImg' src={filterPhotos(post.userId)} alt=""/>
                                            <span className='latestPublications__postAuthor'>{filterAuthor(post.userId)}</span>
                                        </div>                                                
                                    </div>
                                </div>
                ))}


                <h6 className='latestPublications__seeMore'>See more publications</h6>
            </div>
        </div>
    )
}

export default LatestPublications
