import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePageContainer from './pages/home-page/home-page.container';
import LoginContainer from './components/login/login.container';
class App extends Component {

  render() {
    return (
      <main>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePageContainer} />
            <Route path="/login" component={LoginContainer} />
          </Switch>  
        </Router>  
      </main>
    )
  }
}

export default App;