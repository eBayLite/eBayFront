import React, { Component } from 'react'
import Enchere from './Enchere';
import TitleE from './TitleE';

import { ProductConsumer } from '../Context';




export default class EnchereList extends Component {
   
  render() {
    
    return (

      <React.Fragment>

            <div className="py-5 ">
            <div className="container col-md-9">
            <TitleE name="Enchères " title="" />
            <div className="row">
            
            <ProductConsumer>
              {value =>{
                 return value.encheres.map(enchere => {
                    return <Enchere
                             key={enchere._id}
                             enchere={enchere}>
                           </Enchere>;
                  })
              }}
            </ProductConsumer>
            </div>
            </div>
            </div>

      </React.Fragment>
     
        
          //  <Enchere />
    )
  }
}
