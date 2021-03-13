import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route} from "react-router-dom";
import logo from '../logo.svg';
import './home.css'

export default class Homepage extends Component {
    render() {
        return (
            <div className = "homepage">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Learn MERN Stack</p><br />
                    <div className = "quick-links">
                        <Link to = '/create' className = "quick_tab">Register</Link>
                        <Link to = '/login' className = "quick_tab">Login</Link>
                    </div>
                </header>
            </div>
        )
    }
}
