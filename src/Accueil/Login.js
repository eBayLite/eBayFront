import React, { Component } from 'react'
import { login } from './UserFunctions'
import {Link} from 'react-router-dom'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit (e) {
        e.preventDefault()

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        login(user).then(res => {
            if (res) {
                if(localStorage.usertoken){
                this.props.history.push(`/profile`)}
                else if(localStorage.admintoken){
                this.props.history.push(`/profileAdmin`)}
            }
        })
    }

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-5 font-weight-normal">Connectez vous</h1>



                            <div className="form-group col-md-6 mt-5">
                                <label htmlFor="email">Email</label>
                                <input type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="E-mail"
                                    value={this.state.email}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group col-md-6 mt-5">
                                <label htmlFor="password">Mot de passe</label>
                                <input type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Mot de passe"
                                    value={this.state.password}
                                    onChange={this.onChange} />
                            </div>
                            <div className="createAccount">
                            

                              <button type="submit">Authentification</button>

                             
                                
                                <Link to="/reinit">
                                Mot de pass oublié ?
                                </Link>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login