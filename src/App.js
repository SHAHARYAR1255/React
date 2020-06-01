import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';


class App extends Component {
    render() {
    return (
      <div>
      <Header></Header>
      <Main />
      <Footer />
    </div>
    )
  }
}

export default App;
