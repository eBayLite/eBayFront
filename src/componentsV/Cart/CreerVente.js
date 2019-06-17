import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class CreerEnchere extends Component {
    constructor(props){
        super(props);


        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeImg= this.onChangeImg.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeInfo = this.onChangeInfo.bind(this);
        this.onChangeCompany = this.onChangeCompany.bind(this);
       
       
       
        this.onSubmit = this.onSubmit.bind(this);
       
       
       
        this.state ={
            title:'',
            img:'',
            price:'',
            inc:0,
            company:'',
            info:'',
            inPan : false,
            inCart : false,
            count : 0,
            total : 0
            
           
            
        }
    }

    onChangeTitle(e){
       this.setState({
           title : e.target.value
       });
    }

    onChangeImg(e){
        this.setState({
            img : e.target.value
        });
        
       
     }

     onChangePrice(e){
        this.setState({
            price : e.target.value
        });
     }

     
   

     onChangeCompany(e){
        this.setState({
            company : e.target.value
        });
     }

     onChangeInfo(e){
        this.setState({
            info : e.target.value
        });
     }

     

    



     onSubmit(e){
         e.preventDefault();

    


         const newVente = {

            title: this.state.title,
            img: this.state.img,
            price: this.state.price,
            inc: this.state.inc,
            company: this.state.company,
            info: this.state.info,
            inPan : this.state.inPan,
            inCart : this.state.inCart,
            count : this.state.count,
            total : this.state.total

         }

         axios.post('http://localhost:4000/EbayDB/add/vente',newVente)
         .then(res => console.log(res.data));

         this.setState({
            title:'',
            img:'',
            price:'',
            company:'',
            info:''
            
         })

     }
 

    render() {
        return (
        
            <div className="container   col-md-6" style={{marginTop: 20}}>
                <h3 className="text-center mt-2">Ajouter une vente</h3>
                <form onSubmit={this.onSubmit} >

                    

                    
                    

                    
                    <div class="form-group text-blue col-md-9">
                        <label>Titre: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.title}
                                onChange={this.onChangeTitle}
                                
                                />
                    </div>


                    <div class="form-group text-blue col-md-3">
                        <label>Prix (€): </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.price}
                                onChange={this.onChangePrice}
                                
                                />
                    </div>
                    
                    <div class="form-group text-blue col-md-12  " >
                        <label>Détails: </label>
                        <textarea 
                                type="text" 
                                className="form-control"
                                value={this.state.info}
                                onChange={this.onChangeInfo}
                                rows = "5"
                                />
                    </div>


                    <div class="form-group text-blue col-md-3">
                        <label>Contact (tél): </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.company}
                                onChange={this.onChangeCompany}
                                
  
                               />
                    </div>


                    <div class="form-group text-blue col-md-9">
                        <label>Image du produit: </label>
                        <input  type="file"
                                className="form-control"
                                value={this.state.img}
                                onChange={this.onChangeImg}
                                
  
                               />
                    </div>
                    
                    <div className="form-group col-md-3 mt-2">
                        <Link to="/listProducts">
                        <button className="btn btn-dark"> 
                        <span className="mr-2">
                        <i class="fas fa-chevron-left" />
                        </span>
                        Retour à mes ventes</button>
                        </Link>
                    </div>
                    
                    <div className="form-group     ">
                    
                     <input type="submit" value="Valider la creation" className="btn btn-warning mt-2" />
                     <Link to ="/productList">
                     </Link>
                    </div>
                    
             </form>
     </div>
     )
    }
}