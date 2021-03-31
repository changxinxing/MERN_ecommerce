import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import md5 from 'md5';
import axios from 'axios';


export default class Createaccount extends Component {
    state = {
        success_notification:"",
        email_notification:"",
        password_notification:"",
        user_name: '',
        user_mail: '',
        user_password: ''
    }
    onChangeName = e => {
        e.preventDefault();
        this.setState({
            user_name:e.target.value
        });
    }
    onChangeMail = e => {
        e.preventDefault();
        this.setState({
            user_mail:e.target.value
        });
    }
    onChangePassword = e => {
        e.preventDefault();
        this.setState({
            user_password:e.target.value
        });
    }
    onSubmit = e => {
        e.preventDefault();
    
        const postData = {
            name:this.state.user_name,
            email:this.state.user_mail,
            password: md5(this.state.user_password),
            role: 10
        }
        if(postData.email.indexOf("@") !== -1 && postData.email.indexOf(".") !== -1){
            if(this.state.user_password.length>5){
                axios
                    .post("http://localhost:4000/signup", postData)
                    .then((res) =>{
                        console.log(res);
                        if(res.data.success === false){
                            this.setState({
                                success_notification:"",
                                email_notification:"Email Already Exists",
                                password_notification:"",
                            }) 
                        }
                        else{
                        this.setState({
                            success_notification:"Hi  " + this.state.user_name + ",  Thank you for your creating an account!",
                            email_notification:"",
                            password_notification:"",
                            user_name:"",
                            user_mail:"",
                            user_password:""
                        })
                    }
                    }
                    )
                    .catch((err) => {
                    console.log("err get data : ", err.message);
                    });
            }
            else{
                this.setState({
                    email_notification:"",
                    password_notification:"Password must have more than 5 characters"
                })
            }
        }
        else{
            this.setState({
                email_notification:"Please type correct email format"
            })
        }
    }
    render() {
        return (
            <div>
                <p className = "welcome">{this.state.success_notification}</p>
                <div className = "w-4/12 mx-auto mt-60 bg-blue-100 py-20px rounded-xl shadow-lg py-6">
                    <p className = "form-title">Register</p>
                    <form onSubmit = {this.onSubmit} autoComplete="on">
                        <div className = "form-group">
                            <label>Name:</label><br />
                            <input className = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type = "text" onChange = {this.onChangeName} value = {this.state.user_name} placeholder = "Type your name" required />
                        </div>
                        <div className = "form-group">
                            <label>Email:</label><br />
                            <input className = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type = "text" onChange = {this.onChangeMail} value = {this.state.user_mail} placeholder = "Type your email" required />
                            <p className = "warn">{this.state.email_notification}</p>
                        </div>
                        <div className = "form-group">
                            <label>Password:</label><br />
                            <input className = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type = "password" onChange = {this.onChangePassword} value = {this.state.user_password} placeholder = "Type a password" required />
                            <p className = "warn">{this.state.password_notification}</p>
                        </div>
                        <div className = "form-group">
                            <input type = "submit" value = "Create an account" className = "btn btn-primary" />
                        </div>
                    </form>
                    <div className = "already">
                        <p className = "tologin">Already have an account?</p>
                        <Link to="/login" className="nav-link">Login</Link>
                    </div>
                </div>
            </div>
        )
    }
}
