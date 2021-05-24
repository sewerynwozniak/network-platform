import TopBar from './components/TopBar/TopBar';
import LeftMenu from './components/LeftMenu/LeftMenu';
import LatestPublications from './components/Main/latestPublications/LatestPublications';
import Workspaces from './components/Main/workspaces/Workspaces';
import Comments from './components/Main/comments/Comments';
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

          
                    <Route exact path='/'>
                    <TopBar />
                    <section className="section">
                        <LeftMenu />
                        <main>
                            <LatestPublications />
                            <Workspaces />
                            <Comments />
                        </main>                 
                    </section>
                    </Route>
                <Switch>
                    
                </Switch>
            </Router>
        </div>
    )
}




export default App
