import { ADD_DISHES, DIHSES_FAILED, DISHES_LOADING } from "./ActionType";

export const Dishes = (state = {
        isLoading:true,
        errorMess: null,
        dishes:[],
}, action) => {
        switch (action.type) {
                case DISHES_LOADING:
                        return {...state,isLoading:true ,errorMess: null,dishes:[]}
                case DIHSES_FAILED:
                        return {...state,isLoading:false ,errorMess: action.payload,dishes:[]}
                case ADD_DISHES:
                        return {...state , dishes: action.payload, isLoading:false, errorMess:null}
                default:
                        return state;
        }
}
