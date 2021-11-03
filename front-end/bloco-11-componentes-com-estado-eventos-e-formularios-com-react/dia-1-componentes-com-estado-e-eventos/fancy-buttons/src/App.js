import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.clickButton = this.clickButton.bind(this);
    this.clickButtonX2 = this.clickButtonX2.bind(this);
    this.clickButtonX5 = this.clickButtonX5.bind(this);
    this.state = {
      numeroDeCliques: 0,
      numeroDeCliquesX2: 0,
      numeroDeCliquesX5: 0,
    };
  }

  clickButton() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1, 
    }
    ))
  }

  clickButtonX2() {
    this.setState((estadoAnteriorX2, _props) => ({
      numeroDeCliquesX2: estadoAnteriorX2.numeroDeCliquesX2 + 2, 
    }))
  }

  clickButtonX5() {
    this.setState((estadoAnteriorX5, _props) => ({
      numeroDeCliquesX5: estadoAnteriorX5.numeroDeCliquesX5 + 5, 
    }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button className="one-click" onClick={this.clickButton}>Numero de cliques = {this.state.numeroDeCliques}</button>
          <button onClick={this.clickButtonX2}>Cliques x2 = {this.state.numeroDeCliquesX2}</button>
          <button onClick={this.clickButtonX5}>Cliques x5 = {this.state.numeroDeCliquesX5}</button>
        </header>
      </div>
    );
  }
}

export default App;
