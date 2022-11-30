import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      clicaBtn1: 0,
      clicaBtn2: 0,
      clicaBtn3: 0,
    };
  }

  getButtonColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  exibeConsole1 = () => {
    const { clicaBtn1 } = this.state;
    this.setState((prevState) => ({
      clicaBtn1: prevState.clicaBtn1 + 1,
    }), () => {
      console.log(`Botao 1 ${this.getButtonColor(clicaBtn1)}`);
    });
  };

  exibeConsole2 = () => {
    const { clicaBtn2 } = this.state;
    this.setState((prevState) => ({
      clicaBtn2: prevState.clicaBtn2 + 1,
    }), () => {
      console.log(`Botao 2 ${this.getButtonColor(clicaBtn2)}`);
    })
  };
  exibeConsole3 = () => {
    const { clicaBtn3 } = this.state;
    this.setState((prevState) => ({
      clicaBtn3: prevState.clicaBtn3 + 1,
    }), () => {
      console.log(`Botao 3 ${this.getButtonColor(clicaBtn3)}`);
    })
  };

  render() {
    return (
      <div>
        <button onClick={this.exibeConsole1}>{this.state.clicaBtn1}</button>
        <button onClick={this.exibeConsole2}>botao2</button>
        <button onClick={this.exibeConsole3}>botao3</button>
      </div>
    );
  }
}

export default App;
