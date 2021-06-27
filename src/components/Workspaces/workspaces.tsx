import React from 'react'
import './workspaces-style.css'
import Comments from '../Main/comments/Comments'
import entitiesIcon from '../../assets/media/icons/entities2.png'

const workspaces = () => {
    return (
        <div className='workspaces'>
            <header className='workspaces__header'>
                <div className="workspaces__headerUpper">
                    
                </div>
                <div className="workspaces__headerLower">
                    <div className="workspaces__headerLowerLeft">
                        <img src={entitiesIcon} alt="" />
                    </div>
                    <div className="workspaces__headerLowerRight">

                        <h5 className="workspaces__h5">Corporate Holdings</h5>
                        <p className="workspaces__p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ipsam veritatis sed, aliquid vero modi recusandae ipsa incidunt laudantium reprehenderit dolorum accusantium exercitationem. Voluptates libero minus fugit aut nobis temporibus!</p>

                    </div>
                </div>
            </header>
            <div className="workspaces__blocksWrapper">

                <div className="workspaces__singleBlock">
                    <img className="workspaces__singleBlockIcon" src={entitiesIcon} alt="" />
                    <div className="workspaces__singleBlockTitle">Explore your Entities</div>
                    <div className="workspaces__singleBlockText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo esse laborum in! Repellat asperiores quis cum, laborum obcaecati nulla vitae?</div>
                </div>
                <div className="workspaces__singleBlock">
                    <img className="workspaces__singleBlockIcon" src={entitiesIcon} alt="" />
                    <div className="workspaces__singleBlockTitle">Explore your Entities</div>
                    <div className="workspaces__singleBlockText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo esse laborum in! Repellat asperiores quis cum, laborum obcaecati nulla vitae?</div>
                </div>
                <div className="workspaces__singleBlock">
                    <img className="workspaces__singleBlockIcon" src={entitiesIcon} alt="" />
                    <div className="workspaces__singleBlockTitle">Explore your Entities</div>
                    <div className="workspaces__singleBlockText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo esse laborum in! Repellat asperiores quis cum, laborum obcaecati nulla vitae?</div>
                </div>

            </div>
            <Comments />
        </div>
    )
}

export default workspaces
