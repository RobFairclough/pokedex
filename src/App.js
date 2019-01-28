import React, { Component } from 'react';
import OuterCase from './components/OuterCase';
import InnerLeft from './components/InnerLeft';
import InnerRight from './components/InnerRight';
import { getEn } from './utils';
import './css/App.css';

const Pokedex = require('pokedex-promise-v2');
const P = new Pokedex();

class App extends Component {
  state = {
    pokemonID: localStorage.getItem('id') || 1,
    name: ''
  };
  headerLight = 'green';
  pokemonResponse = {};
  getNewPokemon = id => {
    this.headerLight = 'yellow';
    P.getPokemonByName(id)
      .then(response => {
        this.pokemonResponse = response;
        this.headerLight = 'green';
        return P.getPokemonSpeciesByName(id);
      })
      .then(speciesResponse => {
        const { flavor_text_entries, names, evolution_chain } = speciesResponse;
        this.setState({
          pokemonID: id,
          sprites: this.pokemonResponse.sprites,
          pokemonObj: this.pokemonResponse,
          name: getEn(names)[0].name,
          descriptions: getEn(flavor_text_entries)
        });
        localStorage.setItem('id', this.state.pokemonID);
      })
      .catch(err => {
        // set red light on headerheader
        console.log(err);
        this.setState({
          name: 'Invalid Pokemon',
          sprites: {
            front_default: 'err'
          },
          pokemonObj: {
            name: 'Invalid Pokemon',
            sprites: { front_default: 'err' }
          }
        });
        this.headerLight = 'red';
      });
  };
  componentDidMount() {
    this.getNewPokemon(this.state.pokemonID);
    if (localStorage.getItem('id'))
      this.setState({ pokemonID: localStorage.getItem('id') });
  }
  render() {
    console.log('render');
    const { pokemonID, pokemonObj, descriptions, sprites, name } = this.state;
    return (
      <div className="App">
        <OuterCase getNewPokemon={this.getNewPokemon} />
        <InnerLeft
          getNewPokemon={this.getNewPokemon}
          pokemonID={pokemonID}
          name={name}
          id={pokemonID}
          pokemonObj={pokemonObj}
          sprites={sprites}
          headerLight={this.headerLight}
          descriptions={descriptions}
        />
        <InnerRight pokemonID={pokemonID} />
      </div>
    );
    // });
  }
}

export default App;
