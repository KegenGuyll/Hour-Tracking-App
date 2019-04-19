import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import BottomNavigation from './components/Navigation/BottomNavigation';
import { Settings } from './components/Settings';
import { Layout } from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <BottomNavigation>
            <Layout>
              <Switch>
                <Route path='/' exact render={() => <Home />} />
              </Switch>
              <Settings />
            </Layout>
          </BottomNavigation>
        </Router>
      </div>
    );
  }
}

export default App;
