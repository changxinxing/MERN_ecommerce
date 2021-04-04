import axios from 'axios';
import {DASHBOARD} from './types'
export default function dashboard(){
    const request = axios.get("http://localhost:4000/auth", {withCredentials: true, credentials: 'include'})
    .then(res => res.data)
    return {
        type:DASHBOARD,
        payload:request
    }
}