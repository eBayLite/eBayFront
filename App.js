import React, { Component } from'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {

    
    return (
      <Router>
        <div className="App">
          
          <div className="App__Form">
          
            <div className="PageSwitcher">
                <a href="#" className="PageSwitcher__Item"> Création de l'enchère</a>
                <a href="#" className="PageSwitcher__Item PageSwitcher__Item--Active"></a>
                </div>
            
            

          <Route exact path="/">
          <div className="FormCenter">
            <form className="FormFields" onSubmit={this.handleSubmit}>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name"> Nom Produit </label>
                <input type="text" id="name"  className="FormField__input" placeholder="entrer nom"name="name" />
              
              </div>

              

              <div className="FormField">
                <label className="FormField__Label" htmlFor="name"> prix minimum </label>
                <input type="text" id="prixmin"  className="FormField__input" placeholder="prix"name="prixmin" />
              
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name"> Date </label>
                <input type="date" id=""date  className="FormField__input" placeholder="date"name="date" />
              
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email"> Descriptif </label>
                <input type="text" id="desc"  className="FormField__input" placeholder="descriptif"name="desc" />
              
              </div>
              
            
              <div className="FormField">
                <button className="FormField__Button--mr20" > Poster </button>
               
              
              </div>



            </form>

          </div>
          </Route>

          </div>
          </div>
    
        </Router>
    );
    
  }
}


export default App