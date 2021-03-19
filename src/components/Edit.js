import React, { Component } from 'react'
import md5 from 'md5';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';
export default class Edit extends Component {
    state = {
        success_notification:"",
        password_notification:"",
        user_name: '',
        user_mail: '',
        user_password: ''
    }
    componentDidMount(){
        axios.get("http://localhost:4000/auth",{withCredentials: true, credentials: 'include'})
        .then((res)=>{
            console.log(res)
            this.setState({
                user_name:res.data.name,
                user_mail:res.data.email
            })
        })
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
        }
            if(this.state.user_password.length>5){
                axios
                    .post("http://localhost:4000/edit", postData)
                    .then((res) =>{
                        console.log(res);
                        if(res.data.success === false){
                            this.setState({
                                success_notification:"",
                                password_notification:"",
                            }) 
                        }
                        else{
                        this.setState({
                            success_notification:"Hi  " + this.state.user_name + ",  Your Profile is successfully updated!",
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
                console.log(this.state.user_name)
                this.setState({
                    password_notification:"Password must have more than 5 characters"
                })
            }
        }
    render() {
        return (
            <div>
                <Header />
                <div className = "create">
                    <p className = "form-title">Edit your Profile</p>
                    <form onSubmit = {this.onSubmit} autoComplete="on">
                        <div className = "form-group">
                            <label>Name:</label><br />
                            <input type = "text" onChange = {this.onChangeName} value = {this.state.user_name} required />
                        </div>
                        <div className = "form-group">
                            <label>Email:</label><br />
                            <input type = "text" onChange = {this.onChangeMail} value = {this.state.user_mail} required />
                        </div>
                        <div className = "form-group">
                            <label>Password:</label><br />
                            <input type = "password" onChange = {this.onChangePassword} value = {this.state.user_password} placeholder = "Type a password" required />
                        </div>
                        <div className = "form-group">
                            <input type = "submit" value = "Update" className = "btn btn-primary" />
                            <Link to = "/" className = "btn btn-primary-cancel">Calcel</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
