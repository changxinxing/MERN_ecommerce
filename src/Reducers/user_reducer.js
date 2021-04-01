import {LOGIN_USER} from '../Actions/types'
import {DASHBOARD} from '../Actions/types'
import {CREATE, AUTH} from '../Actions/types'
export default function (state = {}, action) {
    switch (action.type){
        case LOGIN_USER:
            return {...state, loginSuccess:action.payload}
            break;
        case DASHBOARD:
            return {...state, dashboard:action.payload}
            break;
        case CREATE:
            return {...state, registerSuccess:action.payload}
            break;
        case AUTH:
            return {...state, userData:action.payload}
            break;
        default:
            return state;
    }
}