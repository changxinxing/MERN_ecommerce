import React, {useState} from 'react'
import Header from './Header'
import { Link, Redirect } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {loginUser} from '../Actions/index';

export default function Login() {
    const dispatch = useDispatch();

    const [email_notification, setemail_notification] = useState("")
    const [password_notification, setpassword_notification] = useState("")
    const [user_mail, setuser_mail] = useState("")
    const [user_password, setuser_password] = useState("")
    const [user_login, setuser_login] = useState("")

    const onChangeMail = (e) => {
        setuser_mail(e.target.value);
    }
    const onChangePassword = (e) => {
        setuser_password(e.target.value);
    }
    const Login = (e) => {
        e.preventDefault();

        let postData = {
            email:user_mail,
            password:user_password
        }
        dispatch(loginUser(postData))
        .then((res)=>{
            if(res.payload.mailloginSuccess === false){
                setemail_notification("Unknown email address. Please check again");
                setpassword_notification("");
            }
            else if(res.payload.passwordloginSuccess === false){
                    setpassword_notification("Wrong Password. Please check again");
                    setemail_notification("");
            }
            else {
                    setemail_notification("");
                    setpassword_notification("");
                    setuser_login(res.payload.name);                        
            } 
        })
    }
    if(user_login === ''){
        return(
            <div>
                <Header />
                <div className = "w-4/12 mx-auto mt-60 bg-blue-100 py-20px rounded-xl shadow-lg py-6">
                    <p className = "form-title">Login</p>
                    <form onSubmit = {Login} autoComplete="on">
                        <div className = "form-group">
                            <label>Email:</label><br />
                            <input className = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type = "text" onChange = {onChangeMail} value = {user_mail} placeholder = "Type your email" required />
                            <p className = "warn">{email_notification}</p>
                        </div>
                        <div className = "form-group">
                            <label>Password:</label><br />
                            <input className = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type = "password" onChange = {onChangePassword} value = {user_password} placeholder = "Type a password" required />
                            <p className = "warn">{password_notification}</p>
                        </div>
                        <div className = "form-group">
                            <input type = "submit" value = "Sign me in" className = "btn btn-primary" />
                        </div>
                    </form>
                    <div className = "already">
                        <p className = "tocreate">Don't have an account?</p>
                        <Link to="/create" className="nav-link">Register</Link>
                    </div>
                    <div className = "form-group">
                        <Link to = "/forget" className = "nav-link">Forget Password?</Link>
                    </div>
            </div>
        </div>
        )
    }
    else{
        var redirect = `/dashboard?${user_login}&${user_password}`
        return <Redirect to = '/dashboard'/>;
    }
}
