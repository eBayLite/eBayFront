import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import axios from 'axios';
import NavBar2 from '../NavBar2'

const Enchere = props =>(

    <tr>
        <td>{props.enchere.titleE}</td>
        <td>{props.enchere.priceE}</td>
        <td>{props.enchere.offre}</td>
        <td>{props.enchere.infoE}</td>
        <td>{props.enchere.companyE}</td>
        
        
    </tr>
)

export default class listEnchere extends Component {

    constructor(props){
        super(props);
        this.state={
            encheres:[]
        };
    }

    componentDidMount(){
       
        axios.get('http://localhost:4000/EbayDB/')
        .then(Response => {
            this.setState({encheres: Response.data});
        })
        .catch(function(error){

            console.log(error);
        })
        
    }
    enchereList() {
        return this.state.encheres.map(function(currentEnchere, i) {
            return <Enchere enchere={currentEnchere} key={i} />;
        });
    }
  render() { 
    return (
         <div className=" container col-md-9">

        
        
        <div className="col-md-12">
        <h3 className="text-center mt-5 mb-5 ">Mes enchères</h3>
        <table className="table table-striped col-md-12 ml-auto" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Produit</th>
                            <th>Prix de départ</th>
                            <th>Mon offre</th>
                            <th>infos sur le produit</th>
                            <th>Vendeur</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody className="col-md-12">
                        { this.enchereList() }
                    </tbody>
                </table>

                
      </div>
      <NavBar2 />

      </div>
    )
  }
}
