import axios from 'axios';
import {LOGIN_USER} from './types'
import {CREATE} from './types'
import {AUTH} from './types'

export function loginUser(dataToSubmit){
    const request = axios.post("http://localhost:4000/login", dataToSubmit, {withCredentials: true, credentials: 'include'})
    .then(res => res.data)

    return {
        type:LOGIN_USER,
        payload:request
    }
}

export function registerUser(dataToSubmit){
    const request = axios.post("http://localhost:4000/signup", dataToSubmit, {withCredentials: true, credentials: 'include'})
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

