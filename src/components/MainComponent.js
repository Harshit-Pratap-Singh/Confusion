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
import { addComment } from '../redux/ActionCreaters';

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
})

class Main extends Component {
  constructor(props)
  {
    super(props);
    
}

     
  render() {
    const HomePage=() => <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]} promotion={this.props.promotions.filter((promotion) => promotion.featured)[0]} leader={this.props.leaders.filter((leader) => leader.featured)[0]}/>

    const DishWithId=({match}) =>{
      console.log(this.props.dishes.filter((dish) => dish.id===parseInt(match.params.dishId,10))[0]);
      console.log(match.params.dishId);
      return <DishDetail dish={this.props.dishes.filter((dish) => dish.id===parseInt(match.params.dishId,10))[0]}
        comments={this.props.comments.filter((comment) => comment.dishId===parseInt(match.params.dishId,10))}
        addComment={this.props.addComment} 
      />
    }
  return (
    <div >
      <Header/>
     <Switch>
     <Route path='/home' component={HomePage}/>
     <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes}/>} />
     <Route path='/menu/:dishId' component={DishWithId}/>
     <Route path='/contactus' component={Contact}/>
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
