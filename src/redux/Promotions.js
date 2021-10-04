import { ADD_PROMOS, PROMOS_FAILED, PROMOS_LOADING } from "./ActionType";

export  const Promotions = (state={
    isLoading:true,
    errorMess: null,
    promotions: []
},action)=>{
    switch(action.type){
        case PROMOS_LOADING:
            return {...state,isLoading:true ,errorMess: null,promotions:[]}
    case PROMOS_FAILED:
            return {...state,isLoading:false ,errorMess: action.payload,promotions:[]}
    case ADD_PROMOS:
            return {...state , promotions: action.payload, isLoading:false, errorMess:null}
    
        default:
            return state;
    }
}
