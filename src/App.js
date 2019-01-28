import React, { Component } from 'react';
import OuterCase from './components/OuterCase';
import InnerLeft from './components/InnerLeft';
import InnerRight from './components/InnerRight';
import './css/App.css';
const Pokedex = require('pokedex-promise-v2');
const P = new Pokedex();
let initialise;
P.getPokemonByName(1).then(res => (initialise = res));
class App extends Component {
  state = {
    pokemonID: 1,
    pokemonObj: initialise,
    headerLight: 'green'
  };
  getNewPokemon = id => {
    // set yellow light on header
    P.getPokemonByName(id)
      .then(res => {
        // set green light on header
        // pokemon object
        console.log(res);
        this.setState({ pokemonID: id, pokemonObj: res });
      })
      .catch(err => {
        // set red light on headerheader
      });
  };
  render() {
    return this.getNewPokemon(this.state.pokemonID).then(() => {
      const { headerLight, pokemonID, pokemonObj } = this.state;
      return (
        <div className="App">
          <OuterCase getNewPokemon={this.getNewPokemon} />
          <InnerLeft
            pokemonID={pokemonID}
            pokemonObj={pokemonObj}
            headerLight={headerLight}
          />
          <InnerRight pokemonID={pokemonID} />
        </div>
      );
    });
  }
}

export default App;
