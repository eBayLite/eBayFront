import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class CreerEnchere extends Component {
  render() {
    return (
      
                <div className="container py-5">
                  <h2 className="text-center mb-5">Créer une enchère</h2>


                  
                  
                  
                  <div class="form-group text-blue col-md-3"> 
                  <select id="inputState" class="form-control">
                  <option selected>Etat du produit...</option>
                  <option>Neuf</option>
                  <option>Occasio</option>
                  </select>
                  </div>
                 

                  
                  <h6 className="text-blue col-md-6"><input type="text" class="form-control " placeholder="Le nom du produit" ></input>  </h6>

             
                   <h6 className="text-blue col-md-6"><input type="text" class="form-control " placeholder="Catégorie" ></input>  </h6>

                   
                   <h6 className="text-blue col-md-6"> <input type="text" class="form-control" placeholder="Prix" ></input> </h6>
                   
                   
                   <h6 className="text-blue col-md-6"> <input type="text" class="form-control"  placeholder="Contact (tél)"></input><span className="text-uppercase"></span></h6>
                         
                   <p className="col-md-5 mb-1"> Informations sur le produit :</p>
                   <p className="text-muted lead col-md-6"><textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea></p>


                 

                  <div>
                   <p className=" col-md-5 mb-1 "> Date du début</p>
                   <div className="col-md-4">
                   <input type="date"  /> 
                   </div> 

                  </div> 

                  <div>
                   <p className=" col-md-5 mb-1 "> Date de fin</p>
                   <div className="col-md-4">
                   <input type="date"  /> 
                   </div> 

                  </div>     
                 
                 
                              
                  <p className=" col-md-5 mb-1 mt-2"> Ajouter une photo de votre produit</p>
                   <div className="col-md-4">
                   <input type="file" className="form-control-file  " /> 
                   </div>  

                 


                   <div className="col-md-6 ml-auto">
                      <Link to="/enchereList">
                        <button type="button" class="btn btn-primary  mt-3">
                           Annuler
                        </button>
                     </Link>
                              
                      <Link to="/cartE">
                        <button type="button" class="btn btn-warning ml-3 mt-3">
                          Valider la création
                        </button>
                      </Link>
                   </div>
                              


                              


                         </div>
                
            )
          }}

       
    