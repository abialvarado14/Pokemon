import React, { Component } from 'react';
import Home from './component/Home/Home';
import DetallePokemon from './component/DetallePokemon/DetallePokemon';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component{

  render(){
    return(
      <Router>
        <Route exact path="/DetallePokemon/:id" component={DetallePokemon}></Route>
        <Route exact path="/" component={Home}></Route>
      </Router>  
    )
  }
}

export default App;
