import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';

import  { ProductConsumer } from '../Context';




class ProductList extends Component{
    
    render(){
        

        return(


            

       <React.Fragment>
           <div className="py-5">
            <div className="container col-md-9">
            <Title name ="Liste" title=" des produits"/>
             <div className="row">
             <ProductConsumer>
               {value=>{
                return value.products.map(product => {
                    return <Product key={product} product={product} />;
                })
               }}  
             </ProductConsumer>
             </div>
            </div>
           </div>





       </React.Fragment>
          // <Product />
        
        );
    }
}
export default ProductList;