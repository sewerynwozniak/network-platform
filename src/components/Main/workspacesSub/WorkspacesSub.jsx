import React from 'react'
import './workspacesSub-style.css'
import sliderIcon from '../../../assets/media/icons/entities.png'

const Workspaces = () => {
    return (
        <div className='workspacesSub__container'>
            <h3 className='workspacesSub__header'>Workspaces</h3>
            <div className='workspacesSub__sliderContainer'>

                <div className='slider__singleSlider'>
                    <div className='slider__upper'></div>
                    <div className='slider__middle'>
                        <div className='slider__category'>
                            <img className='slider__icon' src={sliderIcon} alt=""/>
                        </div>
                        <h3 className='slider__title'>Client contract</h3>
                    </div>
                    <div className='slider__lower'>
                        <div className="slider__detailContainer">
                            <span className="slider__detail">Contract</span>
                            <span className="slider__detail">25 users</span>
                        </div>
                        <div className="slider__updateContainer">
                            <span className="slider__update">Last update 2 days ago</span>
                        </div>
                    </div>
                </div>
                <div className='slider__singleSlider'>
                    <div className='slider__upper'></div>
                    <div className='slider__middle'>
                        <div className='slider__category'>
                            <img className='slider__icon' src={sliderIcon} alt=""/>
                        </div>
                        <h3 className='slider__title'>Client contract</h3>
                    </div>
                    <div className='slider__lower'>
                        <div className="slider__detailContainer">
                            <span className="slider__detail">Contract</span>
                            <span className="slider__detail">25 users</span>
                        </div>
                        <div className="slider__updateContainer">
                            <span className="slider__update">Last update 2 days ago</span>
                        </div>
                    </div>
                </div>
                <div className='slider__singleSlider'>
                    <div className='slider__upper'></div>
                    <div className='slider__middle'>
                        <div className='slider__category'>
                            <img className='slider__icon' src={sliderIcon} alt=""/>
                        </div>
                        <h3 className='slider__title'>Client contract</h3>
                    </div>
                    <div className='slider__lower'>
                        <div className="slider__detailContainer">
                            <span className="slider__detail">Contract</span>
                            <span className="slider__detail">25 users</span>
                        </div>
                        <div className="slider__updateContainer">
                            <span className="slider__update">Last update 2 days ago</span>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Workspaces

