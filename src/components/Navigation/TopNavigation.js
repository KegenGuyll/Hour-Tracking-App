import React, { useRef } from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import { Settings } from '../Settings';

export const TopNavigation = props => {
  const childRef = useRef();

  return (
    <div>
      <AppBar style={{ background: 'black' }}>
        <Toolbar>
          <Typography style={{ flexGrow: 1, color: 'white' }} variant='h6'>
            TrackMeHours
          </Typography>
          <IconButton
            style={{ color: 'white' }}
            onClick={() => childRef.current.activeSettings()}
          >
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Settings ref={childRef} />
      <div style={{ paddingTop: '5vh' }}>{props.children}</div>
    </div>
  );
};
