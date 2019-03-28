import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import axios from 'axios';

const Enchere = props =>(

    <tr>
        <td>{props.enchere.titleE}</td>
        <td>{props.enchere.incE}</td>
        <td>{props.enchere.inPanE}</td>
        <td>{props.enchere.priceE}</td>
        <td>{props.enchere.infoE}</td>
        <td>{props.enchere.companyE}</td>
        <td>{props.enchere.imgE}</td>
        
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
        console.log("wadiiiiii")
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
      <div>
        <h3 className="text-center mt-5 mb-5">La liste des enchères</h3>
        <table className="table table-striped col-md-12 ml-auto" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>titre</th>
                            <th>pour encherer</th>
                            
                            
                            <th>in pan</th>
                            <th>prix</th>
                            <th>info</th>
                            <th>contact</th>
                            <th>img</th>
                        </tr>
                    </thead>
                    <tbody className="col-md-12">
                        { this.enchereList() }
                    </tbody>
                </table>
      </div>
    )
  }
}
