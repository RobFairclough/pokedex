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
      // this.setState({ id: newId });
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
        <shape id="prev" onClick={() => this.handleChangeButton(false)} />
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            id="num-selector"
            value={this.state.id}
            onChange={this.handleChange}
          />
        </form>
        <shape id="next" onClick={() => this.handleChangeButton(true)} />
      </div>
    );
  }
}

export default Controls;
