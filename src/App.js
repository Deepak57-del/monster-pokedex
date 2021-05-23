import React from 'react'
import './App.css';
import { Cardlist } from './components/card-list/card-list.component'
import { SearchBox } from './components/Search-box/search-box.component'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      searchField :''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({ monster:users }))
  }
  render() {
    const { monster,searchField } = this.state;
    const filterMonster = monster.filter( monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Monsters Pokedex</h1>
        <SearchBox placeholder="search monsters" handlechange={(e)=> {this.setState({ searchField:e.target.value })}}/>
        <Cardlist monsters={filterMonster} />
      </div>
    )
  }
}
export default App;
