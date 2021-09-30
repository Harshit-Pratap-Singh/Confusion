import { ADD_COMMENT, ADD_DISHES, DIHSES_FAILED, DISHES_LOADING } from "./ActionType";
import { dishes } from '../shared/dishes';


export const addComment=(dishId,author,comment,rating) =>({
            type: ADD_COMMENT,
            payload:{
                dishId:dishId,
                author:author,
                comment: comment,
                rating: rating ,
            }
});

export const fetchDishes=()=>(dispatch)=>{
    dispatch(dishesLoading(true));
    console.log(dishes);
    setTimeout(() =>{
        dispatch(addDishes(dishes));
    },2000)
}

export const dishesLoading=() =>({
    type: DISHES_LOADING
});

export const dishesFailed=(errormess) =>({
    type: DIHSES_FAILED,
    payload: errormess
});

export const addDishes=(dishes) =>({
    type: ADD_DISHES,
    payload: dishes,
});

