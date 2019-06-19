import React from 'react';
import {Link} from 'react-router-dom';

function CartTotals({value}){
    const {cartSubTotal,cartTax,cartTotal,clearCart} = value;

    return(

        <React.Fragment>
           <div className="container  ">
           <div className="row">
           <div className=" mt-auto  ml-auto  " >
             

            <h5>
                <span >Total hors taxe: {cartSubTotal} €</span>
                
            </h5>

            <h5>
                <span >Taxe: {cartTax} € </span>
                
            </h5>

            <h5>
                <span className="TotalCard">Total à payer : {cartTotal} €</span>
                
            </h5>

            <div className="mt-3 col-md-12">
            <Link to="/Cart">
               <button className="btn btn-danger col-md-12" type="button"
               onClick={()=>clearCart()}
               >
                  Vider le panier 
               </button>
              </Link>

            </div>

           </div>

           </div>
           
           </div> 
        </React.Fragment>

    );
}
export default CartTotals;