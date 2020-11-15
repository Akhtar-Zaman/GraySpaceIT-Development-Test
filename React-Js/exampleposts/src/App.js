import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import User_Details from './User-Details';
import Posts from './Posts';
import Posts_Details from './Post-Details';
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Switch>
          <Route path='/' exact component={User_Details} />
          <Route path='/Login' component={Login} />
          <Route path='/Register' component={Register} />
          <Route path='/posts' component={Posts} />
          <Route path='/1' component={Posts_Details} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
