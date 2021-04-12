import React, { Component } from 'react'
import axios from 'axios'
import avatar from '../avatar.jpg'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Header1 extends Component {
    state = {
        user_name:'',
        user_mail:'',
        user_id:''
    }
    Logout = () =>{
        axios.get("http://localhost:4000/logout",{withCredentials: true, credentials: 'include'})
        .then((res)=>{
            console.log(res)
        })
    }
    componentDidMount(){
        axios.get("http://localhost:4000/auth",{withCredentials: true, credentials: 'include'})
        .then((res)=>{
            this.setState({
                user_name:res.data.name,
                user_mail:res.data.email,
                user_id:res.data._id
            })
        })
    }
    render() {
        if(this.state.user_name !== undefined){
            return (
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className = "nav_left">
                            <Link to="/" className="navbar-brand">Home</Link>
                            <Link to = '/dashboard' className="navbar-brand">Dashboard</Link>
                            <Link to = '/dashboard/accounts' className="navbar-brand">My Account</Link>
                        </div>
                        <div className = "nav_right">                         
                            <img src = {avatar} className = "avatar" />
                            <span className = "dropdown">
                                <span className = "user_name">
                                    {this.state.user_name}
                                </span>
                                <div className="dropdown-content">
                                    <button><Link to  = '/edit'>Edit Profile</Link></button>
                                    <button onClick = {this.Logout}><Link>Logout</Link></button>
                                </div>
                            </span>
                        </div>
                    </nav>
                    {/* <p className = "bg-green-400 text-center text-6xl text-white py-2 px-2">Welcome {this.state.user_name}! </p> */}
                </div>
            )
        }
        else{
            return(
                <div>
                    <nav className = "navbar navbar-expand-lg navbar-light bg-light">
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
}
