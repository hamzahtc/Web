import React, { Component } from 'react'
import '../Robot.css';

export default class Robot extends Component {
    render() {
        return (
            <div className="col-md-3">
                <div class="card " >
            <img class="card-img-top" src={this.props.image} alt="..."/>
            <div class="card-body">
                <p class="card-text">{this.props.robot.nom}</p>
            </div>
            </div>
                    
            </div>
        )
    }
}
