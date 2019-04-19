import React, { useState } from 'react';
import {
  SwipeableDrawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  List
} from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';
import firebase from 'firebase';

export const Settings = props => {
  let [swipe, setSwipe] = useState(false);

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const signout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {});
  };

  const toggleDrawer = open => () => {
    setSwipe((swipe = !open));
  };

  return (
    <SwipeableDrawer
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      anchor='right'
      open={swipe}
      onClose={toggleDrawer(true)}
      onOpen={toggleDrawer(false)}
    >
      <List>
        <ListItem onClick={signout}>
          <ListItemIcon>
            <ExitToApp />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </ListItem>
      </List>
    </SwipeableDrawer>
  );
};
