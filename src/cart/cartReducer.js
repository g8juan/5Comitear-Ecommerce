import { SET_PRODUCTS_IN_CART, INCREMENT_PRODUCT_QUANTITY, DECREMENT_PRODUCT_QUANTITY } from "../redux/constants";

// const initialState = {
//  productsInCart:[]
//}

// export default (state = initialState, action) => {
//     switch(action.type){
//         case INCREMENT_PRODUCT_QUANTITY:
//             return { ...state, productsInCart: action.payload }
//         case DECREMENT_PRODUCT_QUANTITY:
//             return { ...state, productsInCart: action.payload }
//         case SET_PRODUCTS_IN_CART:
//             return { ...state, productsInCart: action.payload }
//         default:
//             return state
//     }
// }


const initialState = []

export default function cart (state = initialState, action) {
    switch(action.type){
        case SET_PRODUCTS_IN_CART:
            return action.payload
        default:
            return state
    }
}