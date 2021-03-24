import React, { Component } from 'react'
import md5 from 'md5';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header1 from './Header1';
export default class Edit extends Component {
    state = {
        success_notification:"",
        password_notification:"",
        user_id:'',
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
                user_mail:res.data.email,
                user_id:res.data._id
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
            _id:this.state.user_id,
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
                this.setState({
                    password_notification:"Password must have more than 5 characters"
                })
            }
        }
    render() {
        return (
            <div>
                <Header1 />
                <p className = "text-center text-6xl text-white py-2 px-2">{this.state.success_notification}</p>
                <div className = "w-4/12 mx-auto mt-60 bg-blue-100 py-20px rounded-xl shadow-lg py-6">
                    <p className = "form-title">Edit your Profile</p>
                    <form onSubmit = {this.onSubmit} autoComplete="on">
                        <div className = "form-group">
                            <label>Name:</label><br />
                            <input className = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type = "text" onChange = {this.onChangeName} value = {this.state.user_name} required />
                        </div>
                        <div className = "form-group">
                            <label>Email:</label><br />
                            <input className = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type = "text" onChange = {this.onChangeMail} value = {this.state.user_mail} required />
                        </div>
                        <div className = "form-group">
                            <label>Password:</label><br />
                            <input className = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type = "password" onChange = {this.onChangePassword} value = {this.state.user_password} placeholder = "Type a password" required />
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
