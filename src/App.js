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
    headerLight: 'red',
    view: {
      frontBack: 'front',
      shiny: 'default'
    },
    sprites: '',
    stats: '',
    descriptions: '',
    types: '',
    genus: '',
    height: '',
    weight: '',
    habitat: ''
  };
  baseState = { ...this.state };
  getNewPokemon = async id => {
    localStorage.setItem('id', id);
    this.setState({
      ...this.baseState,
      headerLight: 'yellow',
      name: 'loading...',
      descriptions: [{ flavor_text: 'finding Pokémon...' }]
    });
    try {
      const pokemon = await P.getPokemonByName(id);
      const species = await P.getPokemonSpeciesByName(id);
      console.log(pokemon);
      console.log(species);
      const { sprites, height, weight, types, stats } = pokemon;
      const { flavor_text_entries, names, genera, habitat } = species;
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
        headerLight: 'green',
        habitat
      });
    } catch (err) {
      this.setState(this.baseState);
    }
  };
  componentDidMount() {
    const id = localStorage.getItem('id') || this.state.pokemonID || 1;
    this.getNewPokemon(id);
    if (localStorage.getItem('id'))
      this.setState({ pokemonID: localStorage.getItem('id') });
  }

  toggleView = criteria => {
    this.setState(prevState => ({
      view: {
        ...prevState.view,
        [criteria]:
          criteria === 'shiny'
            ? prevState.view.shiny === 'shiny'
              ? 'default'
              : 'shiny'
            : prevState.view.frontBack === 'front'
            ? 'back'
            : 'front'
      }
    }));
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
      habitat,
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
        <InnerRight
          pokemonID={pokemonID}
          stats={stats}
          types={types}
          habitat={habitat}
        />
      </div>
    );
  }
}

export default App;
