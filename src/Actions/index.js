import axios from 'axios';
import {LOGIN_USER, CREATE, AUTH, EDIT, SINGLE_PRODUCT, UPDATE_PRODUCT} from './types'
import {accountService} from '../services/AccountService'

export function product(dataToSubmit) {
    const request = axios.post("http://localhost:4000/SingleProduct",dataToSubmit, { withCredentials: true, credentials: 'include' })
    .then(res => res.data)
    return {
        type:SINGLE_PRODUCT,
        payload:request
    }
}
export function productupdate(dataToSubmit) {
    const request = axios.post("http://localhost:4000/updateProduct",dataToSubmit, { withCredentials: true, credentials: 'include' })
    .then(res => res.data)
    return {
        type:UPDATE_PRODUCT,
        payload:request
    }
}
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
