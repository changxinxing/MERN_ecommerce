import React, { Component } from 'react'
import Header from './Header';

export default class Forget extends Component {
    state = {
        user_mail:""
    }
    Submit = (e) => {
        e.preventDefault();
        console.log(this.state.user_mail)
    }
    onChangeMail = (e) => {
        this.setState({
            user_mail:e.target.value
        });
    }
    render() {
        return (
            <div>
                <Header />
                <form onSubmit = {this.Submit} autoComplete="on" className = "login">
                    <div className = "form-group">
                        <p className = "forget_password">Forget your password?<br /> Please type your email.</p>
                        <label>Email:</label><br />
                        <input type = "text" onChange = {this.onChangeMail} value = {this.state.user_mail} placeholder = "Type your email" required />                       
                    </div>
                    <div className = "form-group">
                        <input type = "submit" value = "Submit" className = "btn btn-primary" />
                    </div> 
                </form>
            </div>
        )
    }
}
