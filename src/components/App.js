import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../App.css';
import calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (btnName) => {
    const { total, next, operation } = this.state;
    this.setState(calculate({ total, next, operation }, btnName));
  };

  render() {
    const { total } = this.state;
    return (
      <div className="app">
        <Display result={total === null ? 0 : total} />
        <ButtonPanel handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
