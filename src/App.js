import React, { Component } from 'react';
import logo from './wwf-logo.png';
import Section from './Section.js'
import Footer from './Footer.js';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <header>
          <a className="i-need-a-money">Faire un don</a>
          <a className="back-to-frise">Back to frise</a>
        </header>
        <div className="image-d-accueil"></div>
        <Section></Section>
        <Footer></Footer>

      </div>
    );
  }
}

export default App;
