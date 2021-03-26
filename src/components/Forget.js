import React, { Component } from 'react'
import Header from './Header';
import axios from 'axios'
import { Link } from 'react-router-dom';

export default class Forget extends Component {
    state = {
        user_mail:"",
        success:false,
        warning:''
    }
    Submit = (e) => {
        e.preventDefault();
        const postData = {
            email:this.state.user_mail
        }
        axios
            .post("http://localhost:4000/resetpassword", postData, {withCredentials: true, credentials: 'include'})
            .then((res) => {
                console.log(res)
                if(res.data.success === true){
                    this.setState({
                        success:true,
                        warning:''
                    })
                }
                else{
                    this.setState({
                        success:false,
                        warning:res.data.message
                    })
                }
            })
    }
    onChangeMail = (e) => {
        this.setState({
            user_mail:e.target.value
        });
    }
    render() {
        if(this.state.success === true){
            return(
                <div>
                    <Header />
                    <p className = "reset">
                        The new password has been sent to your email. Please check your inbox. <br />
                        You can change your password anytime.
                    </p>
                    <Link to = '/login' className = "text-center text-3xl text-white py-2 px-2">Login</Link>
                </div>
            )
        }
        else{
            return (
                <div>
                    <Header />
                    <form onSubmit = {this.Submit} autoComplete="on" className = "w-4/12 mx-auto mt-60 bg-blue-100 py-20px rounded-xl shadow-lg py-6">
                        <div className = "form-group">
                            <p className = "forget_password">Please enter your email address.</p>
                            <label>Email:</label><br />
                            <input className = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type = "text" onChange = {this.onChangeMail} value = {this.state.user_mail} placeholder = "Type your email" required />
                            <p className = "warn">{this.state.warning}</p>                       
                        </div>
                        <div className = "form-group">
                            <input type = "submit" value = "Submit" className = "btn btn-primary" />
                        </div> 
                    </form>
                </div>
            )
        }
    }
}
