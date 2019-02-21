import React, { Component } from 'react'
import TitleE from '../TitleE';
import CartColumnsE from './CartColumnsE';
import EmptyCartE from './EmptyCartE';
import {ProductConsumer} from '../../Context';


export default class CartE extends Component {
  render() {
    return (
     <section>
       <ProductConsumer>
         {value =>{
           const {cartE} = value;
           if(cartE.length>0){
             return(
               <React.Fragment>

                <TitleE name="Vos " title="Enchère" />
                <CartColumnsE />

               </React.Fragment>
              
             );
           }
           else{
            
             return <EmptyCartE />;
            
          }
         }}
       </ProductConsumer>
       

       
     </section>
    )
  }
}
