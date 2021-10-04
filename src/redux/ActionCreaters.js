import { ADD_COMMENT, ADD_COMMENTS, ADD_DISHES, ADD_PROMOS, COMMENTS_FAILED, DIHSES_FAILED, DISHES_LOADING, PROMOS_FAILED, PROMOS_LOADING } from "./ActionType";
import { baseUrl } from "../shared/baseUrl";


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
    
    return fetch(baseUrl+'dishes')
    .then(res => res.json())
    .then(dishes => 
        {
            console.log(dishes);
           return dispatch(addDishes(dishes))
        }
        );

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

export const fetchComments=()=>(dispatch)=>{    
    return fetch(baseUrl+'comments')
    .then(res => res.json())
    .then(comments => dispatch(addComments(comments)));
}

export const commentsFailed=(errormess) =>({
    type: COMMENTS_FAILED,
    payload: errormess
});

export const addComments=(comments) =>({
    type: ADD_COMMENTS,
    payload: comments,
});

export const fetchPromos=()=>(dispatch)=>{ 
    dispatch(promosLoading(true));

    return fetch(baseUrl+'promotions')
    .then(res => res.json())
    .then(promotions => dispatch(addPromos(promotions)));
}
export const promosFailed=(errormess) =>({
    type: PROMOS_FAILED,
    payload: errormess
});

export const addPromos=(promotions) =>({
    type: ADD_PROMOS,
    payload: promotions,
});

export const promosLoading=() =>({
    type: PROMOS_LOADING
});
