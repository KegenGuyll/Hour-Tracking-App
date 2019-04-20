import React, { useState, useImperativeHandle, forwardRef } from 'react';
import {
  SwipeableDrawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  List
} from '@material-ui/core';
import { ExitToApp, AccountCircleRounded } from '@material-ui/icons';
import firebase from 'firebase';

export const Settings = forwardRef((props, ref) => {
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

  useImperativeHandle(ref, () => ({
    activeSettings() {
      const toggle = () => {
        setSwipe((swipe = true));
      };
      toggle();
    }
  }));

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
        <ListItem>
          <ListItemIcon>
            <AccountCircleRounded />
          </ListItemIcon>
          <ListItemText>Profile</ListItemText>
        </ListItem>
        <ListItem onClick={signout}>
          <ListItemIcon>
            <ExitToApp />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </ListItem>
      </List>
    </SwipeableDrawer>
  );
});
