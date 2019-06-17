import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import axios from 'axios';
import NavBar3 from '../NavBar3'

const Vente = props =>(

    <tr>
        <td>{props.vente.title}</td>
        <td>{props.vente.price}</td>
        <td>{props.vente.info}</td>
        <td>{props.vente.company}</td>
        
        
    </tr>
)

export default class listProducts extends Component {

    constructor(props){
        super(props);
        this.state={
            ventes:[]
        };
    }

    componentDidMount(){
       
        axios.get('http://localhost:4000/EbayDB/ventes')
        .then(Response => {
            this.setState({ventes: Response.data});
        })
        .catch(function(error){

            console.log(error);
        })
        
    }
    venteList() {
        return this.state.ventes.map(function(currentVente, i) {
            return <Vente vente={currentVente} key={i} />;
        });
    }
  render() { 
    return (
         <div className=" container col-md-9">

        
        
        <div className="col-md-12">
        <h3 className="text-center mt-5 mb-5 ">Mes Ventes</h3>
        <table className="table table-striped col-md-12 ml-auto" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Produit</th>
                            <th>Prix</th>
                            <th>infos sur le produit</th>
                            <th>Vendeur</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody className="col-md-12">
                        { this.venteList() }
                    </tbody>
                </table>

                
      </div>
      <NavBar3 />

      </div>
    )
  }
}
