import React, { Component } from 'react';
import axios from 'axios';


const Enchere = props =>(

  {
     idE: props.enchere._id,
     imgE: props.enchere.imgE,
     titleE: props.enchere.incE,
     priceE: props.enchere.priceE,
     incE: props.enchere.incE,
     infoE:props.enchere.infoE,
     companyE: props.enchere.companyE,
     inPanE: props.enchere.inPanE
  });

  
  let storeEncheres = [];

  class dataE extends Component {
    constructor(props){
      super(props);
      this.state={
        encheres:[]
      }
      
    }

      componentDidMount(){
      
        axios.get('http://localhost:4000/EbayDB/')
        .then(Response => {
            this.setState({encheres: Response.data});
            this.state.encheres.forEach(element => {
              const singleItem={...element};
              storeEncheres = [...storeEncheres,singleItem];
              
            });
        })
        .catch(function(error){
  
            console.log(error);
        })
        console.log("componentdidmount executes",storeEncheres)
    }

 /*   setEncheres = ()=>{
      
      this.encheres.forEach(element => {
        const singleItem={...element};
        storeEncheres = [...storeEncheres,singleItem];
        
      });
          
       }
      
    

   encherListe(){
     
      return this.state.encheres.map(function(item,i){
            return( 
              <Enchere enchere={item} key={i}/>,
              storeEncheres=[...storeEncheres,Enchere]
            );
      });
    }
     */
    
  render() {
    
    return (
      <div>
         
      </div>
    )
  }
}




 
export {storeEncheres};



export const detailEnchere = {
      idE: "1",
      titleE: "Barbecue à charbon ",
      imgE: "imgE/En-1.jpg",
      priceE: 15,
      incE:2,
      companyE: "+3345789878",
      infoE:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inPanE: false,
     
      
  };
  