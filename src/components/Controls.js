import React, { Component } from 'react';
import '../css/Controls.css';

class Controls extends Component {
  state = {
    id: this.props.id
  };
  handleChangeButton = direction => {
    const { id } = this.state;
    const newId = direction ? +id + 1 : +id - 1;
    if (newId && newId > 0 && newId <= 802) {
      this.props.getNewPokemon(newId);
      this.setState({ id: newId });
    }
  };
  handleChange = e => {
    const newId = e.target.value;
    e.target.value = newId;
    if (newId && newId > 0 && newId <= 802) {
      this.props.getNewPokemon(newId);
      this.setState({ id: newId });
    }
  };
  render() {
    return (
      <div className="pokedex-controls">
        <shape id="prev" onClick={() => this.handleChangeButton(false)} />
        <input
          type="number"
          id="num-selector"
          value={this.state.id}
          onChange={this.handleChange}
        />
        <shape id="next" onClick={() => this.handleChangeButton(true)} />
      </div>
    );
  }
}

export default Controls;
