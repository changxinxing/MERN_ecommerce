import {SINGLE_PRODUCT, UPDATE_PRODUCT, TOTAL_ORDER, TOTAL_SALE, TOTAL_PRODUCTS} from '../Actions/types'

export default function (state = {}, action) {
    switch (action.type){
        case SINGLE_PRODUCT:
            return {...state, product_detail:action.payload}
        case UPDATE_PRODUCT:
            return {...state, product_updated:action.payload}
        case TOTAL_ORDER:
            return {...state, total_order:action.payload}
        case TOTAL_SALE:
            return {...state, total_sale:action.payload}
        case TOTAL_PRODUCTS:
            return {...state, total_products:action.payload}
        default:
            return state;
    }
}