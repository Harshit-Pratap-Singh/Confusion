import Menu from './MenuComponent';
import { Component } from 'react';
import DishDetail from './DishdetailComponent';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import { Redirect, Route, Switch, withRouter } from 'react-router';
import Contact from './Contact';
import Aboutus from './Aboutus';
import { connect } from 'react-redux';
import { postComment ,fetchComments,fetchDishes, fetchPromos} from '../redux/ActionCreaters';
import { actions } from 'react-redux-form';
import {TransitionGroup,CSSTransition} from 'react-transition-group';
const mapStateToProps=state =>{

  return{
    dishes:state.dishes,
    leaders: state.leaders,
    promotions: state.promotions,
    comments:state.comments
  }
}

const mapDispatchToProps=dispatch =>({
  postComment: (dishId,comment,rating,author) => dispatch(postComment(dishId,comment,rating,author)),
  fetchDishes:()=> dispatch(fetchDishes()),
  resetFeedbackForm: () => {dispatch(actions.reset('feedback'))},
  fetchComments:()=> dispatch(fetchComments()),
  fetchPromos:()=> dispatch(fetchPromos()),

})

class Main extends Component {
  constructor(props)
  {
    super(props);   
}
 componentDidMount(){
   this.props.fetchDishes();
   this.props.fetchComments();
   this.props.fetchPromos();

 }
  render() {
  

    const HomePage=() => <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
     promotion={this.props.promotions.promotions.filter((promotion) => promotion.featured)[0]} 
     leader={this.props.leaders.filter((leader) => leader.featured)[0]}
     dishesLoading={this.props.dishes.isLoading}
     dishesErrorMess={this.props.dishes.errorMess}
     promosLoading={this.props.promotions.isLoading}
     promosErrorMess={this.props.promotions.errorMess}
     />
    const DishWithId=({match}) =>{
      console.log(this.props.dishes.dishes.filter((dish) => dish.id===parseInt(match.params.dishId,10))[0]);
      return <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id===parseInt(match.params.dishId,10))[0]}
        comments={this.props.comments.comments.filter((comment) => comment.dishId===parseInt(match.params.dishId,10))}
        postComment={this.props.postComment}
       errorMess={this.props.comments.errorMess} 
      />
    }
  return (
    <div >
      <Header/>
      <TransitionGroup>
      <CSSTransition key ={this.props.location.key} classNames="page" timeout={3000}>
     <Switch location={this.props.location}>
     <Route path='/home' component={HomePage}/>
     <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes}/>} />
     <Route path='/menu/:dishId' component={DishWithId}/>
     <Route path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm}/>}/>
     <Route path='/aboutus'>
     <Aboutus leaders={this.props.leaders}/>
     </Route>
    <Redirect to='/home'/>
     </Switch>
     </CSSTransition>
     </TransitionGroup>
      <Footer/>
    </div>
  );
}
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
