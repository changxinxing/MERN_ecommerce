import {SINGLE_PRODUCT, UPDATE_PRODUCT} from '../Actions/types'

export default function (state = {}, action) {
    switch (action.type){
        case SINGLE_PRODUCT:
            return {...state, product_detail:action.payload}
        case UPDATE_PRODUCT:
            return {...state, product_updated:action.payload}
        default:
            return state;
    }
}