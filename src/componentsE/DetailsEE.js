import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';



export default class DetailsEE extends Component {
constructor(props){
  super(props);

  this.onChangeOffre = this.onChangeOffre.bind(this);
  this.onSubmit = this.onSubmit.bind(this);

  this.state = {
    titleE:'',
    imgE:'',
    priceE:'',
    incE:'',
    companyE:'',
    infoE:'',
    dateFin : '',
    offre:'',
    newOffre: ''
  }
}

componentDidMount(){
  axios.get('http://localhost:3000/encheres/enchbyid/'+this.props.match.params.id)
  .then(response =>{
    this.setState({
    titleE:response.data.titleE,
    imgE : response.data.imgE,
    priceE:response.data.priceE,
    incE:response.data.incE,
    companyE:response.data.companyE,
    infoE:response.data.infoE,
    dateFin : response.data.dateFin,
    offre:response.data.offre
    })
  })
  .catch(function(error){
    console.log(error)
  })

  this.verifierToken();
}

verifierToken(){
  if(!(localStorage.usertoken||localStorage.admintoken)){
      this.props.history.push(`/redirect`);
  }
}


onChangeOffre(e){
  this.setState({
    offre : e.target.value
  })
  
}





onSubmit(e){
  e.preventDefault();
 

 

  const Ench = {
    titleE:this.state.titleE,
    imgE:this.state.imgE,
    priceE:this.state.priceE,
    incE:this.state.incE,
    companyE:this.state.companyE,
    infoE:this.state.infoE,
    dateFin : this.state.dateFin,
    offre:this.state.offre,
    disponible:this.state.disponible
  };

  axios.post('http://localhost:3000/encheres/update/'+this.props.match.params.id,Ench)
  .then(res=> console.log(res.data));
  this.props.history.push('/enchereList');
}

  render() {
    return (
        
       <div className="container py-5">
        <form onSubmit={this.onSubmit} > 
  
          
          <div className="row">
             <div className="col-10 mx-auto text-center text-slanted my-5">
              <h1 className="titreED">{this.state.titleE}</h1>
              <p className="text-muted lead ">{this.state.infoE} </p>
             </div>
          </div>
          

          
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3 text-capitalized">
             <p>Pour faire une offre, il faut que cete derniere soit superieure ou egale à l'encienne offre + le minimum pour encherir designé par le vendeur, merci!</p>
            </div>

            
          
             <div className="col-10 mx-auto col-md-6 my-3 text-capitalized">

              <h2 className="text-blue mt-5 ">
              <strong>Dernière offre reçu: {this.state.offre} <span> €</span></strong>
              </h2>
              <h4 className="mx-auto mt-2 ">
              <small className="MinPourEncherire">Minimum pour enchèrir: {this.state.incE} <span> €</span></small>
              </h4>
             </div>

             <div className="mt-5 col-md-12">

               <div class="form-group text-blue col-md-6">
               <label>Votre offre (€) : </label>
               <input  
                     type="number"
                     className="form-control"
                     
                     onChange={this.onChangeOffre}
                />
                </div>


                <div className="form-group col-md-6">
                <input type="submit" value="Valider " className="btn btn-outline-secondary col-md-12" />
               </div>

    </div>


          </div>
          </form>
          </div>
       


        

  
        
          )
         }}
       
    
 
