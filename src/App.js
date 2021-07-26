import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { Searchbox } from './components/search-box/search-box.component';

//import logo from './logo.svg';
import './App.css';
import { USERWHITESPACABLE_TYPES } from '@babel/types';

class App extends Component{
  constructor(){
    super();
    
    this.state = {
      monster: [],
      searchfield:''
    };

    this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monster:users}))
  }

  handleChange = (e) => {
    this.setState({ searchfield: e.target.value})
  }

  render(){

    const {monster, searchfield} = this.state;

    const filteredMonster = monster.filter(monster => 
        monster.name.toLowerCase().includes(searchfield.toLowerCase())
      )

    const searchfile = this.state.searchfield;
    
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
          <Searchbox placeholder='Search monster with ...' handleChange={this.handleChange}/>
          <CardList monster={filteredMonster}/>
      </div>
    );
  }

}



export default App;
