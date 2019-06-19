import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


import Timer from './TimerE';


function dateDiff(date1, date2){
  var diff = {}                           // Initialisation du retour
  var tmp = date2 - date1;

  if (tmp<0){
    diff.sec=0;
    diff.min=0;
    diff.hour=0;
    diff.day=0
  }
  else{

  tmp = Math.floor(tmp/1000);             // Nombre de secondes entre les 2 dates
  diff.sec = tmp % 60;                    // Extraction du nombre de secondes

  tmp = Math.floor((tmp-diff.sec)/60);    // Nombre de minutes (partie entière)
  diff.min = tmp % 60;                    // Extraction du nombre de minutes

  tmp = Math.floor((tmp-diff.min)/60);    // Nombre d'heures (entières)
  diff.hour = tmp % 24;                   // Extraction du nombre d'heures
   
  tmp = Math.floor((tmp-diff.hour)/24);   // Nombre de jours restants
  diff.day = tmp;
}
   
  return diff;
}

 



export default class DetailsE extends Component {

  verifierToken(){
    if (!(localStorage.usertoken||localStorage.admintoken)){
        this.props.history.push(`/redirect`);
    }
}


componentDidMount () {
    
}

  render() {
    return (
        <ProductConsumer>
         {value =>{
           const {
           _id, 
           companyE,
           imgE,
           infoE, 
           priceE,
           titleE, 
           inPanE, 
           incE, 
           dateFin,
           disponible,
           offre
          } = value.detailEnchere;

         var tempDate = new Date();
         var dateN = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate() +' '+ tempDate.getHours()+':'+ tempDate.getMinutes()+':'+ tempDate.getSeconds();
         var dateNow = new Date(dateN)
     
         var dateFi =new Date(dateFin)
         const Rest =  dateDiff(dateNow, dateFi);
         console.log(Rest);
     
         let H= Rest["hour"] + (Rest["day"]*24) ;
         let M = Rest["min"];
         let S = Rest["sec"];
         
         
         
         return(
        
        <div className="container py-5">
          
            {/* title */}
            <div className="row">
               <div className="col-10 mx-auto text-center text-slanted my-5">
                <h1 className="titreED">{titleE}</h1>
                <p className="text-muted lead "   >  </p>
               </div>
               
             </div>
            {/*  end title */}

            {/*  Info enchere */}
            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalized">
               <img src={imgE} className="img-fluid" alt="enchere"/>
              </div>

              
               {/* enchere texte  */}
               <div className="col-10 mx-auto col-md-6 my-3 text-capitalized">
                <h3>Produit: {titleE}</h3>
                <h4 className="  mt-3 mb-2">Vendeur: <span className="text-uppercase">
                  <span className="mr-2">
                  <i className="fas fa-phone" />
                  </span>
                 {companyE}</span></h4>
                <p className="text-capitalize font-weight-bold mt-3 mb-0">A propos du produit :</p>
                <p className="text-muted lead ">{infoE} </p>

                <div className="mx-auto text-center mt-3">
             <h1> <Timer
                    heur={H} 
                    minute={M} 
                    second={S} 
                    color={((H===0)&&(M===0)&&(S===0))?"timerF":"timer"} 
                    message={((H===0)&&(M===0)&&(S===0))?"* L'enchère n'est plus disponible *":""}></Timer></h1>
            </div>

             
             
               {/* les boutons */}

             
  
                 <Link to={"/detailsEE/"+_id}>
                <div className="col-md-12">
                <input 
                className="btn btn-warning col-md-12 mt-2"
                type="submit" 
                disabled={(!(localStorage.usertoken||localStorage.admintoken)||((H===0)&&(M===0)&&(S===0)))?true:false}
                value={(!(H===0)&&(M===0)&&(S===0))?((!(localStorage.usertoken||localStorage.admintoken)?"Connectez-vous pour enchèrir":"Indisponible" )): "Fa une offre"} 
                 />  
                </div>
                </Link>
               
               
                <h2 className="text-blue mt-5 ">
                 <h4>Dernière offre reçu: {offre} <span> €</span></h4>
               </h2>
                 <h5 className="mx-auto mt-2 ">
                 <small className="MinPourEncherire">Minimum pour enchèrir: {incE} <span> €</span></small>
                 </h5>

            <div className="mt-5 col-md-12">
            <Link to="/EnchereList">
              <button 
              type="button" 
              class="btn btn-outline-secondary col-md-12">
                <i className="fas fa-arrow-left" /> Retour aux enchères</button>
            </Link>
            </div>



            </div>
            </div>
            </div>
          
          )
           }}
       </ProductConsumer>
    )
  }
}
