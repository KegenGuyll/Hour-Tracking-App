import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { TopNavigation } from './components/Navigation/TopNavigation';
import { Layout } from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <TopNavigation>
            <Layout>
              <Switch>
                <Route path='/' exact render={() => <Home />} />
              </Switch>
            </Layout>
          </TopNavigation>
        </Router>
      </div>
    );
  }
}

export default App;
