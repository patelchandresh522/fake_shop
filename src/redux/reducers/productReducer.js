import { ActionTypes } from "../constants/actionType";

const initialstate = {
    products: [],
}




export  const productReducer = (state = initialstate,{type,payload})=>{
    switch (type) {
        case ActionTypes.Set_Products:
             return {
                ...state,
                products: payload,
             };
            default:
                return state;
    }
};

export const selectedProductReducer = (state = {}, {type,payload}) => {
    switch (type) {
        case ActionTypes.selcted_product:
            return {
                ...state,
                ...payload,
            }
        case ActionTypes.remove_selected_product:
            return {}
        default:
            return state;
    }
}