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
import DetailsEE from './componentsE/DetailsEE';
import CartE from './componentsE/CartE/CartE';

import Login from './Accueil/Login';
import Reinit from './Accueil/Reinit';
import CreerEnchere from './componentsE/CartE/CreerEnchere'
import CreerVente from './componentsV/Cart/CreerVente'

import listEnchere from '../src/componentsE/listEnchere';
import listProducts from '../src/componentsV/listProducts';
import Accueil from './Accueil/Accueil';
import Alert from './Alert';
import Register from './Accueil/Register';
import Profile from './Accueil/Profil';
import ProfileAdm from './Accueil/profileAdmin';
import nonAuth from './Default';




class App extends Component {
  render() {
    return (
      <React.Fragment>

        <NavBar />


        <Switch>
          <Route exact path="/" component={Accueil} />
          <Route exact path="/listEnchere" component={listEnchere} />
          <Route exact path="/listProducts" component={listProducts} />
          <Route path="/login" component={Login} />
          <Route path="/reinit" component={Reinit} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} />
          <Route path="/profileAdmin" component={ProfileAdm} />
          <Route path="/redirect" component={nonAuth} />
          <Route path="/accueil" component={Accueil} />
          <Route path="/productList" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />


          <Route path="/EnchereList" component={EnchereList} />
          <Route path="/detailsE" component={DetailsE} />
          <Route path="/detailsEE/:id" component={DetailsEE} />
          <Route path="/cartE" component={CartE} />

          <Route path="/encheres/creer" component={CreerEnchere} />
          <Route path="/creerVente" component={CreerVente} />

          <Route component={Default} />
          
        </Switch>
        <Modal />
  
        
      </React.Fragment>
    );
  }
}

export default App;
