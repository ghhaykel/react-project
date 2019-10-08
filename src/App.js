import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

import Index from './Components/Index';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
        <Route exact path='/' component={Index} />
        <Route path ='/contact' component ={Contact} />
        </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
