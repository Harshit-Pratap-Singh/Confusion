import { ADD_LEADERS, LEADERS_FAILED, LEADERS_LOADING } from './ActionType';

export  const Leaders = (state={
    isLoading: true,
    leaders:[],
    errorMess: null
},action)=>{
    switch(action.type){
        case ADD_LEADERS:
            return{...state, isLoading: false, errorMess: null,leaders: action.payload}
        case LEADERS_LOADING:
            return{...state , isLoading: true,leaders: [],errorMess: null}
        case LEADERS_FAILED:
            return {...state, errorMess: action.payload, leaders:[],isLoading: false }
        default:
            return state;
    }
}
