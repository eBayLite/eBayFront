import React, { Component } from 'react';
import { Switch,Route } from 'react-router-dom';






import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import Default from './Default';

import ProductList from './componentsV/ProductList';
import Details from './componentsV/Details';
import Cart from "./componentsV/Cart";
import Modal from './componentsV/Modal';

import EnchereList from './componentsE/EnchereList';
import DetailsE from './componentsE/DetailsE';
import CartE from './componentsE/CartE/CartE';




class App extends Component {
  render() {
    return (
      <React.Fragment>

        <NavBar />
        <Switch>

          <Route path="/productList" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />


          <Route path="/enchereList" component={EnchereList} />
          <Route path="/detailsE" component={DetailsE} />
          <Route path="/cartE" component={CartE} />
          



          

          
          
          <Route component={Default} />
          
        </Switch>
        <Modal />
        
      </React.Fragment>
    );
  }
}

export default App;