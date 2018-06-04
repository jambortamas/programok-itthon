import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';
import Heloer from '../helpers';

class App extends React.Component {

  render() {
    return (
      <div className="container">
        <Header h1text="Események idehaza"/>
        <Hero />
        <Footer />
      </div>
    );
  }
}

export default App;