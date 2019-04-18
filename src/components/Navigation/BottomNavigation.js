import React, { Component } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { Home, Add, Settings } from '@material-ui/icons';
import { withRouter } from 'react-router-dom';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };
  handleRoute = route => {
    this.props.history.push(route);
  };
  render() {
    const { value } = this.state;
    return (
      <div>
        <div>{this.props.children}</div>

        <BottomNavigation
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: '60px',
            boxShadow: '0px -7px 36px -19px rgba(48,48,48,0.41)'
          }}
          value={value}
          onChange={this.handleChange}
          showLabels
        >
          <BottomNavigationAction
            onClick={() => this.handleRoute('/')}
            style={{ color: 'black' }}
            icon={<Home style={{ fontSize: '35px' }} />}
          />

          <BottomNavigationAction
            onClick={() => this.handleRoute('/add')}
            style={{ color: 'black' }}
            icon={<Add style={{ fontSize: '35px' }} />}
          />
          <BottomNavigationAction
            onClick={() => this.handleRoute('/settings')}
            style={{ color: 'black' }}
            icon={<Settings style={{ fontSize: '30px' }} />}
          />
        </BottomNavigation>
      </div>
    );
  }
}

export default withRouter(Navigation);
