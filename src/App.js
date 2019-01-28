import React, { Component } from 'react';
import OuterCase from './components/OuterCase';
import InnerLeft from './components/InnerLeft';
import InnerRight from './components/InnerRight';

import './css/App.css';

const Pokedex = require('pokedex-promise-v2');
const P = new Pokedex();

class App extends Component {
  state = {
    pokemonID: 251,
    pokemonObj: {
      name: 'Loading...',
      sprites: {
        front_default:
          'https://upload.wikimedia.org/wikipedia/commons/2/23/Pok%C3%A9_Ball.svg'
      }
    },
    headerLight: 'green'
  };
  getNewPokemon = id => {
    // set yellow light on header
    this.setState({ headerLight: 'yellow' });
    P.getPokemonByName(id)
      .then(res => {
        // set green light on header
        // pokemon object
        this.setState({ headerLight: 'green', pokemonObj: res });
      })
      .catch(err => {
        // set red light on headerheader
        console.log(err);
        this.setState({
          headerLight: 'red',
          pokemonObj: {
            name: 'Invalid Pokemon',
            sprites: { front_default: 'err' }
          }
        });
      });
  };
  componentDidMount() {
    this.getNewPokemon(this.state.pokemonID);
  }
  render() {
    console.log('render');
    console.dir(this.state.pokemonObj);
    // return this.getNewPokemon(this.state.pokemonID).then(() => {
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
    // });
  }
}

export default App;
