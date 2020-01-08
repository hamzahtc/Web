import React, { Component } from 'react'

export default class Personne extends Component {
    render() {
        return (
            <div>
    <h1>{this.props.ism.nom}</h1><h1>{this.props.ism.prenom}</h1> <h1>{this.props.ism.age}</h1>
    <img src={"https://robohash.org/"+this.props.str}></img>
            </div>
        )
    }
}
