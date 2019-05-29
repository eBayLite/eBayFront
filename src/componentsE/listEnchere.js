import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import axios from 'axios';


const Enchere = props =>(

    <tr>
        <td>{props.enchere.titleE}</td>
        <td>{props.enchere.incE}</td>
        <td>{props.enchere.inPanE}</td>
        <td>{props.enchere.priceE}</td>
        <td>{props.enchere.infoE}</td>
        <td>{props.enchere.companyE}</td>
        <td>{props.enchere.imgE}</td>
        <td>{props.enchere.date}</td>
        <td>{props.enchere.endDate}</td>
        <td>{props.enchere.stateE}</td>
        
    </tr>
)

export default class listEnchere extends Component {

    constructor(props){
        super(props);
        this.state={
            encheres:[]
        };
    }

    componentDidMount(){
       
        fetch('encheres/listench')
        .then((Response) => Response.json())
        .then((findresponse) => 
        {
            console.log(findresponse.encheres);
            this.setState({encheres: findresponse.encheres});
        });

        /*this.interval = x;

        var x = setInterval(function() {

            //--------------------------
             // Get todays date and time
             var now = Date.now();
            // Set the date we're counting down to
            var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();
             // Find the distance between now and the count down date
              var distance = countDownDate - now;
              ---------------------------
              
            
            var actualTime = new Date(Date.now());
            console.log(actualTime);
            var endOfDay = new Date(actualTime.getFullYear(), actualTime.getMonth(), actualTime.getDate() + 1, 0, 0, 0);
            var timeRemaining = endOfDay.getTime() - actualTime.getTime();
             
                  
              // Time calculations for days, hours, minutes and seconds
              //var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
              var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
              var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
                
                
              //console.log("d:"+days+ " h:"+hours " m:"+minutes " s:"+seconds);  
              // Output the result in an element with id="demo"
              document.getElementById("demo").innerHTML = hours + "h "
              + minutes + "m " + seconds + "s ";
               
            }, 1000); */
       
        /*
        axios.get('http://localhost:4000/EbayDB/')
        .then(Response => {
            this.setState({encheres: Response.data});
        })
        .catch(function(error){

            console.log(error);
        })*/
        
    }
    
    enchereList() {
        return this.state.encheres.map(function(currentEnchere, i) {
            return <Enchere enchere={currentEnchere} key={i} />
        });
    }
    

    componentWillUnmount(){
        clearInterval(this.interval);
    }

  render() { 
    return (
      <div>
        <h3 className="text-center mt-5 mb-5">La liste des enchères</h3>
        <table className="table table-striped col-md-12 ml-auto" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Nom du produit</th>
                            <th>Limite prix</th>
                            <th>Est dans un panier</th>
                            <th>Prix de départ</th>
                            <th>Description produit</th>
                            <th>Contact</th>
                            <th>Image</th>
                            <th>Date</th>
                            <th>Temps restant <span id="demo"></span></th>
                        </tr>
                    </thead>
                    <tbody className="col-md-12">
                        { this.enchereList() }
                    </tbody>
                </table>
      </div>
    )
  }
}
