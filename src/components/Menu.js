import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import "./Menu.css"
import Welcome from '../pages/Welcome'
import Quizzes from '../pages/Quizzes'

function Menu() {
    return(
        <Router>
            <header>
                <div className="Navi">
                    <nav>
                        <Link to="/Welcome">Welcome</Link>
                        <Link to="/Quizzes">Quizzes</Link>
                    </nav>
                    <Switch>
                        <Route path="/Welcome">
                            <Welcome />
                        </Route>
                        <Route path="/Quizzes">
                            <Quizzes />
                        </Route>
                    </Switch>
                </div>
            </header> 
        </Router>
    )
}

export default Menu