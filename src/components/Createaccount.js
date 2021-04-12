import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import md5 from 'md5';
import {registerUser} from '../Actions/index';
import Header1 from './Header1';

export default function Createaccount() {
    const dispatch = useDispatch();

    const [success_notification, setsuccess_notification] = useState("")
    const [email_notification, setemail_notification] = useState("")
    const [password_notification, setpassword_notification] = useState("")
    const [user_name, setuser_name] = useState("")
    const [user_mail, setuser_mail] = useState("")
    const [user_password, setuser_password] = useState("")

    const onChangeName = (e) => {
        setuser_name(e.target.value);
    }
    const onChangeMail = (e) => {
        setuser_mail(e.target.value);
    }
    const onChangePassword = (e) => {
        setuser_password(e.target.value);
    }
    const Submit = (e) => {
        e.preventDefault();
        let postData = {
            name:user_name,
            email:user_mail,
            password: md5(user_password),
            role: 10
        }
        if(postData.email.indexOf("@") !== -1 && postData.email.indexOf(".") !== -1){
            if(user_password.length>5){
                dispatch(registerUser(postData))
                .then((res) => {
                    if(res.payload.success === false){
                        setsuccess_notification("")
                        setemail_notification("Email Already Exists")
                        setpassword_notification("")
                    }
                    else{
                        setsuccess_notification("Hi  " + user_name + ",  Thank you for your creating an account!")
                        setemail_notification("")
                        setpassword_notification("")
                        setuser_name("")
                        setuser_mail("")
                        setuser_password("")
                    }
                })
            }
            else{
                setemail_notification("")
                setpassword_notification("Password must have more than 5 characters")
            }
        }
        else{
            setemail_notification("Please type correct email format")
        }    
    }
    return (
        <div>
            <Header1 />
            <p className="welcome">{success_notification}</p>
            <div className="w-4/12 mx-auto mt-60 bg-blue-100 py-20px rounded-xl shadow-lg py-6">
                <p className="form-title">Register</p>
                <form onSubmit={Submit} autoComplete="on">
                    <div className="form-group">
                        <label>Name:</label><br />
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" onChange={onChangeName} value={user_name} placeholder="Type your name" required />
                    </div>
                    <div className="form-group">
                        <label>Email:</label><br />
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" onChange={onChangeMail} value={user_mail} placeholder="Type your email" required />
                        <p className="warn">{email_notification}</p>
                    </div>
                    <div className="form-group">
                        <label>Password:</label><br />
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" onChange={onChangePassword} value={user_password} placeholder="Type a password" required />
                        <p className="warn">{password_notification}</p>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create an account" className="btn btn-primary" />
                    </div>
                </form>
                <div className="already">
                    <p className="tologin">Already have an account?</p>
                    <Link to="/login" className="nav-link">Login</Link>
                </div>
            </div>
        </div>
    )
}
