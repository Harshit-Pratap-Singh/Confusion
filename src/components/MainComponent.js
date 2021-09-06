import Menu from './MenuComponent';
import { dishes } from '../shared/dishes';
import { Component } from 'react';
import DishDetail from './DishdetailComponent';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import { Redirect, Route, Switch } from 'react-router';

class Main extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      dishes: dishes,
  };
}
     
  render() {
    const HomePage=() => <Home/>
  return (
    <div >
      <Header/>
     <Switch>
     <Route path='/home' component={HomePage}/>
     <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes}/>} />
    <Redirect to='/home'/>
     </Switch>
      <Footer/>
    </div>
  );
}
}

export default Main;
