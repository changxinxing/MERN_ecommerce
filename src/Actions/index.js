import axios from 'axios';
import {LOGIN_USER, CREATE, AUTH, EDIT} from './types'
import {accountService} from '../services/AccountService'

export function loginUser(dataToSubmit){
    const request = accountService.login(dataToSubmit)
    .then(res => res.data)
    return {
        type:LOGIN_USER,
        payload:request
    }
}

export function registerUser(dataToSubmit){
    const request = accountService.signup(dataToSubmit)
    .then(res => res.data)
    return {
        type:CREATE,
        payload:request
    }
}
export function auth(){
    const request = axios.get("http://localhost:4000/auth", { withCredentials: true, credentials: 'include' })
    .then(res => res.data)

    return {
        type:AUTH,
        payload:request
    }
}


export function edit(dataToSubmit){
    const request = accountService.edit(dataToSubmit)
    .then(res => res.data)
    return {
        type:EDIT,
        payload:request
    }
}
