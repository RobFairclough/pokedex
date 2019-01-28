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
        console.log(response);
        this.pokemonResponse = response;
        this.headerLight = 'green';
        return P.getPokemonSpeciesByName(id);
      })
      .then(speciesResponse => {
        const { flavor_text_entries, names, genera } = speciesResponse;
        const { sprites, height, weight, types } = this.pokemonResponse;
        this.setState({
          sprites,
          height,
          weight,
          pokemonID: id,
          name: getEn(names)[0].name,
          descriptions: getEn(flavor_text_entries),
          genus: getEn(genera)[0].genus
        });
        localStorage.setItem('id', this.state.pokemonID);
      })
      .catch(err => {
        console.log(err);
        this.setState({
          pokemonID: '',
          name: ''
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
    const {
      pokemonID,
      pokemonObj,
      descriptions,
      sprites,
      name,
      genus,
      height,
      weight,
      type
    } = this.state;
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
          genus={genus}
          height={height}
          weight={weight}
          type={type}
        />
        <InnerRight pokemonID={pokemonID} />
      </div>
    );
  }
}

export default App;
