import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            nom: '',
            prenom: '',
            email: ''
        }
    }

    componentDidMount () {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            nom: decoded.nom,
            prenom: decoded.prenom,
            email: decoded.email,
            encheres: decoded.encheres
        })
    }

    render () {
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">Mes informations personnelles</h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                            <tr>
                                <td>Nom</td>
                                <td>{this.state.nom}</td>
                            </tr>
                            <tr>
                                <td>Prenom</td>
                                <td>{this.state.prenom}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{this.state.email}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">Mes ventes</h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                        <tr>
                            <td>Enchere:</td>
                            <td>{this.state.encheres}</td>
                        </tr>
                    </tbody>
                    </table>
                </div>

                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">Mes enchères</h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}

export default Profile