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
import { addComment ,fetchComments,fetchDishes, fetchPromos} from '../redux/ActionCreaters';
import { actions } from 'react-redux-form';

const mapStateToProps=state =>{

  return{
    dishes:state.dishes,
    leaders: state.leaders,
    promotions: state.promotions,
    comments:state.comments
  }
}

const mapDispatchToProps=dispatch =>({
  addComment: (dishId,comment,rating,author) => dispatch(addComment(dishId,comment,rating,author)),
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
        addComment={this.props.addComment}
       errorMess={this.props.comments.errorMess} 
      />
    }
  return (
    <div >
      <Header/>
     <Switch>
     <Route path='/home' component={HomePage}/>
     <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes}/>} />
     <Route path='/menu/:dishId' component={DishWithId}/>
     <Route path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm}/>}/>
     <Route path='/aboutus'>
     <Aboutus leaders={this.props.leaders}/>
     </Route>
    <Redirect to='/home'/>
     </Switch>
      <Footer/>
    </div>
  );
}
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
