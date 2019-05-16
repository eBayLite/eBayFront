import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import {Link} from 'react-router-dom';


import Timer from './TimerE';


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

export default class DetailsE extends Component {
  render() {
    return (


      <ProductConsumer>
         {value =>{
            
         const  {_id, companyE,imgE,infoE, priceE,titleE, inPanE, incE, dateFin} = value.detailEnchere;

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
          
          <div className="mx-auto text-center">
          <h1> <Timer heur={H} minute={M} second={S}></Timer></h1>
          </div>
          
       
       
         {/* title */}
         <div className="row">
           <div className="col-10 mx-auto text-center text-slanted my-5">
             <h1>{titleE}</h1>
           </div>

         </div>
         {/*  end title */}


          {/*  Info enchere */}
         <div className="row">
             <div className="col-10 mx-auto col-md-6 my-3 text-capitalized">
               <img src={imgE} className="img-fluid" alt="enchere"/>
               <h2 className="text-blue mt-5 ">
               <strong>Dernière offre reçu: {priceE} <span> €</span></strong>
                </h2>
                 <h4 className="mx-auto mt-2 ">
                 <strong>Pour enchèrer: {incE} <span> €</span></strong>

                 </h4>
             </div>

              
               {/* enchere texte  */}
               <div className="col-10 mx-auto col-md-6 my-3 text-capitalized">
                <h3>Produit: {titleE}</h3>
                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">Vendeur: <span className="text-uppercase">{companyE}</span></h4>
                <p className="text-capitalize font-weight-bold mt-3 mb-0">A propos du produit :</p>
                <p className="text-muted lead ">{infoE} </p>

             
             
               {/* les boutons */}

             <div>
               <Link to="/enchereList">
                <button type="button" class="btn btn-outline-secondary"><i className="fas fa-arrow-left" /> Retour au enchères</button>
               </Link>

               <Link to="cartE">
                <button 
                   type="button "
                   class="btn btn-outline-warning ml-2"
                   disabled={inPanE?true:false}
                   onClick={()=>{value.addToCartE(_id)}}
               >  {inPanE?"dans enchere": "Faire une offre"}
                  </button>
               </Link>

            </div>
            </div>
            </div>
            </div>
          
          )
           }}
       </ProductConsumer>
    );
  }
}
