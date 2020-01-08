import React, { Component } from 'react'
import Article from './Article'
export default class ArticleComp extends Component {
    render() {
        return (
            <div>
                {
                    this.props.articlesList.map((article)=>{
                        return(
                            <Article article={article}></Article>
                        )
                    })
                }
            </div>
        )
    }
}