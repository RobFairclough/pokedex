import React, { Component } from 'react';
import '../css/Controls.css';

class Controls extends Component {
  state = {
    id: this.props.id
  };
  handleChangeButton = direction => {
    console.log('click');
    const { id } = this.state;
    const { getNewPokemon } = this.props;
    const newId = +id + direction;
    if (newId && newId > 0 && newId <= 805) {
      getNewPokemon(newId);
      this.setState({ id: newId });
    }
  };
  handleChange = e => {
    const newId = e.target.value;
    this.setState({ id: newId });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { id } = this.state;
    const { getNewPokemon } = this.props;
    getNewPokemon(+id);
  };
  render() {
    return (
      <div className="pokedex-controls">
        <span id="prev" onClick={() => this.handleChangeButton(-1)} />
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            id="num-selector"
            value={this.state.id}
            onChange={this.handleChange}
          />
        </form>
        <span id="next" onClick={() => this.handleChangeButton(1)} />
      </div>
    );
  }
}

export default Controls;
