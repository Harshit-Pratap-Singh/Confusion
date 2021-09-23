import { ADD_COMMENT } from "./ActionType";


export const addComment=(dishId,author,comment,rating) =>({
            type: ADD_COMMENT,
            payload:{
                dishId:dishId,
                author:author,
                comment: comment,
                rating: rating ,
            }
});