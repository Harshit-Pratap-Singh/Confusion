import Menu from './MenuComponent';
import { dishes } from '../shared/dishes';
import { Component } from 'react';
import DishDetail from './DishdetailComponent';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import { Redirect, Route, Switch } from 'react-router';
import Contact from './Contact';
import {COMMENTS} from '../shared/comments';
import {PROMOTIONS} from '../shared/promotions';
import {LEADERS} from '../shared/leaders';


class Main extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      dishes: dishes,
      comments:COMMENTS,
      promotions:PROMOTIONS,
      leaders:LEADERS
  };
}
     
  render() {
    const HomePage=() => <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]} promotion={this.state.promotions.filter((promotion) => promotion.featured)[0]} leader={this.state.leaders.filter((leader) => leader.featured)[0]}/>
  return (
    <div >
      <Header/>
     <Switch>
     <Route path='/home' component={HomePage}/>
     <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes}/>} />
     <Route path='/contactus' component={Contact}/>
    <Redirect to='/home'/>
     </Switch>
      <Footer/>
    </div>
  );
}
}

export default Main;
