import React, { Component } from 'react'
import { Link} from "react-router-dom";
export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-info">
                <span class="navbar-brand" >Blog</span>
               
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                              <Link class="nav-link" to="/" >Home</Link>
                    </li>
                    <li class="nav-item">
                              <Link class="nav-link" to="/about" >About</Link>
                    </li> 
                    <li class="nav-item">
                              <Link class="nav-link" to="/articles">Articles</Link>
                    </li>
                    </ul>
                </div>
                </nav>

            </div>
        )
    }
}
