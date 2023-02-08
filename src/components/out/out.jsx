import React from 'react';
import ReactDOM from 'react-dom/client';
import { Component } from "react";

class Out extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        brand: "Ford",
        model: "Mustang",
        color: "red",
        year: 1964
      };
    }
    changeColor = () => {
        const colors=['red','blue','green','yellow','white'];
        const random = Math.floor(Math.random() * colors.length);
      this.setState({color: colors[random]});
    }
    
    pingo= ()=>{
     alert('Now my color is '+this.state.color);
    }
    render(){

return(<div>

  <h1 className={`${this.state.color}`+"-text"} onClick={this.pingo}>I always change my color</h1>
  <button
          type="button"
          onClick={this.changeColor}
        >Change color</button>
</div>);
    }
}
export default Out;