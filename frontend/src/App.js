import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ClientEdit from "./ClientEdit";
import ClientList from './ClientList';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home} />
          <Route path='/clients' exact={true} component={ClientList} />
          <Route path='/clients/:id' component={ClientEdit} />
        </Switch>
      </Router>
    )
  }
}

export default App;