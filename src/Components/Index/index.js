import React, { Component } from 'react';
 

import Home from './../Home';
import About from './../About';
import Footer from './../Footer';
import Work from './../Work';
import Profile from './../Profile';
import Portfolio from './../Portfolio';
import SocialMedia from './../SocialMedia';


class Index extends Component {
  render() {
    return (
      <div className="Index">
        
        <Home />
        <Work />
        <Portfolio />
        <Profile />
        <About />
        <SocialMedia />
        <Footer /> 
      </div>
    );
  }
}

export default Index;