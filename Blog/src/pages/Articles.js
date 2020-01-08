import React, { Component } from 'react'
import articlesList from '../components/ArticlesContent';
import { Link } from 'react-router-dom';
import './Articles.css'
export default class Articles extends Component {
    render() {
        return (
            <div className="container">
               
                <div className="row">
               {
                   articlesList.map((article)=>{
                       return(
                            
                               
                                <div class="card col-md-3">
                                <img src={article.image} height="200px" width="270px" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">{article.nom}</h5>
                     <p class="card-text">
                         {article.paragraphe[0].substring(0, 50)}<Link to={"/articles/"+article.titre}>  ... </Link>
                         </p>
                                    
                               
                                </div>
                                </div>
                                
                       )
                   })
               }  
               </div>          
            </div>
        )
    }
}