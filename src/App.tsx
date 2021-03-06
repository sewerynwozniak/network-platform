import TopBar from './components/TopBar/TopBar';
import LeftMenu from './components/LeftMenu/LeftMenu';
import LatestPublications from './components/Main/latestPublications/LatestPublications';
import WorkspacesSub from './components/Main/workspacesSub/WorkspacesSub';
import Comments from './components/Main/comments/Comments';
import Workspaces from './components/Workspaces/workspaces';
import Entities from './components/Entities/Entities';
import Test from './components/Test';
import './assets/style/home.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";




const App = () => {





    return (
        <div>
            <Router>
         
                <TopBar />
                <section className="section"> 
                    <LeftMenu />
                        <Switch>
                            <Route exact path='/'>                                                       
                                    <main className='main'>
                                        <LatestPublications />
                                        <WorkspacesSub />
                                        <Comments />
                                    </main>                                          
                            </Route>
                            <Route path='/workspaces'>
                                <Workspaces/>
                            </Route>
                            <Route path='/entities'>
                                <Entities/>
                            </Route>
                            <Route path='/test'>
                                <Test/>
                            </Route>
                        </Switch>
                </section>
            </Router>
        </div>
    )
}




export default App
