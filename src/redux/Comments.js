import { ADD_COMMENT, ADD_COMMENTS, COMMENTS_FAILED } from './ActionType';

export  const Comments = (state={
    errorMess:null,
    comments: [],
},action)=>{
    switch(action.type){
        case ADD_COMMENT:
            var comment=action.payload;
            return {...state,comments:state.comments.concat(comment)};
        
        case ADD_COMMENTS:
            return {...state , comments: action.payload, errorMess:null}
    
    
            case COMMENTS_FAILED:
                return {...state,errorMess: action.payload,comments:[]}
        default:
            return state;
    }
}
