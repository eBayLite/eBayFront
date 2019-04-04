import React, { Component } from 'react';
import { Switch,Route } from 'react-router-dom';






import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import Footer from './Footer';
import Default from './Default';

import ProductList from './componentsV/ProductList';
import Details from './componentsV/Details';
import Cart from "./componentsV/Cart";
import Modal from './componentsV/Modal';

import EnchereList from './componentsE/EnchereList';
import DetailsE from './componentsE/DetailsE';
import CartE from './componentsE/CartE/CartE';
import Register from './Accueil/Register';
import Login from './Accueil/Login';
import Reinit from './Accueil/Reinit';
import CreerEnchere from './componentsE/CartE/CreerEnchere'
import listEnchere from '../src/componentsE/listEnchere';
import Accueil from './Accueil/Accueil';

import dataE from './dataE'




class App extends Component {
  render() {
    return (
      <React.Fragment>

        <NavBar />
        
        <Switch>
          <Route exact path="/" component={Register} />
          <Route exact path="/l" component={listEnchere} />
          <Route path="/login" component={Login} />
          <Route path="/reinit" component={Reinit} />

          <Route path="/accueil" component={Accueil} />
          <Route path="/productList" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />


          <Route path="/enchereList" component={EnchereList} />
          <Route path="/detailsE" component={DetailsE} />
          <Route path="/cartE" component={CartE} />

          <Route path="/creerEnchere" component={CreerEnchere} />

          <Route component={Default} />
          
        </Switch>
        <Modal />
  
        
      </React.Fragment>
    );
  }
}

export default App;
