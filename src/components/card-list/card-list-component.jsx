import { Component } from "react";
import Card from "./card";
import './card-list.styles.css';
import './card.styles.css';

class CardList extends Component{
render(){
    const {monsters} = this.props;
 
    return(
    <div className="card-list">
       {monsters.map((monster)=>{
        const {name,email,id} = monster;
        return(
            
      
        <Card monster={monster}/>
 
       )})
       }
    </div>);
}
}
export default CardList;