import { ADD_COMMENT, ADD_COMMENTS, ADD_DISHES, ADD_FEEDBACK, ADD_LEADERS, ADD_PROMOS, COMMENTS_FAILED, DIHSES_FAILED, DISHES_LOADING, LEADERS_FAILED, LEADERS_LOADING, PROMOS_FAILED, PROMOS_LOADING } from "./ActionType";
import { baseUrl } from "../shared/baseUrl";


export const addComment=(comment) =>({
            type: ADD_COMMENT,
            payload: comment,
});

export const postComment=(dishId,author,comment,rating) => (dispatch) =>{
    var newComment={
        dishId:dishId,
        author:author,
        rating: rating,
        comment : comment,
    }
    newComment.date = new Date().toISOString();

    return fetch(baseUrl+"comments",{
        method:"POST",
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin',
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(res => res.json())
    .then(res => dispatch(addComment(res)))
    .catch(error => {console.log(error);});
}

export const fetchDishes=()=>(dispatch)=>{
    dispatch(dishesLoading(true));
    
    return fetch(baseUrl+'dishes')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(res => res.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)));

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
    .then(res => {
        if(res.ok){
            return res;
        }
        else{
            var error=new Error("Error "+res.status+' : '+ res.statusText);
            error.response=res;
            throw error;
        }
    },error => {
        console.log(error);
        var errormess=new Error(error.message);
        throw errormess;
    })
    .then(res => res.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
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
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(res => res.json())
    .then(promotions => dispatch(addPromos(promotions)))
    .catch(error => dispatch(promosFailed(error.message)));
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


export const fetchLeaders=()=>(dispatch)=>{ 
    dispatch(leadersLoading());

    return fetch(baseUrl+'leaders')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(res => res.json())
    .then(leaders => dispatch(addLeaders(leaders)))
    .catch(error => dispatch(leadersFailed(error.message)));
}
export const leadersFailed=(errormess) =>({
    type: LEADERS_FAILED,
    payload: errormess
});

export const addLeaders=(leaders) =>({
    type: ADD_LEADERS,
    payload: leaders,
});

export const leadersLoading=() =>({
    type: LEADERS_LOADING
});


export const postFeedback=(firstName , lastName,telNum, email, agree, contactType , message) => (dispatch) =>{
    
    var newFeedback ={
        firstName : firstName,
        lastName : lastName,
        telNum : telNum ,
        email : email,
        agree: agree ,
        contactType: contactType,
        message: message,
    }

    newFeedback.date=new Date().toISOString();


    return fetch(baseUrl+"feedback",{
        method:"POST",
        body: JSON.stringify(newFeedback),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin',
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(res => res.json())
    .catch(error => {console.log(error);});
}
