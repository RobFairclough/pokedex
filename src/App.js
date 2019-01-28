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
    pokemonID: '1',
    name: 'Loading...',
    sprites: {
      front_default:
        'https://upload.wikimedia.org/wikipedia/commons/2/23/Pok%C3%A9_Ball.svg'
    },
    headerLight: 'green'
  };
  getNewPokemon = id => {
    // if (!id || id < 1 || id > 802) {
    //   return Promise.reject();
    // }
    // set yellow light on header
    this.setState({ headerLight: 'yellow' });
    console.log(id);
    P.getPokemonByName(id)
      .then(pokemonResponse => {
        console.log(pokemonResponse);
        this.setState({
          pokemonID: id,
          sprites: pokemonResponse.sprites,
          headerLight: 'green',
          pokemonObj: pokemonResponse
        });

        return P.getPokemonSpeciesByName(id);
      })
      .then(speciesResponse => {
        const { flavor_text_entries, names, evolution_chain } = speciesResponse;
        this.setState({
          name: getEn(names)[0].name,
          descriptions: getEn(flavor_text_entries)
        });
        localStorage.setItem('id', this.state.pokemonID);
      })
      .catch(err => {
        // set red light on headerheader
        console.log(err);
        this.setState({
          headerLight: 'red',
          name: 'Invalid Pokemon',
          sprites: {
            front_default: 'err'
          },
          pokemonObj: {
            name: 'Invalid Pokemon',
            sprites: { front_default: 'err' }
          }
        });
      });
  };
  componentDidMount() {
    this.getNewPokemon(this.state.pokemonID);
    this.setState({ id: localStorage.getItem('id') });
  }
  render() {
    console.log('render');

    // return this.getNewPokemon(this.state.pokemonID).then(() => {
    const {
      headerLight,
      pokemonID,
      pokemonObj,
      descriptions,
      sprites,
      name
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
          headerLight={headerLight}
          descriptions={descriptions}
        />
        <InnerRight pokemonID={pokemonID} />
      </div>
    );
    // });
  }
}

export default App;
