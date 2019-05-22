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
        this.onChangeInc = this.onChangeInc.bind(this);
        this.onChangeInfo = this.onChangeInfo.bind(this);
        this.onChangeCompany = this.onChangeCompany.bind(this);
        this.onChangeDateFin = this.onChangeDateFin.bind(this);
        this.onChangeOffre=this.onChangeOffre.bind(this);
       
        this.onSubmit = this.onSubmit.bind(this);
       
       
       
        this.state ={
            titleE:'',
            imgE:'',
            priceE:'',
            incE:'',
            companyE:'',
            infoE:'',
            inPanE : false,
            dateFin : '',
            offre:0,
            disponible:true
            
        }
    }

    onChangeTitle(e){
       this.setState({
           titleE : e.target.value
       });
    }

    onChangeImg(e){
        this.setState({
            imgE : e.target.value
        });
        
       
     }

     onChangePrice(e){
        this.setState({
            priceE : e.target.value
        });
     }

     onChangeInc(e){
        this.setState({
            incE : e.target.value
        });
     }

     onChangeCompany(e){
        this.setState({
            companyE : e.target.value
        });
     }

     onChangeInfo(e){
        this.setState({
            infoE : e.target.value
        });
     }

     onChangeOffre(e){
        this.setState({
            offre : e.target.value
        });
     }

     onChangeDateFin(e){
        this.setState({
            dateFin : e.target.value
        });

        
     }



     onSubmit(e){
         e.preventDefault();

         console.log(`form submited: `);
         console.log(`titre: ${this.state.titleE}`);
         console.log(`image: ${this.state.imgE}`);
         console.log(`prix: ${this.state.priceE}`);
         console.log(`increment: ${this.state.incE}`);
         console.log(`company: ${this.state.companyE}`);
         console.log(`info: ${this.state.infoE}`);
         console.log(`Panier: ${this.state.inPanE}`);
         console.log(`dateFin: ${this.state.dateFin}`);
         console.log(`offre: ${this.state.offre}`);
         console.log(`disponible: ${this.state.disponible}`);


         const newEnchere = {

            titleE: this.state.titleE,
            imgE: this.state.imgE,
            priceE: this.state.priceE,
            incE: this.state.incE,
            companyE: this.state.companyE,
            infoE: this.state.infoE,
            inPanE : this.state.inPanE,
            dateFin : this.state.dateFin,
            offre : this.state.priceE,
            disponible:this.state.disponible

         }

         axios.post('http://localhost:4000/EbayDB/add',newEnchere)
         .then(res => console.log(res.data));

         this.setState({
            titleE:'',
            imgE:'',
            priceE:'',
            incE:'',
            companyE:'',
            infoE:'',
            dateFin : '',
            inPanE : false,
            
         })

     }
 

    render() {
        return (
        
            <div className="container   col-md-6" style={{marginTop: 20}}>
                <h3 className="text-center mt-2">Créer une enchère</h3>
                <form onSubmit={this.onSubmit} >

                    

                    <div class="form-group text-blue col-md-3">
                        <label>Date de fin : </label>
                        <input  type="date"
                                className="form-control"
                                value={this.state.dateFin}
                                onChange={this.onChangeDateFin}
  
                               />
                    </div>

                    <div class="form-group text-blue col-md-3">
                        <label>Minimum pour enchèrir (€) : </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.incE}
                                onChange={this.onChangeInc}
  
                               />
                    </div>

                    
                    <div class="form-group text-blue col-md-9">
                        <label>Titre: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.titleE}
                                onChange={this.onChangeTitle}
                                
                                />
                    </div>


                    <div class="form-group text-blue col-md-3">
                        <label>Prix de départ (€): </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.priceE}
                                onChange={this.onChangePrice}
                                
                                />
                    </div>



                    <div class="form-group text-blue col-md-12  " >
                        <label>Détails: </label>
                        <textarea 
                                type="text" 
                                className="form-control"
                                value={this.state.infoE}
                                onChange={this.onChangeInfo}
                                rows = "5"
                                />
                    </div>


                    <div class="form-group text-blue col-md-3">
                        <label>Contact (tél): </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.companyE}
                                onChange={this.onChangeCompany}
                                
  
                               />
                    </div>


                    <div class="form-group text-blue col-md-9">
                        <label>Image du produit: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.imgE}
                                onChange={this.onChangeImg}
                                
  
                               />
                    </div>
                    
                    <div className="form-group col-md-3 mt-2">
                        <Link to="/listEnchere">
                        <button className="btn btn-dark"> 
                        <span className="mr-2">
                        <i class="fas fa-chevron-left" />
                        </span>
                        Retour à mes enchere</button>
                        </Link>
                    </div>
                    
                    <div className="form-group     ">
                    
                     <input type="submit" value="Valider la creation" className="btn btn-warning mt-2" />
                     <Link to ="/enchereList">
                     </Link>
                    </div>
                    
             </form>
     </div>
     )
    }
}