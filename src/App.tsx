import React from 'react'
import TopBar from './components/TopBar/TopBar';
import LeftMenu from './components/LeftMenu/LeftMenu';
import Main from './components/Main/Main';
import LatestPublications from './components/Main/latestPublications/LatestPublications';
import Workspaces from './components/Main/workspaces/Workspaces';
import Works from './components/Main/works/Works';
import './assets/style/home.css';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import {RootStateOrAny,useSelector, useDispatch} from 'react-redux';
import {increment} from './actions';

const App = () => {

    const counter = useSelector((state:RootStateOrAny) => state.counter)
    const dispatch = useDispatch();
    return (
        <div>
            <Router>
                <button onClick={()=>dispatch(increment(5))}>Add</button>
                {counter}
                    <Route exact path='/'>
                    <TopBar />
                    <section className="section">
                        <LeftMenu />
                        <main>
                            <LatestPublications />
                            <Workspaces />
                            <Works />
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
