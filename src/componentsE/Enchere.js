import React, { Component } from 'react';

import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { ProductConsumer} from '../Context';
import Timer from './TimerE';
import PropTypes from 'prop-types';


function dateDiff(date1, date2){
  var diff = {}                           // Initialisation du retour
  var tmp = date2 - date1;

  tmp = Math.floor(tmp/1000);             // Nombre de secondes entre les 2 dates
  diff.sec = tmp % 60;                    // Extraction du nombre de secondes

  tmp = Math.floor((tmp-diff.sec)/60);    // Nombre de minutes (partie entière)
  diff.min = tmp % 60;                    // Extraction du nombre de minutes

  tmp = Math.floor((tmp-diff.min)/60);    // Nombre d'heures (entières)
  diff.hour = tmp % 24;                   // Extraction du nombre d'heures
   
  tmp = Math.floor((tmp-diff.hour)/24);   // Nombre de jours restants
  diff.day = tmp;
   
  return diff;
}

export default class Enchere extends Component {

  
 
  render() {




    const {_id, titleE, imgE, priceE,incE,infoE,companyE,inPanE,dateFin} =this.props.enchere;
    var tempDate = new Date();
    var dateN = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate() +' '+ tempDate.getHours()+':'+ tempDate.getMinutes()+':'+ tempDate.getSeconds();
    var dateNow = new Date(dateN)

    var dateFi =new Date(dateFin)
    


   
   
   

   const Rest =  dateDiff(dateNow, dateFi);
   console.log(Rest);

  let H= Rest["hour"] + (Rest["day"]*24) ;
 let M = Rest["min"];
  let S = Rest["sec"];


  





    return (
       <EnchereWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      
       <div className="card">

        <ProductConsumer>
           {value=>(
            <div 
               className="img-container p-5"
               onClick={() => value.handleDetailE(_id)}>
               <Link to="/detailsE">
               <img src={imgE} alt="Enchère" className="card-img-top" />
               </Link>
            </div>
            )}
        </ProductConsumer>

        {/* footer */}   

        
        <div className="card-footer d-flex justify-content-between">
             <p className="align-self-center mb-0">
              {titleE}
             </p>
        </div>
         
         
        <div>

         <h5 className="text-blue font-italic rm-2 ">
          Dérniere offre reçu:  {priceE}<span className="mr-1"> € </span>
         </h5>
            
          <h6 className="mx-auto">
            <Timer heur={H} minute={M} second={S} />
          </h6>
         
         
         </div>
         
         </div>
      
      </EnchereWrapper>
    )
  }
}

Enchere.propTypes = {
  enchere : PropTypes.shape({

     idE : PropTypes.number,
     imgE :PropTypes.string,
     titleE : PropTypes.string,
     priceE :PropTypes.number,
    inPanE : PropTypes.bool

}).isRequired
  
}

const EnchereWrapper = styled.div`
.card{
  border-color : transparent;
  transition : all 0.5s linear;
}
.card-footer{
 background : transparent;
 transition : all 0.5s linear;
  
}
&:hover{
 .card{
     background : rgba(233,228,246);
     border : 0.04rem solid rgba(0,0,0,0.2);
     box-shadow : 2px 2px 5px 0px rgba(0,0,0,0.2)
 } 
 .card-footer{
     background : rgba(208,195,238);

 }
}

.img-container{
  position : relative;
  overflow : hidden;

}

.card-img-top{
 transition : all 0.5s linear;
}

.img-container:hover .card-img-top{
transform : scale(1.1);
}

.cart-btn{
  position : absolute;
  bottom : 0;
  right : 0;
  padding : 0.2rem 0.4rem;
  background : var(--lightBluee);
  border : none;
  color : var(--mainWhite);
  font-size : 1.4rem;
  border-radius : 0.5rem 0 0 0;
  transform : translate(100%, 100%);
  transition : all 0.5s linear;


}

.img-container:hover{
   .cart-btn{
  transform : translate(0,0);
 }
}

.cart-btn:hover{
 color : var(--mainYellow);
 
 cursor : pointer;
}



`