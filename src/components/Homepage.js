import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route} from "react-router-dom";
import logo from '../logo.svg';
import './home.css'
import Header1 from './Header1';

export default class Homepage extends Component {
    render() {
        return (
            <div className = "homepage">
                <Header1 />
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Learn MERN Stack</p><br />
                    <div className = "quick-links">
                        <Link to = '/create' className = "border-2 border-white rounded-xl py-1 px-4 text-white no-underline hover:bg-purple-700 mx-6">Register</Link>
                        <Link to = '/login' className = "border-2 border-white rounded-xl py-1 px-4 text-white no-underline hover:bg-green-700 mx-6">Login</Link>
                    </div>
                </header>
            </div>
        )
    }
}
