import {LOGIN_USER, DASHBOARD, CREATE, AUTH, EDIT} from '../Actions/types'
export default function(state = {}, action) {
    switch (action.type){
        case LOGIN_USER:
            return {...state, loginSuccess:action.payload}
        case DASHBOARD:
            return {...state, dashboard:action.payload}
        case CREATE:
            return {...state, registerSuccess:action.payload}
        case AUTH:
            return {...state, userData:action.payload}
        case EDIT:
            return {...state, editSuccess:action.payload}
        default:
            return state;
    }
}