import React, { Component } from 'react';
import InnerLeft from './components/InnerLeft';
import InnerRight from './components/InnerRight';
import { getEn } from './utils';
import './css/App.css';
import Divider from './components/Divider';

const Pokedex = require('pokedex-promise-v2');
const options = {
  protocol: 'https'
};
const P = new Pokedex(options);

class App extends Component {
  state = {
    pokemonID: localStorage.id ? localStorage.id : 1,
    name: '',
    headerLight: 'yellow',
    view: {
      frontBack: 'front',
      shiny: 'default'
    }
  };
  pokemonResponse = {};
  getNewPokemon = id => {
    console.log('req', id);
    localStorage.setItem('id', id);
    this.setState({ headerLight: 'yellow' });
    P.getPokemonByName(id)
      .then(response => {
        this.pokemonResponse = response;
        return P.getPokemonSpeciesByName(id);
      })
      .then(speciesResponse => {
        const { flavor_text_entries, names, genera } = speciesResponse;
        const { sprites, height, weight, types, stats } = this.pokemonResponse;
        console.dir(sprites);
        this.setState({
          sprites,
          height,
          weight,
          pokemonID: id,
          name: getEn(names)[0].name,
          descriptions: getEn(flavor_text_entries),
          genus: getEn(genera)[0].genus,
          view: { frontBack: 'front', shiny: 'default' },
          types: types.map(({ type }) => type.name),
          stats,
          headerLight: 'green'
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          pokemonID: '',
          name: '',
          headerLight: 'red'
        });
      });
  };
  componentDidMount() {
    this.getNewPokemon(this.state.pokemonID);
    if (localStorage.getItem('id'))
      this.setState({ pokemonID: localStorage.getItem('id') });
  }

  toggleView = criteria => {
    this.setState({
      view: {
        ...this.state.view,
        [criteria]:
          criteria === 'shiny'
            ? this.state.view.shiny === 'shiny'
              ? 'default'
              : 'shiny'
            : this.state.view.frontBack === 'front'
            ? 'back'
            : 'front'
      }
    });
  };
  render() {
    const {
      pokemonID,
      pokemonObj,
      descriptions,
      sprites,
      name,
      genus,
      height,
      weight,
      types,
      view,
      stats,
      headerLight
    } = this.state;
    return (
      <div className="App">
        {/* <OuterCase getNewPokemon={this.getNewPokemon} /> */}
        <InnerLeft
          getNewPokemon={this.getNewPokemon}
          pokemonID={pokemonID}
          name={name}
          id={pokemonID}
          pokemonObj={pokemonObj}
          sprites={sprites}
          headerLight={headerLight}
          descriptions={descriptions}
          genus={genus}
          height={height}
          weight={weight}
          types={types}
          toggleView={this.toggleView}
          view={view}
        />
        <Divider />
        <InnerRight pokemonID={pokemonID} stats={stats} types={types} />
      </div>
    );
  }
}

export default App;
