import TopBar from './components/TopBar/TopBar';
import LeftMenu from './components/LeftMenu/LeftMenu';
import LatestPublications from './components/Main/latestPublications/LatestPublications';
import WorkspacesSub from './components/Main/workspacesSub/WorkspacesSub';
import Comments from './components/Main/comments/Comments';
import Workspaces from './components/Workspaces/workspaces';
import './assets/style/home.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import {RootStateOrAny,useSelector, useDispatch} from 'react-redux';
//import increment from './actions';
//import {useSelector, useDispatch, RootStateOrAny} from 'react-redux';
//import {increment} from './actions';




const App = () => {

    // const counter = useSelector((state:RootStateOrAny) => state.counter)
    // const dispatch = useDispatch();

  


    return (
        <div>
            <Router>
                {/* <button onClick={()=>dispatch(increment(5))}>Add</button>
                {counter} */}
                {/* <button onClick={()=>dispatch(increment())}>Add</button>
                    {counter} */}

          
                <TopBar />
                <section className="section"> 
                <LeftMenu />
                    <Switch>
                        <Route exact path='/'>                                                       
                                <main>
                                    <LatestPublications />
                                    <WorkspacesSub />
                                    <Comments />
                                </main>                                          
                        </Route>
                        <Route path='/workspaces'>
                            <Workspaces/>
                        </Route>
                    </Switch>
                    </section>
            </Router>
        </div>
    )
}




export default App
