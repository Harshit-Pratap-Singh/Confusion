import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import { dishes } from '../shared/dishes';
import { Component } from 'react';
import DishDetail from './DishdetailComponent';

class Main extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      dishes: dishes,
      selectedDish: null
  };
}
    onDishSelect(dishId) {
        this.setState({selectedDish: dishId});
        console.log(this.state);
    }   
  render() {
  return (
    <div >
      <Navbar dark color='danger'>
        <div className="container">
          <NavbarBrand href='/'>
            Restorante Con Fusion
          </NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes}
          onClick={(dishId) => this.onDishSelect(dishId)}
      />
      <DishDetail 
          dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}
      />
    </div>
  );
}
}

export default Main;
