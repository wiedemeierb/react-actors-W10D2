import React, { Component } from 'react';
import './App.css';
import Header from './Header.js/Header';
import About from './About.js/About';
import Contact from './Contact.js/Contact';
import Footer from './Footer.js/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
