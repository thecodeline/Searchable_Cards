import React from "react"; 
import { Component } from "react";
 class Card extends Component{
 


    
           render(){
            const {name,email,id} = this.props.monster;
            return(
                <div key={id}  className="card-container">
        <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2*size=180x180`}/>
         <h2 >{name}</h2>
          <p>{email}</p>
                </div>
            );
    }
    


 }
 export default Card;