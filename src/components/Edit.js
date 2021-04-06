import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import dashboard from '../Actions/user_dashboard'
import Header1 from './Header1';
import md5 from 'md5';
import {edit} from '../Actions/index';

export default function Edit() {
    const dispatch = useDispatch();

    const [success_notification, setsuccess_notification] = useState('')
    const [password_notification, setpassword_notification] = useState('')
    const [user_id, setuser_id] = useState('')
    const [user_name, setuser_name] = useState('')
    const [user_mail, setuser_mail] = useState('')
    const [user_password, setuser_password] = useState('')
    const onChangeName = (e) => {
        e.preventDefault();
        setuser_name(e.target.value);
    }
    const onChangeMail = (e) => {
        e.preventDefault();
        setuser_mail(e.target.value);
    }
    const onChangePassword = (e) => {
        e.preventDefault();
        setuser_password(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        let postData = {
            _id:user_id,
            name:user_name,
            email:user_mail,
            password: md5(user_password),
        }
        
        if(user_password.length>5){
            dispatch(edit(postData))
                .then((res) =>{
                    if(res.payload.success === false){
                            setsuccess_notification("")
                            setpassword_notification("")
                    }
                    else{
                        setsuccess_notification("Hi  " + user_name + ",  Your Profile is successfully updated!")
                        setpassword_notification("")
                    }
                })
                .catch((err) => {
                    console.log("err get data : ", err.message);
                    });
        }
        else{
            setpassword_notification("Password must have more than 5 characters");
        }
    }
    useEffect(() => {
        dispatch(dashboard())
        .then((res)=>{
            setuser_name(res.payload.name);
            setuser_mail(res.payload.email);
            setuser_id(res.payload._id);
        })
    }, [])
    return (
        <div>
            <Header1 />
                <p className = "text-center text-6xl text-white py-2 px-2 mt-16">{success_notification}</p>
                <div className = "w-4/12 mx-auto mt-60 bg-blue-100 py-20px rounded-xl shadow-lg py-6">
                    <p className = "form-title">Edit your Profile</p>
                    <form onSubmit = {onSubmit} autoComplete="on">
                        <div className = "form-group">
                            <label>Name:</label><br />
                            <input className = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type = "text" onChange = {onChangeName} value = {user_name} required />
                        </div>
                        <div className = "form-group">
                            <label>Email:</label><br />
                            <input className = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type = "text" onChange = {onChangeMail} value = {user_mail} required />
                        </div>
                        <div className = "form-group">
                            <label>Password:</label><br />
                            <input className = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type = "password" onChange = {onChangePassword} value = {user_password} placeholder = "Type a password" required />
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
