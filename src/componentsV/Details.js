import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import {Link} from 'react-router-dom';



class Details extends Component{
    render(){
        return(
        <ProductConsumer>
          {(value)=>{
            const {_id, company, img, info,price, title, inCart} = value.detailProduct;
            return(
                <div className="container py-5">
                   {/* title */ }
                   <div className="row">

                      <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                          <h1 className="titreED">{title}</h1>
                      </div>

                   </div>
                   {/* end title */}

                   {/* produit info */}
                   
                   <div className="row">
                       {/* img */}
                      <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                          <img src={img} className="img-fluid" alt="product"/>
                      </div>
                        {/* end img */}


                      <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                         <h3 className="titreVD">Model : {title}</h3>
                         <h4 className=" mt-3 mb-2"> Vendeur: <span className="text-uppercase">
                           <span className="mr-2">
                           <i className="fas fa-phone" />
                           </span>{company}</span>
                         </h4>
                         <h4 className="PrixP"><strong> Prix : {price} <span>€</span></strong></h4>
                         <p className="text-capitalize font-weight-bold mt-3 mb-0"> Informations sur le produit :</p>
                         <p className="text-muted lead">{info}</p>

                         {/* bouttons */}
                         <div>
                              <Link to="/productList">

                              <button type="button" class="btn btn-primary ">
                              Retour
                              </button>
                                
                              </Link>
                              

                              <button type="button" class="btn btn-warning ml-3" cart disabled={inCart?true:false}
                              onClick={()=>{
                                  value.addToCart(_id);
                                  value.openModal(_id);

                              }}>
                              
                              {inCart?"Dans panier":"Ajouter au panier"}
                              </button>
                          


                              


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
export default Details;