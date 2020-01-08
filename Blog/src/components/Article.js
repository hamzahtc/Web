import React, { Component } from 'react'

export default class Article extends Component {
    render() {
        return (
            <div >
 
                <div class="card text-left">
              <img class="card-img-top" src={this.props.article.image} height="400px" width="200px" alt='...'/>
              <div class="card-body">
                <h4 class="card-title">{this.props.article.nom}</h4>
                
                <div class="card-text">{this.props.article.paragraphe.map((para)=>{
                return(
                <p>{para}</p>
                )
            })
            }</div>
              </div>
            </div>
            </div>
        )
    }
}
