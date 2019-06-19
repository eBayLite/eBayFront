import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import styled from 'styled-components';

const Container = styled.div`

background-color:#ffa400;
color:black;
padding: 16px
position : absolute;
top:${props => props.top}px;
right:16px;
z-index:999;
transition: top 0.5s ease;
`;

export default class Alert extends Component {

    constructor(props){
        super(props);

        this.state ={
               top : this.props.top,
        };
    }

    
    render() {
        return (
           
           <Container top={this.state.top}>L'enchère est ajouter avec succés !</Container>
               
        )
    }
}
