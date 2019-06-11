import React, {Component} from 'react';



class Timer extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        seconds :this.props.second,
        heurs :this.props.heur,
        minutes :this.props.minute,
        color:this.props.color,
        message:this.props.message,
        messageE:this.props.messageE
        
          };

    }





  
tick() {
   if((this.state.seconds === 0)&&(this.state.minutes === 0)&&(this.state.heurs === 0)){
        this.setState(state=>({
             minutes : state.minutes - 0,
             seconds : state.seconds - 0,
             heurs: state.heurs - 0
        }));
 }
 else{
       if(this.state.seconds === 0){
         if(this.state.minutes === 0){
                this.setState(state=>({
                  minutes : state.minutes  +59,
                  seconds : state.seconds +59,
                  heurs : state.heurs - 1
             }));
            }
              else{
                this.setState(state=>({
                  minutes : state.minutes  -1,
                  seconds : state.seconds +59
                }));
              
              }

       }else{
            this.setState(state=>({
            seconds : state.seconds -1
          
     }));
       }
}
}

    componentDidMount() {
      this.interval = setInterval(() => this.tick(), 1000);
      }

    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    render() {
      return (
        <div>
        <div className={this.state.color}>

          <h6>Termine dans: {this.state.heurs} h et {this.state.minutes} min et {this.state.seconds} sec {this.state.messageE}  
          </h6>
         
        
        </div>

        <div className="messageEF">
          <h5>{this.state.message}</h5>
        </div>

        </div>
      );
    }
  }

  export default Timer;