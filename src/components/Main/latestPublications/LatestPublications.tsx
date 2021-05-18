import React from 'react'
import './latestPublications-style.css';
import postImg from '../../../assets/media/profileImage.png'


const LatestPublications = () => {
    return (
        <div className='latestPublications__container'>
            <div className='latestPublications__main'>
                
            </div>
            <div className='latestPublications__rest'>
                <h3 className='latestPublications__header'>Latest Publications</h3>

                <div className='latestPublications__singleContainer'>
                    <div className='latestPublications__singleImg'></div>
                    <div className='latestPublications__singlePreview'>
                        <h3 className='latestPublications__postTitle'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, corrupti!</h3>
                        <div className='latestPublications__postDetails'>
                            <span className='latestPublications__postDate'>7 Jan 2020</span>
                            <img className='latestPublications__authorImg' src={postImg} alt=""/>
                            <span className='latestPublications__postAuthor'>John Doe</span>
                        </div>                       
                    </div>
                </div>
                <div className='latestPublications__singleContainer'>
                    <div className='latestPublications__singleImg'></div>
                    <div className='latestPublications__singlePreview'>
                        <h3 className='latestPublications__postTitle'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, corrupti!</h3>
                        <div className='latestPublications__postDetails'>
                            <span className='latestPublications__postDate'>7 Jan 2020</span>
                            <img className='latestPublications__authorImg' src={postImg} alt=""/>
                            <span className='latestPublications__postAuthor'>John Doe</span>
                        </div>                       
                    </div>
                </div>
                <div className='latestPublications__singleContainer'>
                    <div className='latestPublications__singleImg'></div>
                    <div className='latestPublications__singlePreview'>
                        <h3 className='latestPublications__postTitle'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, corrupti!</h3>
                        <div className='latestPublications__postDetails'>
                            <span className='latestPublications__postDate'>7 Jan 2020</span>
                            <img className='latestPublications__authorImg' src={postImg} alt=""/>
                            <span className='latestPublications__postAuthor'>John Doe</span>
                        </div>                       
                    </div>
                </div>

                <h6 className='latestPublications__seeMore'>See more publications</h6>
            </div>
        </div>
    )
}

export default LatestPublications
