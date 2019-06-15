import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom';
import axios from 'axios';
import { list } from './EnchereFunctions';

class ListEnch extends Component{

    state = {
        items: []
    }

    componentDidMount(){
        fetch('/encheres/listench')
        .then(res => res.json())
        .then(items => this.setState({items}));
    }
    

render () {

    return (

        <div> 
            <h1>bonjour</h1>
            <p>{this.name.response}</p>

        </div>


/*
<h3><a class="btn btn-secondary" href="/CartE"><i class="fa fa-plus"></i> Create New</a> Employee List</h3>
<table class="table table-striped">
    <thead>
        <tr>
            <th>titleE</th>
            <th>priceE</th>
            <th>incE</th>
            <th>companyE</th>
            <th>infoE</th>
            <th>inPanE</th>

        </tr>
    </thead>
    <tbody>
        {{#each list}}
        <tr>
            <td>{{this.value.titleE}}</td>
            <td>{{this.priceE}}</td>
            <td>{{this.incE}}</td>
            <td>{{this.companyE}}</td>
            <td>{{this.infoE}}</td>
            <td>{{this.inPanE}}</td>
            <td>
                <a href="/employee/{{this._id}}"><i class="fa fa-pencil fa-lg" aria-hidden="true"></i></a>
                <a href="/employee/delete/{{this._id}}" onclick="return confirm('Are you sure to delete this record ?');"><i class="fa fa-trash fa-lg" aria-hidden="true"></i></a>
            </td>
        </tr>
        {{/each}}
    </tbody>
    </table>
*/
    
    )

}

}

export default ListEnch