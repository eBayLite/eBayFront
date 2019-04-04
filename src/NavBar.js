import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logos from './logos.png';

import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';






class NavBar extends Component{
    render(){
        return(



      <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5 col-md-12" >
     
    

        <ul className="navbar-nav align-items-center col-md-6 ">
         
         <li>

         <Link to="/" >
         <img src={logos} alt="store" className="navbar-brand"></img>
        </Link>
         </li>

         <li className="nav-item ml-5">
          <Link to="/accueil" className="nav-link" >
           Accueil
          </Link>
         </li>

         <li className="nav-item ml-5">
          <Link to="/productList" className="nav-link" >
           Ventes
          </Link>
         </li>

         <li className="nav-item ml-5">
          <Link to="/enchereList" className="nav-link" >
           Enchères
          </Link>
         </li>
         <li className="nav-item ml-5">
          <Link to="/l" className="nav-linka" >
           Enchere test
          </Link>
         </li>
         </ul>

         
        
        <ul className="navbar-nav align-items-center ml-5 col-md-3  ">
           
            <li className="nav-item col-md-9  ">
            
             <span className="mr-0">
               <input type="text" class="form-control"  placeholder="Chercher..." />
             </span>
            
           </li>
            
        
           <li className="nav-item col-md-3 ">

             <Link to="/productList" className="ml-auto ">
              <button type="button" class="btn btn-warning">
                <span className="mr-6">
                  <i className="fas fa-search" />
                </span>
              </button>
            </Link>
           </li>    

        </ul>


        <ul className="navbar-nav align-items-center ml-auto mt-0.1 col-md-3 ">
        
         <Link to="/cartE" className="ml-5">
        <button type="button" class="btn btn-light btn-sm" >
            <span className="mr-2">
             <i className="fas fa-hand-paper" />
            </span>
           Mes enchères
        </button>
       </Link>

       
        <Link to="/cart" className="ml-2 ">
        <button type="button" class="btn btn-light btn-sm">
            <span className="mr-2">
             <i className="fas fa-cart-plus" />
            </span>
           Mon panier
        </button>
       
       </Link>

       

       <Link to="/login" className="ml-2 mr-2 ">
       <button type="button" class="btn btn-light btn-sm ">
            <span className="mr-2">
             <i className="fas fa-user" />
            </span>
           Se deconnecter
        </button>
       </Link>

       </ul>


         

      </NavWrapper>






     








);
}
}



const NavWrapper = styled.nav`
background:#000000;
.nav-link{
    color:var(--mainWhitee) !important;
    font-size:1.4rem
    text-transform:capitalize !important;
}

.nav-link:hover{
  color:var(--mainYellow) !important;
  font-size:1.44rem
  text-transform:capitalize !important;
}

`



export default NavBar;