import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import { Home } from './Home';
import { About } from './About.js';
import { NoMatch } from './NoMatch';
import Header from './Header.js';
import Sidebar from './SideBar.js';

function App() {
  return (
    <React.Fragment>
      <Router> 
        <Header/>
        <Sidebar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={NoMatch} />
        </Switch> 
      </Router>
    </React.Fragment>
  );
}

export default App;
