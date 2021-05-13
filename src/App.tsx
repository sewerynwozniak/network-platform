import React from 'react'
import TopBar from './components/TopBar/TopBar';
import LeftMenu from './components/LeftMenu/LeftMenu';
import Main from './components/Main/Main';
import './assets/style/home.css';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import About from './components/TopBar/About';

const App = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path='/'>
                    <TopBar />
                    <section className="section">
                    <LeftMenu />
                    </section>
                    </Route>
                    <Route path='/about'>
                            <About />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}




export default App
