import React, { Component } from 'react';
import {storeProducts, detailProduct } from './data';
import {storeEncheres, detailEnchere } from './dataE';

import axios from 'axios';







const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component{

  state={

    
   products: [],
   detailProduct: detailProduct,
   cart : [],
   modalOpen : false,
   modalProduct : detailProduct,
   cartSubTotal :0,
   cartTax:0,
   cartTotal:0,

   store : [],
   encheres : [],
   detailEnchere : detailEnchere,
   cartE : [],
   
    };

   

   
  
  
    setEncheres = ()=>{
      
      axios.get('http://localhost:3000/encheres/listench')
      .then(Response => {
        this.setState({
          encheres: Response.data
        });
      })
      .catch(function(error){
    
          console.log(error);
      })
      
    
  }
  
  
   getItemE = (id) =>{
     const enchere = this.state.encheres.find(item => item._id===id);
     return enchere;
  
   };
  
  
  
  
    handleDetailE = (id) =>{
     const enchere = this.getItemE(id);
     this.setState(() =>{
       return {detailEnchere:enchere}
     })
    }
  
    addToCartE = _id  => {
      let TempEncheres = [...this.state.encheres];
      const index = TempEncheres.indexOf(this.getItem(_id));
      const enchere =TempEncheres[index];
      enchere.inPanE=true;
      enchere.priceE=15;
      enchere.incE=5;
  
      this.setState(()=>{
        return{
          encheres:TempEncheres, 
          cartE :[...this.state.cartE,enchere]
          
        };
      });
      
    }
  
   
  
    incrementE = (idE)=>{
      let tempCart = [...this.state.cart];
      const selectedEnchere = tempCart.find(item=> item._id===idE)
  
      const index = tempCart.indexOf(selectedEnchere);
      const enchere = tempCart[index];
  
      enchere.priceE = enchere.priceE +5;
      
  
      this.setState(
                   ()=>{return{panE:[...tempCart]}})
    }
  



  
   

   

  //Products methods

  setProducts = ()=>{
    axios.get('http://localhost:3000/produits/listventes')
      .then(Response => {
        this.setState({
          products: Response.data
        });
      })
      .catch(function(error){
    
          console.log(error);
      })
  }

  getItem = (id) => {

    const product = this.state.products.find(item => item._id === id);
    return product;
  } 

  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(()=>{

          return {detailProduct:product}
    })
  };

  addToCart = (id) => {
    let TempProducts = [...this.state.products];
    const index = TempProducts.indexOf(this.getItem(id));
    const product =TempProducts[index];
    product.inCart=true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(()=>{
      return{
        products:TempProducts, 
        cart :[...this.state.cart,product]
      };
    },() => {
      this.addTotals();
    })
  }


  openModal = id =>{
      const product = this.getItem(id);
      this.setState(()=>{

        return{modalProduct:product,modalOpen:true}
      })
  }

  closeModal = ()=>{
    this.setState(()=>{
      return{modalOpen:false}
    })
  }

  increment = (id)=>{
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item=> item._id===id)

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count +1;
    product.total = product.count * product.price;

    this.setState(
                 ()=>{return{cart:[...tempCart]}},
                 ()=>{this.addTotals()})
  }

  decrement = (id)=>{
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item=> item._id===id)

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count -1;
    
    if(product.count===0){
      this.removeItem(id);
    }
    else{
      product.total = product.count * product.price;
      this.setState(
        ()=>{return{cart:[...tempCart]}},
        ()=>{this.addTotals();});
    }

  };

  removeItem = (id)=>{
    let TempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item=> item._id !== id);
    const index = TempProducts.indexOf(this.getItem(id));
    let removedProduct = TempProducts[index];
    removedProduct.inCart=false;
    removedProduct.count= 0;
    removedProduct.total=0;

    this.setState(()=>{
      return{
        cart:[...tempCart],
        products:[...TempProducts]
      }
    },()=>{
      this.addTotals();
    })
  }

  clearCart = ()=>{
    this.setState(()=>{
      return{cart:[]};
    },()=>{
         this.setProducts();
         this.addTotals();
    });
  }


  addTotals = () =>{
    let subTotal = 0;
    this.state.cart.map(item=>(subTotal += item.total));
    const tempTax = subTotal * 0.2;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(()=>{
      return{
        cartSubTotal:subTotal,
        cartTax:tax,
        cartTotal:total

      }
    })
  }


  //Encheres methodes

 






  //commun methodes

 
   componentDidMount(){
   this.setProducts(); 
   this.setEncheres(); 
  }

  componentDidUpdate(){
    this.setEncheres();
   
  }

  

    render(){
        return(
           <ProductContext.Provider value={{

            //Products
            ...this.state,
            handleDetail: this.handleDetail,
            addToCart: this.addToCart,
            openModal: this.openModal,
            closeModal: this.closeModal,
            increment: this.increment,
            decrement: this.decrement,
            removeItem: this.removeItem,
            clearCart: this.clearCart,

            //Encheres

            handleDetailE : this.handleDetailE,
            addToCartE : this.addToCartE,
            incrementE : this.incrementE

          }}>
             {this.props.children}  
           </ProductContext.Provider>

        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};