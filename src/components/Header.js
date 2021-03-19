import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Header extends Component {
    render() {
        return (
            <div className = "header">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className = "nav_left">
                        <Link to="/" className="navbar-brand">Home</Link>                                                  
                        <Link to="/dashboard" className="navbar-brand">Dashboard</Link>                    
                        <Link to="/login" className="navbar-brand">Login</Link>                          
                        <Link to="/create" className="navbar-brand">Register</Link>
                    </div>                         
                </nav>
            </div>
        )
    }
}
