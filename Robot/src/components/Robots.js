import React, { Component } from 'react'
import Robot from './Robot'
import '../Robot.css';

export default class Robots extends Component {
  state={
    robots:[
      {
        nom : "Hasna",
        prenom : "Lahchiouach",
        email : "hasnalahchiouach@gmail.com",
        image : "https://robohash.org/"+Math.floor(Math.random() * 100)
      },
      {
       nom : "Hamza",
       prenom : "Hatoch",
       email : "hamzahatoch04@gmail.com",
       image : "https://robohash.org/"+Math.floor(Math.random() * 100)
     },
      {
        nom : "Amine",
        prenom : "Toto",
        email : "hamzahatoch04@gmail.com",
        image : "https://robohash.org/"+Math.floor(Math.random() * 100)

      },
      {
        nom : "Oussama",
        prenom : "draganov",
        email : "hamzahatoch04@gmail.com",
        image : "https://robohash.org/"+Math.floor(Math.random() * 100)

      },
      {
        nom : "Soukaina",
        prenom : "Soukaina",
        email : "hamzahatoch04@gmail.com",
        image : "https://robohash.org/"+Math.floor(Math.random() * 100)

      },
      {
        nom : "Hafsa",
        prenom : "Hafsa",
        email : "hamzahatoch04@gmail.com",
        image : "https://robohash.org/"+Math.floor(Math.random() * 100)

      },
      {
        nom : "Ibrahim",
        prenom : "ovic",
        email : "hamzahatoch04@gmail.com",
        image : "https://robohash.org/"+Math.floor(Math.random() * 100)

      }
    ],
    robotsfiltred : []
  }
  componentDidMount() {
      this.setState({ robotsfiltred : this.state.robots})
  }
  rechercher = async(e) =>{
    this.setState({robotsfiltred : this.state.robots.filter((robot)=>
      robot.nom.includes(e.target.value))})
 }

        
    
  
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-primary ">
        <span class="navbar-brand mb-0 h1">Robot</span>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" 
           
          type="search" 
          placeholder="Search" 
          aria-label="Search" 
          onChange={this.rechercher}/>
        </form>
        </nav>
        <div className="container">
          <div className="row">
          {this.state.robotsfiltred.map((robot,key)=>{
                    return(
                        <Robot key={key} robot={robot} image={robot.image}></Robot>
                    );
                })}
          </div>
       
        </div>
       
             
        </div>
    )
  }
}
