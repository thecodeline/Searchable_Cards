import { Component } from 'react'
import React from 'react'
import { ReactDOM } from 'react'
import CardList from './components/card-list/card-list-component';
import SearchBox from './components/search-box/search-box-component';

class App extends Component {
  constructor(){
    super();
    this.state={
      monsters:[],
      searchField:'',
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json()).then((users)=>this.setState(()=>{
      return {monsters: users};
    },()=>{
      console.log(this.state);
    }));
  }
  onSearchChange = (event)=>{
    const searchField= event.target.value.toLocaleLowerCase();

    this.setState(()=>{
      return {searchField}
    })
  }
render(){
  var filteredmonsters = this.state.monsters.filter((monster)=>{
    return monster.name.toLocaleLowerCase().includes(this.state.searchField)
   });

  return (
    
    <div>
      <SearchBox onChangeHandler={this.onSearchChange} placeholder="Search Monsters" className="monsters-search-box"/>
    {/* {
    filteredmonsters.map((monster)=>{
return(<h1 key={monster.id}>{monster.name}</h1>)
    })
    }  */}
    <CardList monsters={filteredmonsters}/>

    </div>
  )
}
}

export default App;
