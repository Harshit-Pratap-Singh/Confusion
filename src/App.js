import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import { dishes } from './shared/dishes';
import { Component } from 'react';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      dishes:dishes
    };
  }
  render() {

  return (
    <div className="App">
      <Navbar dark color='danger'>
        <div className="container">
          <NavbarBrand href='/'>
            Restorante Con Fusion
          </NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes}/>
    </div>
  );
}
}

export default App;
