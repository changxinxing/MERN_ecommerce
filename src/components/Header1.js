import React, { Component } from 'react'
import avatar from '../avatar.jpg'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Header1 extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className = "nav_left">
                        <Link to="/" className="navbar-brand">Home</Link>
                        <Link to = '/account' className="navbar-brand">My Account</Link>
                    </div>
                    <div className = "nav_right">                         
                        <img src = {avatar} className = "avatar" />
                        <span className = "dropdown">
                            <span className = "user_name">
                                {window.location.href.split("?")[1].split("&")[0]}
                                </span>
                            <div className="dropdown-content">
                                <Link to = '/account'>Account</Link>
                                <Link to  = '/edit'>Edit Profile</Link>
                                <Link to = '/'>Logout</Link>
                            </div>
                        </span>
                    </div>
                </nav>
                <p className = "welcome">Welcome {window.location.href.split("?")[1].split("&")[0]}! </p>
            </div>
        )
    }
}
