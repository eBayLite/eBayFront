import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom';

export default class CreateTodo extends Component {

    constructor(props) {
        super(props);

        this.onChangeEtat = this.onChangeEtat.bind(this);
        this.onChangeCategorie = this.onChangeCategorie.bind(this);
        this.onChangeNom = this.onChangeNom.bind(this);
        this.onChangePrix = this.onChangePrix.bind(this);
        this.onChangeInfo = this.onChangeInfo.bind(this);
        this.onChangeContact = this.onChangeContact.bind(this);
        this.onChangeImg = this.onChangeImg.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            etat: '',
            categorie: '',
            nom: '',
            prix: '',
            info: '',
            contact: '',
            img:'',
        }
    }

    onChangeEtat(e) {
        this.setState({
            etat: e.target.value
        });
    }

    onChangeCategorie(e) {
      this.setState({
          categorie: e.target.value
      });
  }

    onChangeNom(e) {
        this.setState({
            nom: e.target.value
        });
    }

    onChangePrix(e) {
      this.setState({
          prix: e.target.value
      });
  }

  onChangeInfo(e) {
    this.setState({
        info: e.target.value
    });
    
}


onChangeContact(e) {
  this.setState({
      contact: e.target.value
  });

   
}


onChangeImg(e) {
  this.setState({
      img: e.target.value
  });

   
}

 




    onSubmit(e) {
      
      e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Etat: ${this.state.etat}`);
        console.log(`Categorie: ${this.state.categorie}`);
        console.log(`Nom: ${this.state.nom}`);
        console.log(`Prix: ${this.state.prix}`);
        console.log(`Info: ${this.state.info}`);
        console.log(`Contact: ${this.state.contact}`);
        console.log(`Image: ${this.state.img}`);

        this.setState({
            etat: '',
            categorie: '',
            nom: '',
            prix: '',
            info: '',
            contact: '',
            img:'',
        });
    }

    render() {
        return (

          
            <div className="container   col-md-6" style={{marginTop: 20}}>
                <h3 className="text-center mt-2">Créer une enchère</h3>
                <form onSubmit={this.onSubmit} >

                    <div class="form-group text-blue col-md-6">
                        <label>Etat du produit: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.etat}
                                onChange={this.onChangeEtat}
  
                               />
                    </div>

                    <div class="form-group text-blue col-md-6">
                        <label>Categorie: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.categorie}
                                onChange={this.onChangeCategorie}
  
                                />
                    </div>
                    <div class="form-group text-blue col-md-9">
                        <label>Nom: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.nom}
                                onChange={this.onChangeNom}
                                />
                    </div>


                    <div class="form-group text-blue col-md-3">
                        <label>Prix (€): </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.prix}
                                onChange={this.onChangePrix}
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
                                value={this.state.contact}
                                onChange={this.onChangeContact}
  
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

                    

                    



                   

                    <div className="form-group col-md-6 mt-2">
                        <Link to="/cartE">
                        <button className="btn btn-dark"> 
                        <span className="mr-2">
                        <i class="fas fa-chevron-left" />
                        </span>
                        Retour à mes enchere</button>
                        </Link>
                    </div>


                    
                    <div className="form-group  ml-auto mt-2  ">
                        <button className="btn btn-danger ">Annuler</button>
                    </div>

                    <div className="form-group   mt-2 ml-2 ">
                        <button className="btn btn-warning" onClick={this.onSubmit}>valider la création</button>
                    </div>

                    
                    



                    
                    

                   

                    
                </form>
            </div>

            
        )
    }
}