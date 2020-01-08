import React, { Component } from 'react'
import articlesList from '../components/ArticlesContent';
import Article from '../components/Article'
import Notfound from './Notfound';
import { Link } from 'react-router-dom';
import './ArticlePage.css'
import axios from 'axios';

export default class ArticlePage extends Component {
  
    render() {
      const articleFound =   articlesList.find((article) => article.titre===this.props.match.params.nom); 
      const articles = articlesList.filter((article)=> article.titre!== (articleFound != null ? articleFound.titre : ''));
     // const articleVote = this.state.ArticlesVote.find((article) => article.nom===this.props.match.params.nom); 
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                    { articleFound != null ? <Article article={articleFound}></Article> : <Notfound></Notfound>}
                    </div>
                    <div className="col-md-4">
                    <div class="card other">
                <ul class="list-group list-group-flush">
                {
                    articles.map((article)=>{
                        return(
                             <div>
                                 <li class="list-group-item"><Link to={"/articles/"+article.titre}>{article.titre}</Link></li>
                             </div>
                        )
                    })
                }
                    
                </ul>
                </div>
                    </div>
            
                </div>
                
            </div>
        )
    }
}
